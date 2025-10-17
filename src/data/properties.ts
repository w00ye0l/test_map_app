export interface Property {
  id: number;
  image: string;
  title: string;
  date: string;
  price: number;
  rating: number;
  badge?: string;
  category: string;
  rentalUnit: "시간" | "일" | "박";
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export const properties: Property[] = [
  // 서울 렌탈 물품
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606986601547-a4d886b671b2?w=800&q=80",
    title: "전문가용 미러리스 카메라 (Sony A7 IV)",
    date: "1일 대여",
    price: 45000,
    rating: 4.98,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5665,
      lng: 126.978,
      address: "서울",
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    title: "전동 자전거 (도심 투어용)",
    date: "1일 대여",
    price: 25000,
    rating: 4.95,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5515,
      lng: 126.9882,
      address: "서울",
    },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    title: "캠핑 풀세트 (텐트+침낭+매트)",
    date: "2박 3일",
    price: 65000,
    rating: 4.89,
    category: "seoul-rental",
    rentalUnit: "박",
    location: {
      lat: 37.5797,
      lng: 126.977,
      address: "서울",
    },
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
    title: "드론 (DJI Mini 3 Pro)",
    date: "1일 대여",
    price: 55000,
    rating: 4.92,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5833,
      lng: 126.9833,
      address: "서울",
    },
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?w=800&q=80",
    title: "프로젝터 + 스크린 세트",
    date: "1일 대여",
    price: 35000,
    rating: 4.87,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5172,
      lng: 127.0473,
      address: "서울",
    },
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    title: "노트북 (MacBook Pro 16)",
    date: "1일 대여",
    price: 40000,
    rating: 4.96,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5407,
      lng: 126.9563,
      address: "서울",
    },
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1623993308369-017255b87e2c?w=800&q=80",
    title: "전동 킥보드 (Segway Ninebot)",
    date: "1일 대여",
    price: 20000,
    rating: 4.84,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5219,
      lng: 127.0411,
      address: "서울",
    },
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
    title: "게이밍 노트북 (RTX 4070)",
    date: "1일 대여",
    price: 50000,
    rating: 4.91,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.5494,
      lng: 126.9227,
      address: "서울",
    },
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    title: "파티용 스피커 세트 (JBL PartyBox)",
    date: "1일 대여",
    price: 45000,
    rating: 4.89,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.57,
      lng: 126.985,
      address: "서울",
    },
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    title: "바비큐 그릴 세트 (가스/숯불)",
    date: "1일 대여",
    price: 30000,
    rating: 4.86,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.56,
      lng: 126.975,
      address: "서울",
    },
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80",
    title: "닌텐도 스위치 + 게임팩",
    date: "2박 3일",
    price: 35000,
    rating: 4.93,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "박",
    location: {
      lat: 37.545,
      lng: 127.055,
      address: "서울",
    },
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1689435505430-b4fda78d10ff?w=800&q=80",
    title: "360도 액션캠 (Insta360)",
    date: "1일 대여",
    price: 40000,
    rating: 4.9,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.555,
      lng: 126.97,
      address: "서울",
    },
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?w=800&q=80",
    title: "전문가용 짐벌 (DJI RS 3)",
    date: "1일 대여",
    price: 38000,
    rating: 4.87,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.53,
      lng: 127.04,
      address: "서울",
    },
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
    title: "파티용 조명 세트 (LED)",
    date: "1일 대여",
    price: 25000,
    rating: 4.82,
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.575,
      lng: 126.99,
      address: "서울",
    },
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    title: "VR 헤드셋 (Meta Quest 3)",
    date: "2박 3일",
    price: 55000,
    rating: 4.94,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "박",
    location: {
      lat: 37.52,
      lng: 127.03,
      address: "서울",
    },
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?w=800&q=80",
    title: "하이킹 배낭 + 등산스틱",
    date: "2박 3일",
    price: 28000,
    rating: 4.88,
    category: "seoul-rental",
    rentalUnit: "박",
    location: {
      lat: 37.565,
      lng: 127.01,
      address: "서울",
    },
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80",
    title: "포터블 에스프레소 머신",
    date: "2박 3일",
    price: 22000,
    rating: 4.79,
    category: "seoul-rental",
    rentalUnit: "박",
    location: {
      lat: 37.535,
      lng: 126.965,
      address: "서울",
    },
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "고프로 Hero 11 + 액세서리",
    date: "1일 대여",
    price: 33000,
    rating: 4.92,
    badge: "인기 렌탈",
    category: "seoul-rental",
    rentalUnit: "일",
    location: {
      lat: 37.58,
      lng: 127.0,
      address: "서울",
    },
  },

  // 부산 렌탈 물품 (해변/수상 스포츠)
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    title: "서핑보드 (초보자용)",
    date: "1일 대여",
    price: 30000,
    rating: 4.91,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.1796,
      lng: 129.0756,
      address: "부산",
    },
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    title: "SUP 패들보드",
    date: "1일 대여",
    price: 35000,
    rating: 4.94,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.1586,
      lng: 129.1606,
      address: "부산",
    },
  },
  {
    id: 21,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "스노클링 세트 (마스크+핀+슈트)",
    date: "1일 대여",
    price: 20000,
    rating: 4.88,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.16,
      lng: 129.1635,
      address: "부산",
    },
  },
  {
    id: 22,
    image:
      "https://images.unsplash.com/photo-1588472235276-7638965471e2?w=800&q=80",
    title: "카약 (2인용)",
    date: "2시간 대여",
    price: 40000,
    rating: 4.93,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.155,
      lng: 129.158,
      address: "부산",
    },
  },
  {
    id: 23,
    image:
      "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80",
    title: "비치 파라솔 + 의자 세트",
    date: "1일 대여",
    price: 15000,
    rating: 4.85,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.165,
      lng: 129.165,
      address: "부산",
    },
  },
  {
    id: 24,
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80",
    title: "수중 카메라 (GoPro Hero 12)",
    date: "1일 대여",
    price: 35000,
    rating: 4.97,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.158,
      lng: 129.16,
      address: "부산",
    },
  },
  {
    id: 25,
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    title: "윈드서핑 보드 + 세일",
    date: "2시간 대여",
    price: 45000,
    rating: 4.86,
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.17,
      lng: 129.17,
      address: "부산",
    },
  },
  {
    id: 26,
    image:
      "https://images.unsplash.com/photo-1505867798796-639ec7e8cdf5?w=800&q=80",
    title: "제트스키 (1인용)",
    date: "30분 대여",
    price: 80000,
    rating: 4.95,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.162,
      lng: 129.162,
      address: "부산",
    },
  },
  {
    id: 27,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "스쿠버 다이빙 장비 풀세트",
    date: "1일 대여",
    price: 60000,
    rating: 4.92,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.175,
      lng: 129.175,
      address: "부산",
    },
  },
  {
    id: 28,
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    title: "비치 발리볼 세트",
    date: "1일 대여",
    price: 12000,
    rating: 4.78,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.159,
      lng: 129.159,
      address: "부산",
    },
  },
  {
    id: 29,
    image:
      "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?w=800&q=80",
    title: "낚시 장비 세트 (바다낚시)",
    date: "1일 대여",
    price: 25000,
    rating: 4.83,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.18,
      lng: 129.08,
      address: "부산",
    },
  },
  {
    id: 30,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    title: "바나나보트 (6인용)",
    date: "30분 대여",
    price: 120000,
    rating: 4.89,
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.156,
      lng: 129.156,
      address: "부산",
    },
  },
  {
    id: 31,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    title: "프라이빗 쿨러 박스 + 음료",
    date: "1일 대여",
    price: 18000,
    rating: 4.81,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.163,
      lng: 129.163,
      address: "부산",
    },
  },
  {
    id: 32,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    title: "비치 텐트 (4인용)",
    date: "1일 대여",
    price: 22000,
    rating: 4.87,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.164,
      lng: 129.164,
      address: "부산",
    },
  },
  {
    id: 33,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "플라이보드 체험 (강사 포함)",
    date: "30분 대여",
    price: 90000,
    rating: 4.96,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.172,
      lng: 129.172,
      address: "부산",
    },
  },
  {
    id: 34,
    image:
      "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80",
    title: "바다 튜브 (도넛형)",
    date: "1일 대여",
    price: 15000,
    rating: 4.8,
    category: "busan-rental",
    rentalUnit: "일",
    location: {
      lat: 35.157,
      lng: 129.157,
      address: "부산",
    },
  },
  {
    id: 35,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "씨카약 (투명 바닥)",
    date: "2시간 대여",
    price: 50000,
    rating: 4.94,
    badge: "인기 렌탈",
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.168,
      lng: 129.168,
      address: "부산",
    },
  },
  {
    id: 36,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    title: "수상 트램폴린",
    date: "1시간 대여",
    price: 35000,
    rating: 4.91,
    category: "busan-rental",
    rentalUnit: "시간",
    location: {
      lat: 35.169,
      lng: 129.169,
      address: "부산",
    },
  },
];
