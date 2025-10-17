export interface Host {
  id: number;
  name: string;
  image: string;
  joinedDate: string;
  responseRate: number;
  responseTime: string;
  verified: boolean;
  reviewCount: number;
}

export const hosts: Host[] = [
  {
    id: 1,
    name: "김테크",
    image: "https://i.pravatar.cc/150?img=12",
    joinedDate: "2022년 3월",
    responseRate: 98,
    responseTime: "1시간 이내",
    verified: true,
    reviewCount: 127,
  },
  {
    id: 2,
    name: "렌탈마스터",
    image: "https://i.pravatar.cc/150?img=33",
    joinedDate: "2021년 8월",
    responseRate: 100,
    responseTime: "30분 이내",
    verified: true,
    reviewCount: 243,
  },
  {
    id: 3,
    name: "부산렌탈",
    image: "https://i.pravatar.cc/150?img=45",
    joinedDate: "2020년 5월",
    responseRate: 95,
    responseTime: "2시간 이내",
    verified: true,
    reviewCount: 189,
  },
  {
    id: 4,
    name: "캠핑지니",
    image: "https://i.pravatar.cc/150?img=20",
    joinedDate: "2023년 1월",
    responseRate: 97,
    responseTime: "1시간 이내",
    verified: true,
    reviewCount: 84,
  },
];
