"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import * as newsArticles from "@/app/news/articles/index";
import * as entArticles from "@/app/entertainment/articles/index";
import * as sportsArticles from "@/app/sports/articles/index";
import * as economyArticles from "@/app/economy/articles/index";
import * as columnArticles from "@/app/column/articles/index";

const allArticles = [
  ...Object.values(newsArticles ?? {}),
  ...Object.values(entArticles ?? {}),
  ...Object.values(sportsArticles ?? {}),
  ...Object.values(economyArticles ?? {}),
  ...Object.values(columnArticles ?? {}),
].sort((a, b) => {
  const dateA = new Date(a?.publishedAt || 0).getTime();
  const dateB = new Date(b?.publishedAt || 0).getTime();
  return dateB - dateA;
});

const featuredArticles = allArticles.slice(0, 20);
const popularArticles = allArticles.slice(0, 10);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollIndex * 160,
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  return (
    <div className="bg-pink-50 py-10 px-0 w-full overflow-x-hidden">
      <style>{`
        .animated-gradient {
          background: linear-gradient(270deg, #f472b6, #ec4899, #8b5cf6, #f472b6);
          background-size: 800% 800%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 10s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="animated-gradient">今話題の トレンド情報 をお届け</span>
        </h1>
        <p className="mt-4 text-gray-600">
          芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          {["#YouTuber", "#芸能", "#ファッション", "#音楽", "#ドラマ", "#バラエティ", "#SNS", "#トレンド"].map((tag) => (
            <span key={tag} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden mb-12">
        <div
          className="flex space-x-4 px-4 transition-all duration-500 ease-in-out"
          ref={containerRef}
          style={{ width: "100%", overflowX: "auto" }}
        >
          {featuredArticles.map((article) => (
            <div key={article?.id} className="w-48 flex-shrink-0">
              <div className="relative w-full h-28">
                {article?.image && (
                  <Image
                    src={article.image}
                    alt="記事画像"
                    fill
                    className="object-cover rounded-md"
                  />
                )}
              </div>
              <p className="text-sm mt-2 text-center text-gray-700">
                {article?.title?.slice(0, 10)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">人気記事ランキング</h2>
        <ul className="space-y-3">
          {popularArticles.map((article, index) => (
            <li key={article?.id} className="border-b pb-2">
              <Link
                href={article?.url || "#"}
                className="text-gray-800 hover:text-pink-600 font-medium"
              >
                {index + 1}. {article?.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
