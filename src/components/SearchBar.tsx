"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  variant?: "main-compact" | "main-full" | "region-desktop" | "region-mobile";
}

export default function SearchBar({ variant = "main-full" }: SearchBarProps) {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    // 기본 지역명은 서울
    const searchLocation = location.trim() || "서울";
    router.push(`/s/${encodeURIComponent(searchLocation)}`);
  };

  // Main Page - Compact Search Bar (모바일 & 스크롤 시)
  if (variant === "main-compact") {
    return (
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
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
            <div className="flex items-center pr-1">
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
              <button
                onClick={handleSearch}
                className="bg-[#FF8C42] text-white p-2 rounded-full hover:bg-[#E67A2E]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Page - Full Search Bar (데스크탑 스크롤 전)
  if (variant === "main-full") {
    return (
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
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
              <button
                onClick={handleSearch}
                className="bg-[#FF8C42] text-white p-4 rounded-full hover:bg-[#E67A2E] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Region Page - Desktop Search Bar
  if (variant === "region-desktop") {
    return (
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
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
                <div className="text-xs font-semibold mb-0.5">여행자</div>
                <input
                  type="text"
                  placeholder="게스트 추가"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#FF8C42] text-white p-2.5 rounded-full hover:bg-[#E67A2E] transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Region Page - Mobile Search Bar
  if (variant === "region-mobile") {
    return (
      <div className="bg-white rounded-full shadow-md border border-gray-200 p-3">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="어떤지 검색"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
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
            <button
              onClick={handleSearch}
              className="bg-[#FF8C42] text-white p-2 rounded-full hover:bg-[#E67A2E] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
