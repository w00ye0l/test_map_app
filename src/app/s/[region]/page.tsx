"use client";

import { use, useState, useMemo, useEffect } from "react";
import { Map } from "lucide-react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import MapView from "@/components/MapView";
import { properties, Property } from "@/data/properties";
import { MarkerStyle } from "@/types/marker";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function SearchPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = use(params);
  const [highlightedPropertyId, setHighlightedPropertyId] = useState<
    number | null
  >(null);
  const [searchQuery] = useState(decodeURIComponent(region));
  const [markerStyle, setMarkerStyle] = useState<MarkerStyle>("price");
  const [isMapDrawerOpen, setIsMapDrawerOpen] = useState(false);

  // Replace with your Google Maps API key
  const GOOGLE_MAPS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

  // Handle drawer state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMapDrawerOpen(false);
      } else {
        setIsMapDrawerOpen(true);
      }
    };

    // Check initial screen size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter properties based on search query
  const filteredProperties = useMemo(() => {
    let filtered = properties;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.category.toLowerCase().includes(query) ||
          property.location.address.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Navigation Bar */}
      <Navbar
        variant="region"
        markerStyle={markerStyle}
        onMarkerStyleChange={setMarkerStyle}
      />

      {/* Main Content */}
      <div className="flex flex-1 relative bg-white">
        {/* Very Small (< 640px): Map on top with list button */}
        <div className="sm:hidden w-full relative">
          {/* Map View */}
          <div className="h-[calc(100vh-5rem)] w-full">
            <MapView
              products={filteredProperties}
              onMarkerHover={setHighlightedPropertyId}
              highlightedProductId={highlightedPropertyId}
              apiKey={GOOGLE_MAPS_API_KEY}
              markerStyle={markerStyle}
            />
          </div>

          {/* Fixed Bottom List Button */}
          <button
            onClick={() => setIsMapDrawerOpen(true)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
          >
            목록 보기
          </button>
        </div>

        {/* Medium (640px - 950px): Grid only with map button */}
        <div className="hidden sm:block map-show:hidden w-full relative">
          <div className="p-6 bg-white pb-24">
            <div className="mb-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                {searchQuery
                  ? `"${searchQuery}" 검색 결과`
                  : "렌탈 상품 둘러보기"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {filteredProperties.length}개의 상품
                {searchQuery && ` 찾음`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {filteredProperties.map((property) => (
                <div key={property.id}>
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
                <p className="text-gray-400 text-sm mt-2">
                  다른 지역명으로 검색해보세요.
                </p>
              </div>
            )}
          </div>

          {/* Fixed Bottom Map Button */}
          <button
            onClick={() => setIsMapDrawerOpen(true)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
          >
            <Map className="w-5 h-5" />
            지도 보기
          </button>
        </div>

        {/* Large (950px+): Split view with grid on left, map on right */}
        <div className="hidden map-show:flex w-full">
          {/* Desktop - Property Grid */}
          <div className="bg-white w-[60%] max-w-[1200px]">
            <div className="p-6 bg-white">
              <div className="mb-6">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {searchQuery
                    ? `"${searchQuery}" 검색 결과`
                    : "렌탈 상품 둘러보기"}
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  {filteredProperties.length}개의 상품
                  {searchQuery && ` 찾음`}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    onMouseEnter={() => setHighlightedPropertyId(property.id)}
                    onMouseLeave={() => setHighlightedPropertyId(null)}
                    className="transition-all duration-200"
                  >
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
                  <p className="text-gray-400 text-sm mt-2">
                    다른 지역명으로 검색해보세요.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop - Map */}
          <div className="flex-1">
            <div className="sticky top-20 h-[calc(100vh-5rem)] p-6">
              <div className="h-full rounded-3xl overflow-hidden">
                <MapView
                  products={filteredProperties}
                  onMarkerHover={setHighlightedPropertyId}
                  highlightedProductId={highlightedPropertyId}
                  apiKey={GOOGLE_MAPS_API_KEY}
                  markerStyle={markerStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property List Drawer for < 640px screens */}
      <Drawer
        modal={false}
        open={isMapDrawerOpen}
        onOpenChange={setIsMapDrawerOpen}
      >
        <DrawerContent className="h-[50vh]">
          <VisuallyHidden>
            <DrawerTitle>상품 목록</DrawerTitle>
          </VisuallyHidden>
          <div className="h-full w-full overflow-y-auto px-4 pb-6 scrollbar-hide">
            <div className="mb-4 text-center">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                {searchQuery
                  ? `"${searchQuery}" 검색 결과`
                  : "렌탈 상품 둘러보기"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {filteredProperties.length}개의 상품
                {searchQuery && ` 찾음`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  onMouseEnter={() => setHighlightedPropertyId(property.id)}
                  onMouseLeave={() => setHighlightedPropertyId(null)}
                  className="transition-all duration-200"
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
                <p className="text-gray-400 text-sm mt-2">
                  다른 지역명으로 검색해보세요.
                </p>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
