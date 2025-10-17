"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin, Globe, ArrowLeft, Heart, Share } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

interface NavbarProps {
  variant?: "main" | "region" | "product";
}

export default function Navbar({ variant = "main" }: NavbarProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className={`border-b border-gray-200 sticky top-0 z-50 shadow-sm ${variant === "main" ? "bg-gradient-to-b from-white to-gray-50" : "bg-white"}`}>
      <div
        className={`mx-auto ${
          variant === "main"
            ? "max-w-[1920px] px-2 md:px-4 lg:px-8"
            : "max-w-full px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex items-center relative justify-between ${
            variant === "product" ? "h-14 md:h-24" : "h-24"
          }`}
        >
          {/* Product Page - Mobile Only Navigation */}
          {variant === "product" && (
            <>
              {/* Left: Back Button - Mobile only */}
              <button
                onClick={() => router.back()}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Right: Share and Save Buttons - Mobile only */}
              <div className="md:hidden flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Share className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </>
          )}

          {/* Back Button - Mobile Only (Region Page) */}
          {variant === "region" && (
            <button
              onClick={() => router.back()}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Logo - Desktop only */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 flex-shrink-0"
          >
            <MapPin className="w-8 h-8 text-[#FF8C42]" />
            <span className="text-xl font-bold text-gray-900">Locano</span>
          </Link>

          {/* Main Page - Compact Search Bar (Mobile: Center, Desktop: When Scrolled) */}
          {variant === "main" && (
            <div
              className={`absolute left-1/2 -translate-x-1/2 ${
                isScrolled ? "flex" : "flex md:hidden"
              }`}
            >
              <SearchBar variant="main-compact" />
            </div>
          )}

          {/* Region Page - Search Bar */}
          {variant === "region" && (
            <>
              {/* Mobile: Center small search */}
              <div className="md:hidden absolute left-1/2 -translate-x-1/2">
                <SearchBar variant="main-compact" />
              </div>

              {/* Desktop: Full search */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <SearchBar variant="region-desktop" />
              </div>
            </>
          )}

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">
              <Globe className="w-5 h-5 text-gray-700" />
            </button>

            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          {variant !== "product" && (
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
          )}
        </div>

        {/* Main Page - Search Bar Below Navbar (Desktop Only) */}
        {variant === "main" && !isScrolled && (
          <div className="hidden md:block pb-6 pt-4">
            <div className="max-w-4xl mx-auto">
              <SearchBar variant="main-full" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
