export type Category = 'all' | 'apartment' | 'loft' | 'house' | 'studio';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: Category;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Modern Loft in Downtown",
    description: "Stylish loft with city views and modern amenities",
    price: 120,
    rating: 4.8,
    reviews: 124,
    category: 'loft',
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5665,
      lng: 126.9780,
      address: "Seoul, South Korea"
    }
  },
  {
    id: 2,
    title: "Cozy Studio Apartment",
    description: "Perfect for solo travelers, fully equipped kitchen",
    price: 85,
    rating: 4.6,
    reviews: 89,
    category: 'studio',
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5515,
      lng: 126.9882,
      address: "Gangnam, Seoul"
    }
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    description: "Breathtaking views with rooftop access",
    price: 250,
    rating: 4.9,
    reviews: 203,
    category: 'apartment',
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5797,
      lng: 126.9770,
      address: "Jongno, Seoul"
    }
  },
  {
    id: 4,
    title: "Charming Traditional House",
    description: "Experience authentic Korean culture",
    price: 95,
    rating: 4.7,
    reviews: 156,
    category: 'house',
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5833,
      lng: 126.9833,
      address: "Bukchon, Seoul"
    }
  },
  {
    id: 5,
    title: "Spacious Family Apartment",
    description: "3 bedrooms, family-friendly neighborhood",
    price: 150,
    rating: 4.5,
    reviews: 67,
    category: 'apartment',
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5172,
      lng: 127.0473,
      address: "Songpa, Seoul"
    }
  },
  {
    id: 6,
    title: "Minimalist Studio",
    description: "Clean design with natural light",
    price: 78,
    rating: 4.4,
    reviews: 92,
    category: 'studio',
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5407,
      lng: 126.9563,
      address: "Yongsan, Seoul"
    }
  },
  {
    id: 7,
    title: "Riverside View Apartment",
    description: "Relaxing Han River views",
    price: 135,
    rating: 4.8,
    reviews: 178,
    category: 'apartment',
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5219,
      lng: 127.0411,
      address: "Apgujeong, Seoul"
    }
  },
  {
    id: 8,
    title: "Hip Urban Loft",
    description: "Trendy area with cafes and shops",
    price: 110,
    rating: 4.6,
    reviews: 134,
    category: 'loft',
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
    location: {
      lat: 37.5494,
      lng: 126.9227,
      address: "Hongdae, Seoul"
    }
  }
];
