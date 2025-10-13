"use client";

import { useState } from "react";
import { Search, Menu, X, MapPin, Home, DollarSign } from "lucide-react";
import { MarkerStyle } from "@/types/marker";

interface NavbarProps {
  onSearch?: (query: string) => void;
  markerStyle?: MarkerStyle;
  onMarkerStyleChange?: (style: MarkerStyle) => void;
}

export default function Navbar({
  onSearch,
  markerStyle = "price",
  onMarkerStyleChange,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Search Bar - Desktop */}
          <div className="flex items-center gap-4 flex-1">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <MapPin className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                ExploreStays
              </span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations, properties..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      onSearch?.(e.target.value);
                    }}
                    className="w-full px-4 py-2 pl-12 pr-4 text-sm bg-gray-100 border-2 border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        onSearch?.("");
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {/* Marker Style Selector */}
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar - Below Navbar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch?.(e.target.value);
                }}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-gray-100 border-2 border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    onSearch?.('');
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-3 h-3 text-gray-500 hover:text-gray-700" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
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
