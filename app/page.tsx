"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import * as newsArticles from "@/app/news/articles/index"
import * as entArticles from "@/app/entertainment/articles/index"
import * as sportsArticles from "@/app/sports/articles/index"
import * as economyArticles from "@/app/economy/articles/index"
import * as columnArticles from "@/app/column/articles/index"

const allArticles = [
  ...Object.values(newsArticles),
  ...Object.values(entArticles),
  ...Object.values(sportsArticles),
  ...Object.values(economyArticles),
  ...Object.values(columnArticles),
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

const featuredArticles = allArticles.slice(0, 5)

export default function HomePage() {
  const carouselRef = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredArticles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = carouselRef.current
    if (container) {
      container.scrollTo({ left: container.offsetWidth * index, behavior: "smooth" })
    }
  }, [index])

  return (
    <div className="bg-pink-50 py-10 px-0 w-screen max-w-none overflow-x-hidden">
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
          {["#YouTuber", "#芸能", "#ファッション", "#音楽", "#ドラマ", "#バラエティ", "#SNS", "#トレンド"].map(tag => (
            <span key={tag} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory" ref={carouselRef}>
          {featuredArticles.map((article, i) => (
            <div
              key={article.id}
              className="flex-shrink-0 w-full snap-start md:w-2/3 lg:w-1/2 relative h-72 md:h-96"
            >
              <Image src={article.image} alt="記事画像" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <Badge className="bg-pink-500 text-white mb-2">{article.category}</Badge>
                <h2 className="text-xl font-bold">{article.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center px-4">
          <button
            onClick={() => setIndex((index - 1 + featuredArticles.length) % featuredArticles.length)}
            className="bg-white/70 hover:bg-white text-pink-600 rounded-full p-2 shadow"
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-4">
          <button
            onClick={() => setIndex((index + 1) % featuredArticles.length)}
            className="bg-white/70 hover:bg-white text-pink-600 rounded-full p-2 shadow"
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  )
}
