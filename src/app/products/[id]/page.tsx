"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import MapView from "@/components/MapView";
import {
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Shield,
  MessageCircle,
  Check,
} from "lucide-react";
import Image from "next/image";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find property by id
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            상품을 찾을 수 없습니다
          </h1>
          <button
            onClick={() => router.back()}
            className="text-[#FF8C42] hover:underline"
          >
            뒤로 가기
          </button>
        </div>
      </div>
    );
  }

  const images = property.images || [property.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="region" />

      {/* Image Gallery - Mobile: Single Image with arrows, Desktop: Grid */}
      {/* Mobile View - Full Width Single Image */}
      <div className="relative w-full aspect-square md:hidden">
        <Image
          src={images[currentImageIndex]}
          alt={property.title}
          fill
          className="object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Desktop View - Grid Gallery */}
      <div className="hidden md:block max-w-[1120px] mx-auto px-6 pt-6">
        <div className="grid grid-cols-2 gap-2 h-[500px]">
          {/* Main Image - Left Side */}
          <div className="relative rounded-l-xl overflow-hidden">
            <Image
              src={images[0]}
              alt={property.title}
              fill
              className="object-cover hover:brightness-95 transition-all cursor-pointer"
            />
          </div>

          {/* Thumbnails - Right Side (4 images in 2x2 grid) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {images.slice(1, 5).map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  index === 1
                    ? "rounded-tr-xl"
                    : index === 3
                    ? "rounded-br-xl"
                    : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`${property.title} ${index + 2}`}
                  fill
                  className="object-cover hover:brightness-95 transition-all cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Host */}
            <div className="border-b pb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{property.rating}</span>
                </div>
                <span>·</span>
                <span className="underline">후기 {property.reviews}개</span>
                <span>·</span>
                <span className="underline">{property.location.address}</span>
              </div>
            </div>

            {/* Host Info */}
            <div className="border-b pb-6">
              <div className="flex items-center gap-4">
                <Image
                  src={property.host.image}
                  alt={property.host.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    호스트: {property.host.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    가입 시기: {property.host.joinedDate}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-semibold">
                      응답률 {property.host.responseRate}%
                    </p>
                    <p className="text-xs text-gray-500">
                      응답 시간: {property.host.responseTime}
                    </p>
                  </div>
                </div>
                {property.host.verified && (
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#FF8C42]" />
                    <div>
                      <p className="text-sm font-semibold">인증됨</p>
                      <p className="text-xs text-gray-500">신원 확인 완료</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <div>
                    <p className="text-sm font-semibold">
                      후기 {property.host.reviewCount}개
                    </p>
                    <p className="text-xs text-gray-500">전체 후기</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">상품 설명</h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">포함 사항</h2>
              <div className="grid grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#FF8C42]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">대여 규칙</h2>
              <ul className="space-y-2">
                {property.rules.map((rule, index) => (
                  <li key={index} className="text-gray-700 flex gap-2">
                    <span className="text-[#FF8C42]">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">위치</h2>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <MapView
                  products={[property]}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                  markerStyle="icon"
                />
              </div>
              <p className="text-gray-700">{property.location.address}</p>
            </div>

            {/* Reviews */}
            <div className="pb-6">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-6 h-6 fill-current" />
                <h2 className="text-xl font-semibold">
                  {property.rating} · 후기 {property.reviews}개
                </h2>
              </div>

              {property.reviewList && property.reviewList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.reviewList.map((review) => (
                    <div key={review.id} className="pb-6 border-b last:border-b-0">
                      <div className="flex items-start gap-3 mb-3">
                        <Image
                          src={review.userImage}
                          alt={review.userName}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{review.userName}</h3>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-current text-yellow-500"
                                />
                              ))}
                            </div>
                            <span>· {review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">아직 작성된 후기가 없습니다</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">
                    ₩{property.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600">/ {property.rentalUnit}</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Date Selection */}
                <div className="border rounded-lg">
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-3">
                      <div className="text-xs font-semibold">시작일</div>
                      <div className="text-sm text-gray-500">날짜 선택</div>
                    </div>
                    <div className="p-3">
                      <div className="text-xs font-semibold">종료일</div>
                      <div className="text-sm text-gray-500">날짜 선택</div>
                    </div>
                  </div>
                  <div className="border-t p-3">
                    <div className="text-xs font-semibold">대여 기간</div>
                    <div className="text-sm text-gray-500">{property.date}</div>
                  </div>
                </div>

                {/* Reserve Button */}
                <button className="w-full bg-[#FF8C42] text-white py-3 rounded-lg font-semibold hover:bg-[#ff7a28] transition-colors">
                  예약하기
                </button>

                <p className="text-center text-sm text-gray-500">
                  예약 확정 전에는 요금이 청구되지 않습니다
                </p>

                {/* Price Breakdown */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="underline">
                      ₩{property.price.toLocaleString()} x 1
                      {property.rentalUnit}
                    </span>
                    <span>₩{property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="underline">보증금</span>
                    <span>₩50,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="underline">서비스 수수료</span>
                    <span>
                      ₩{Math.floor(property.price * 0.1).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>총 합계</span>
                    <span>
                      ₩
                      {(
                        property.price +
                        50000 +
                        Math.floor(property.price * 0.1)
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 pt-6 border-t">
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="underline">공유하기</span>
                </button>
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="underline">저장하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
