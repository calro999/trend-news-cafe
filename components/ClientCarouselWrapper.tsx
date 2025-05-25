"use client";

import dynamic from "next/dynamic";

// 🔽 ここで直接型定義（再利用しないならこれで十分）
type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
};

const ClientCarousel = dynamic(() => import("@/components/ClientCarousel"), {
  ssr: false,
});

export default function ClientCarouselWrapper({ featuredArticles }: { featuredArticles: Article[] }) {
  return <ClientCarousel featuredArticles={featuredArticles} />;
}
