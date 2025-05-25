"use client";

import { useEffect, useRef, useState } from "react";
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
].sort((a, b) => new Date(b?.publishedAt || 0).getTime() - new Date(a?.publishedAt || 0).getTime());

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

      <section className="grid md:grid-cols-[1fr_300px] gap-8">
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">人気記事ランキング</h2>
          <div className="grid gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={article?.id}
                href={article?.url || "#"}
                className="flex bg-white rounded-lg shadow hover:bg-pink-50 transition overflow-hidden"
              >
                <div className="relative w-32 h-24 flex-shrink-0">
                  {article?.image && (
                    <Image
                      src={article.image}
                      alt="記事画像"
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  )}
                </div>
                <div className="p-4 flex-1">
                  <span className="text-sm text-pink-400 font-bold">#{index + 1}</span>
                  <h3 className="text-base font-semibold text-gray-800 leading-snug">
                    {article?.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {(article?.tags || []).slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(article?.publishedAt).toLocaleDateString("ja-JP")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-pink-600 mb-2">最新情報をお届け</h3>
            <p className="text-sm text-gray-700">
              トレンドカフェは、話題のニュースやエンタメ情報を毎日更新中！フォローして最新情報をチェック♪
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-pink-600 mb-2">人気カテゴリー</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>#エンタメ</li>
              <li>#ニュース</li>
              <li>#スポーツ</li>
              <li>#経済</li>
              <li>#コラム</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
