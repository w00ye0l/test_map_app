"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

interface NavbarProps {
  variant?: "main" | "region";
}

export default function Navbar({
  variant = "main",
}: NavbarProps) {
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
    <nav
      className="border-b border-gray-200 sticky top-0 z-50 shadow-sm bg-gradient-to-b from-white to-gray-50"
    >
      <div
        className={`mx-auto ${
          variant === "main"
            ? "max-w-[1920px] px-2 md:px-4 lg:px-8"
            : "max-w-full px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className="flex items-center relative h-20 justify-between"
        >
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
          <div className="hidden md:flex items-center gap-4">
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
              <SearchBar variant="main-full" />
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}
