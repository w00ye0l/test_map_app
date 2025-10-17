"use client";

import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const popularRentalRef = useRef<HTMLDivElement>(null);
  const seoulRentalRef = useRef<HTMLDivElement>(null);
  const busanRentalRef = useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const popularRental = properties.filter((p) => p.badge === "인기 렌탈");
  const seoulRental = properties.filter((p) => p.location.address === "서울");
  const busanRental = properties.filter((p) => p.location.address === "부산");

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="main" />

      {/* Main Content */}
      <main className="max-w-[1920px] mx-auto py-8">
        {/* Section 1: 인기 렌탈 모음 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              인기 렌탈 모음 🔥
            </h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll(popularRentalRef, "left")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(popularRentalRef, "right")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={popularRentalRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularRental.map((property) => (
              <div
                key={property.id}
                className="flex-none w-[45%] md:w-[calc(25%-9px)] lg:w-[calc(16.666%-10px)] 3xl:w-[calc(14.285%-10.3px)]"
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 서울 렌탈 물품 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              서울 렌탈 - 카메라, 자전거, 캠핑용품
            </h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll(seoulRentalRef, "left")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(seoulRentalRef, "right")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={seoulRentalRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {seoulRental.map((property) => (
              <div
                key={property.id}
                className="flex-none w-[45%] md:w-[calc(25%-9px)] lg:w-[calc(16.666%-10px)] 3xl:w-[calc(14.285%-10.3px)]"
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: 부산 렌탈 물품 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              부산 렌탈 - 서핑, 수상 스포츠, 해변용품
            </h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll(busanRentalRef, "left")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(busanRentalRef, "right")}
                className="p-2 border border-gray-300 rounded-full hover:shadow-md transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={busanRentalRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {busanRental.map((property) => (
              <div
                key={property.id}
                className="flex-none w-[45%] md:w-[calc(25%-9px)] lg:w-[calc(16.666%-10px)] 3xl:w-[calc(14.285%-10.3px)]"
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
