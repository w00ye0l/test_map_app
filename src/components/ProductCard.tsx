import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onHover?: (productId: number | null) => void;
  isHighlighted?: boolean;
}

export default function ProductCard({ product, onHover, isHighlighted }: ProductCardProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isHighlighted ? 'ring-2 ring-blue-500' : ''
      }`}
      onMouseEnter={() => onHover?.(product.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {product.location.address}
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
