"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Home, DollarSign } from "lucide-react";
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
  onMarkerStyleChange?: (style: MarkerStyle) => void;
}

export default function MapView({
  products,
  onMarkerHover,
  highlightedProductId,
  apiKey,
  markerStyle = "price",
  onMarkerStyleChange,
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
            <span className="font-semibold text-sm pr-1">₩{product.price.toLocaleString()}</span>
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
            ₩{product.price.toLocaleString()}
          </div>
        );
    }
  };

  // Ultra minimal map styles - almost invisible
  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ saturation: -100 }, { lightness: 50 }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#f0f0f0" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#fafafa" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { weight: 0.5 }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [{ visibility: "simplified" }, { lightness: 80 }],
    },
  ];

  return (
    <div className="h-full w-full relative">
      <APIProvider apiKey={apiKey} language="en">
        <Map
          defaultCenter={center}
          defaultZoom={12}
          mapId="product-map"
          disableDefaultUI={true}
          clickableIcons={false}
          gestureHandling="greedy"
          styles={mapStyles}
          zoomControl={true}
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

      {/* Marker Style Selector - Absolute positioned on top right */}
      {onMarkerStyleChange && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-white rounded-lg p-1 shadow-lg">
          <button
            onClick={() => onMarkerStyleChange("icon")}
            className={`p-2 rounded-md transition-all ${
              markerStyle === "icon"
                ? "bg-gray-100 shadow-sm"
                : "hover:bg-gray-100"
            }`}
            title="Icon only"
          >
            <Home className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => onMarkerStyleChange("icon-price")}
            className={`p-2 rounded-md transition-all ${
              markerStyle === "icon-price"
                ? "bg-gray-100 shadow-sm"
                : "hover:bg-gray-100"
            }`}
            title="Icon + Price"
          >
            <div className="flex items-center gap-1">
              <Home className="w-4 h-4 text-gray-700" />
              <DollarSign className="w-3 h-3 text-gray-700" />
            </div>
          </button>
          <button
            onClick={() => onMarkerStyleChange("price")}
            className={`p-2 rounded-md transition-all ${
              markerStyle === "price"
                ? "bg-gray-100 shadow-sm"
                : "hover:bg-gray-100"
            }`}
            title="Price only"
          >
            <DollarSign className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}
