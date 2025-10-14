"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
        <div className="flex items-center divide-x divide-gray-300">
          {/* Location */}
          <div className="flex-1 min-w-0">
            <button className="w-full text-left px-6 py-4 rounded-l-full hover:bg-gray-100 transition-colors">
              <div className="text-xs font-semibold mb-1">어떤지</div>
              <input
                type="text"
                placeholder="어떤지 검색"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
              />
            </button>
          </div>

          {/* Date */}
          <div className="flex-1 min-w-0">
            <button className="w-full text-left px-6 py-4 hover:bg-gray-100 transition-colors">
              <div className="text-xs font-semibold mb-1">날짜</div>
              <input
                type="text"
                placeholder="날짜 추가"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
              />
            </button>
          </div>

          {/* Guests */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center pr-2">
              <button className="flex-1 text-left px-6 py-4 hover:bg-gray-100 transition-colors">
                <div className="text-xs font-semibold mb-1">여행자</div>
                <input
                  type="text"
                  placeholder="게스트 추가"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                />
              </button>

              {/* Search Button */}
              <button className="bg-[#FF8C42] text-white p-3 rounded-full hover:bg-[#E67A2E] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
