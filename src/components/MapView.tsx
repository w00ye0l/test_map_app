"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Home } from "lucide-react";
import { Product } from "@/data/products";
import { Property } from "@/data/properties";
import { MarkerStyle } from "@/types/marker";

// Union type for items that can be displayed on the map
type MapItem = Product | Property;

interface MapViewProps {
  products: MapItem[];
  onMarkerHover?: (productId: number | null) => void;
  highlightedProductId?: number | null;
  apiKey: string;
  markerStyle?: MarkerStyle;
}

export default function MapView({
  products,
  onMarkerHover,
  highlightedProductId,
  apiKey,
  markerStyle = "price",
}: MapViewProps) {

  // Calculate center of all products
  // Default to Seoul coordinates if no products
  const defaultCenter = { lat: 37.5665, lng: 126.978 };
  const center =
    products.length > 0
      ? {
          lat:
            products.reduce((sum, p) => sum + p.location.lat, 0) /
            products.length,
          lng:
            products.reduce((sum, p) => sum + p.location.lng, 0) /
            products.length,
        }
      : defaultCenter;

  const renderMarkerContent = (product: MapItem, isHighlighted: boolean) => {
    switch (markerStyle) {
      case "icon":
        return (
          <div
            className={`transition-all duration-200 cursor-pointer shadow-lg p-1 rounded-full flex items-center gap-2 ${
              isHighlighted
                ? "bg-[#FF8C42] text-white scale-110"
                : "bg-white text-gray-900 hover:bg-[#FF8C42] hover:text-white hover:scale-105"
            }`}
          >
            <div
              className={`p-1 rounded-full transition-all duration-200 ${
                isHighlighted ? "bg-white" : "bg-[#FF8C42]"
              }`}
            >
              <Home
                className={`w-5 h-5 ${
                  isHighlighted ? "text-[#FF8C42]" : "text-white"
                }`}
              />
            </div>
          </div>
        );

      case "icon-price":
        return (
          <div
            className={`transition-all duration-200 cursor-pointer shadow-lg p-1 pr-2 rounded-full flex items-center gap-2 ${
              isHighlighted
                ? "bg-[#FF8C42] text-white scale-110"
                : "bg-white text-gray-900 hover:bg-[#FF8C42] hover:text-white hover:scale-105"
            }`}
          >
            <div
              className={`p-1 rounded-full transition-all duration-200 ${
                isHighlighted ? "bg-white" : "bg-[#FF8C42]"
              }`}
            >
              <Home
                className={`w-5 h-5 ${
                  isHighlighted ? "text-[#FF8C42]" : "text-white"
                }`}
              />
            </div>
            <span className="font-semibold text-sm pr-1">${product.price}</span>
          </div>
        );

      case "price":
      default:
        return (
          <div
            className={`transition-all duration-200 cursor-pointer shadow-lg px-3 py-2 rounded-full font-semibold text-sm ${
              isHighlighted
                ? "bg-[#FF8C42] text-white scale-110"
                : "bg-white text-gray-900 hover:bg-[#FF8C42] hover:text-white hover:scale-105"
            }`}
          >
            ${product.price}
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full">
      <APIProvider apiKey={apiKey} language="en">
        <Map
          defaultCenter={center}
          defaultZoom={12}
          mapId="product-map"
          disableDefaultUI={false}
          gestureHandling="greedy"
        >
          {products.map((product) => {
            const isHighlighted = highlightedProductId === product.id;

            return (
              <AdvancedMarker
                key={product.id}
                position={product.location}
                onMouseEnter={() => onMarkerHover?.(product.id)}
                onMouseLeave={() => onMarkerHover?.(null)}
              >
                {renderMarkerContent(product, isHighlighted)}
              </AdvancedMarker>
            );
          })}
        </Map>
      </APIProvider>
    </div>
  );
}
