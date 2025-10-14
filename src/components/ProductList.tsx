"use client";

import { Product, Category } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onProductHover?: (productId: number | null) => void;
  highlightedProductId?: number | null;
  searchQuery?: string;
  selectedCategory?: Category;
  onCategoryChange?: (category: Category) => void;
}

const CATEGORIES = [
  { value: 'all' as Category, label: 'All' },
  { value: 'apartment' as Category, label: 'Apartment' },
  { value: 'loft' as Category, label: 'Loft' },
  { value: 'house' as Category, label: 'House' },
  { value: 'studio' as Category, label: 'Studio' },
];

export default function ProductList({
  products,
  onProductHover,
  highlightedProductId,
  searchQuery,
  selectedCategory = 'all',
  onCategoryChange,
}: ProductListProps) {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden p-6 bg-gray-50 scrollbar-hide">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {searchQuery ? "Search Results" : "Explore Stays"}
        </h1>
        <p className="text-gray-600">
          {products.length} {products.length === 1 ? "property" : "properties"}
          {searchQuery && ` found for "${searchQuery}"`}
        </p>

        {/* Category Filter */}
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange?.(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === category.value
                  ? 'bg-[#FF8C42] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-2">No properties found</p>
          <p className="text-gray-400 text-sm">Try adjusting your search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onHover={onProductHover}
              isHighlighted={highlightedProductId === product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
