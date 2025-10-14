"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, MapPin, Home, DollarSign, Globe } from "lucide-react";
import { MarkerStyle } from "@/types/marker";
import Link from "next/link";

interface NavbarProps {
  onSearch?: (query: string) => void;
  markerStyle?: MarkerStyle;
  onMarkerStyleChange?: (style: MarkerStyle) => void;
  variant?: "main" | "region";
}

export default function Navbar({
  onSearch,
  markerStyle = "price",
  onMarkerStyleChange,
  variant = "main",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "main") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // 히스테리시스 적용: 내려갈 때는 20px, 올라갈 때는 5px
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else if (scrollPosition < 5) {
        setIsScrolled(false);
      }
      // 5~20px 사이에서는 현재 상태 유지
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  return (
    <nav
      className={`border-b border-gray-200 sticky top-0 z-50 shadow-sm ${
        variant === "main" ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto ${
          variant === "main"
            ? "max-w-[1920px] px-2 md:px-4 lg:px-8"
            : "max-w-full px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex items-center relative ${
            variant === "main" ? "h-14 md:h-20 justify-center md:justify-between" : "h-20 justify-between"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 flex-shrink-0 ${
              variant === "main" ? "hidden md:flex" : "flex"
            }`}
          >
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Locano</span>
          </Link>

          {/* Main Page - Compact Search Bar (Mobile: Always, Desktop: When Scrolled) */}
          {variant === "main" && (
            <div
              className={`w-auto md:absolute md:left-1/2 md:-translate-x-1/2 ${
                isScrolled ? "flex" : "flex md:hidden"
              }`}
            >
              <div className="bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg">
                <div className="flex items-center divide-x divide-gray-300">
                  {/* Location */}
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="근처 상품"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-20 text-sm text-center text-gray-800 bg-transparent outline-none placeholder:text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="언제든"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-16 text-sm text-center text-gray-800 bg-transparent outline-none placeholder:text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center pr-2">
                      <div className="px-4 py-2">
                        <input
                          type="text"
                          placeholder="게스트 추가"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-16 text-sm text-center text-gray-800 bg-transparent outline-none placeholder:text-gray-800"
                        />
                      </div>

                      {/* Search Button */}
                      <button className="bg-[#FF385C] text-white p-2 rounded-full hover:bg-[#E31C5F]">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Region Page - Compact Search Bar */}
          {variant === "region" && (
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="w-full bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center divide-x divide-gray-300">
                  {/* Location */}
                  <div className="flex-1 min-w-0">
                    <div className="px-6 py-2.5">
                      <div className="text-xs font-semibold mb-0.5">어떤지</div>
                      <input
                        type="text"
                        placeholder="어떤지 검색"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex-1 min-w-0">
                    <div className="px-6 py-2.5">
                      <div className="text-xs font-semibold mb-0.5">날짜</div>
                      <input
                        type="text"
                        placeholder="날짜 추가"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center pr-2">
                      <div className="flex-1 px-6 py-2.5">
                        <div className="text-xs font-semibold mb-0.5">
                          여행자
                        </div>
                        <input
                          type="text"
                          placeholder="게스트 추가"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                        />
                      </div>

                      {/* Search Button */}
                      <button className="bg-[#FF385C] text-white p-2.5 rounded-full hover:bg-[#E31C5F] transition-colors">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* Marker Style Selector - Only on Region Page */}
            {variant === "region" && (
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => onMarkerStyleChange?.("icon")}
                  className={`p-2 rounded-md transition-all ${
                    markerStyle === "icon"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Icon only"
                >
                  <Home className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={() => onMarkerStyleChange?.("icon-price")}
                  className={`p-2 rounded-md transition-all ${
                    markerStyle === "icon-price"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Icon + Price"
                >
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4 text-gray-700" />
                    <DollarSign className="w-3 h-3 text-gray-700" />
                  </div>
                </button>
                <button
                  onClick={() => onMarkerStyleChange?.("price")}
                  className={`p-2 rounded-md transition-all ${
                    markerStyle === "price"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Price only"
                >
                  <DollarSign className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            )}

            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Globe className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 border border-gray-300 rounded-full pl-3 pr-2 py-1.5 hover:shadow-md transition">
              <Menu className="w-4 h-4" />
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md text-gray-700 hover:bg-gray-100 ${
              variant === "main" ? "hidden" : "md:hidden"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Main Page - Search Bar Below Navbar (Desktop Only) */}
        {variant === "main" && !isScrolled && (
          <div className="hidden md:block pb-6 pt-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl">
                <div className="flex items-center divide-x divide-gray-300">
                  {/* Location */}
                  <div className="flex-1 min-w-0">
                    <div className="px-8 py-3">
                      <div className="text-xs font-semibold">여행지</div>
                      <input
                        type="text"
                        placeholder="여행지 검색"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex-1 min-w-0">
                    <div className="px-6 py-3">
                      <div className="text-xs font-semibold">날짜</div>
                      <input
                        type="text"
                        placeholder="날짜 추가"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center pr-2">
                      <div className="flex-1 px-6 py-3">
                        <div className="text-xs font-semibold">여행자</div>
                        <input
                          type="text"
                          placeholder="게스트 추가"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-500"
                        />
                      </div>

                      {/* Search Button */}
                      <button className="bg-[#FF385C] text-white p-4 rounded-full hover:bg-[#E31C5F] transition-colors">
                        <Search className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Region Page - Mobile Search Bar */}
        {variant === "region" && (
          <div className="md:hidden pb-3">
            <div className="bg-white rounded-full shadow-md border border-gray-200 p-3">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="어떤지 검색"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="날짜 추가"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder:text-gray-400"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="게스트 추가"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                  />
                  <button className="bg-[#FF385C] text-white p-2 rounded-full hover:bg-[#E31C5F] transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && variant === "region" && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            {/* Marker Style Selector */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Marker Style
              </span>
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => onMarkerStyleChange?.("icon")}
                  className={`flex-1 p-2 rounded-md transition-all ${
                    markerStyle === "icon"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Icon only"
                >
                  <Home className="w-4 h-4 text-gray-700 mx-auto" />
                </button>
                <button
                  onClick={() => onMarkerStyleChange?.("icon-price")}
                  className={`flex-1 p-2 rounded-md transition-all ${
                    markerStyle === "icon-price"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Icon + Price"
                >
                  <div className="flex items-center justify-center gap-1">
                    <Home className="w-4 h-4 text-gray-700" />
                    <DollarSign className="w-3 h-3 text-gray-700" />
                  </div>
                </button>
                <button
                  onClick={() => onMarkerStyleChange?.("price")}
                  className={`flex-1 p-2 rounded-md transition-all ${
                    markerStyle === "price"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  title="Price only"
                >
                  <DollarSign className="w-4 h-4 text-gray-700 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
