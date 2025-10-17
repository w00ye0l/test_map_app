"use client";

import { Heart, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  price: number;
  rating: number;
  badge?: string;
  rentalUnit: "시간" | "일" | "박";
}

export default function PropertyCard({
  id,
  image,
  title,
  date,
  price,
  rating,
  badge,
  rentalUnit,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/region`} className="group cursor-pointer">
      <div className="relative aspect-square rounded-3xl overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-1 hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-6 h-6 ${
              isFavorite
                ? "fill-[#FF8C42] stroke-[#FF8C42]"
                : "fill-black/50 stroke-white"
            }`}
          />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        {/* Title */}
        <h3 className="font-semibold text-base truncate">{title}</h3>

        {/* Date */}
        <p className="text-sm text-gray-600">{date}</p>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold">₩{price.toLocaleString()}</span>
            <span className="text-sm text-gray-600"> / {rentalUnit}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-black" />
            <span className="text-sm font-medium">{rating.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
