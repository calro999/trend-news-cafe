// components/ClientCarouselWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { Article } from "@/app/entertainment/page"; // または適切な型定義の場所に応じて変更

const ClientCarousel = dynamic(() => import("@/components/ClientCarousel"), {
  ssr: false,
});

export default function ClientCarouselWrapper({ featuredArticles }: { featuredArticles: Article[] }) {
  return <ClientCarousel featuredArticles={featuredArticles} />;
}
