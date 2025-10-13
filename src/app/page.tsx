"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import MapView from "@/components/MapView";
import { products, Category } from "@/data/products";
import { MarkerStyle } from "@/types/marker";

export default function Home() {
  const [highlightedProductId, setHighlightedProductId] = useState<
    number | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListCollapsed, setIsListCollapsed] = useState(false);
  const [markerStyle, setMarkerStyle] = useState<MarkerStyle>("price");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // Replace with your Google Maps API key
  const GOOGLE_MAPS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.location.address.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Navigation Bar */}
      <Navbar
        onSearch={handleSearch}
        markerStyle={markerStyle}
        onMarkerStyleChange={setMarkerStyle}
      />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left side - Product List */}
        <div
          className={`h-full bg-gray-50 transition-all duration-300 ease-in-out relative ${
            isListCollapsed ? "w-0" : "w-full md:w-1/2"
          }`}
        >
          {!isListCollapsed && (
            <ProductList
              products={filteredProducts}
              onProductHover={setHighlightedProductId}
              highlightedProductId={highlightedProductId}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setIsListCollapsed(!isListCollapsed)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 bg-white shadow-lg p-2 hover:bg-gray-100 transition-all duration-200 border border-l-0 border-gray-200 rounded-r-lg"
          >
            {isListCollapsed ? (
              <ChevronRight className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Right side - Map */}
        <div
          className={`h-full transition-all duration-300 ease-in-out ${
            isListCollapsed ? "w-full" : "w-0 md:w-1/2"
          }`}
        >
          <MapView
            products={filteredProducts}
            onMarkerHover={setHighlightedProductId}
            highlightedProductId={highlightedProductId}
            apiKey={GOOGLE_MAPS_API_KEY}
            markerStyle={markerStyle}
          />
        </div>
      </div>
    </div>
  );
}
