"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  const hours = Math.floor(diff / 3600);
  if (hours < 1) return "1時間以内";
  if (hours < 24) return `${hours}時間前`;
  const days = Math.floor(hours / 24);
  return `${days}日前`;
}

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
};

const context = (require as any).context("./", true, /articles\/.*\.json$/);
const dynamicArticles: Article[] = context
  .keys()
  .map((key: string) => context(key))
  .filter((a: any) => a && a.publishedAt)
  .sort((a: Article, b: Article) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

const featuredArticles = dynamicArticles.slice(0, 20);
const popularArticles = dynamicArticles.slice(0, 4);

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
    <div className="bg-pink-50 py-10 px-4 md:px-12 w-full overflow-x-hidden">
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
        <p className="mt-4 text-gray-600">芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪</p>
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
                <Image
                  src={article.image}
                  alt="記事画像"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm mt-2 text-center text-gray-700">
                {article.title.slice(0, 10)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="flex items-center text-pink-600 font-bold text-xl mb-4">
            <Star className="mr-2 fill-pink-500 text-white" /> 人気記事ランキング
          </h2>

          <div className="space-y-6">
            {popularArticles.map((article) => (
              <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/3 h-60 relative">
                  <Image src={article.image} alt="記事画像" fill className="object-cover" />
                </div>
                <CardContent className="p-4 flex flex-col justify-between md:w-2/3">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="bg-pink-100 text-pink-600">{article.category}</Badge>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </div>
                  <div className="mt-4 text-right">
                    <Link href={`/article/${article.id}`} className="text-pink-600 hover:underline">続きを読む →</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* サイドバーの例略 */}
      </section>
    </div>
  );
}
