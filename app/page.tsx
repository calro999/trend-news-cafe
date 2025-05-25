"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Flame, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const articles = Array.from({ length: 6 }).map((_, index) => ({
  id: index,
  title: `芸能界に新たなカップル誕生？熱愛報道の真相に迫る`,
  description: `人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題に。関係者によると二人の交際は…`,
  image: "/sample.jpg",
  category: "芸能",
  readTime: "2分で読める",
}))

export default function Home() {
  return (
    <div className="bg-pink-50 py-10 px-4 w-full">
      {/* ヒーローセクション */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-600">
          今話題の <span className="text-fuchsia-600">トレンド情報</span> をお届け
        </h1>
        <p className="mt-4 text-gray-600">
          芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {[
            "#YouTuber",
            "#芸能",
            "#ファッション",
            "#音楽",
            "#ドラマ",
            "#バラエティ",
            "#SNS",
            "#トレンド",
          ].map((tag) => (
            <Badge key={tag} variant="outline" className="bg-pink-100 text-pink-600">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* メインコンテンツ：注目記事 + サイドバー */}
      <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="flex items-center text-pink-600 font-bold text-xl mb-4">
            <Star className="mr-2 fill-pink-500 text-white" /> 注目記事
          </h2>

          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/3 h-60 relative">
                  <Image
                    src={article.image}
                    alt="記事画像"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between md:w-2/3">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="bg-pink-100 text-pink-600">{article.category}</Badge>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-4 text-right">
                    <a href="#" className="text-pink-600 hover:underline">
                      続きを読む →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex justify-between mt-8">
            <button className="bg-white border border-pink-300 text-pink-600 px-4 py-2 rounded hover:bg-pink-100">
              ＜ 前のページ
            </button>
            <button className="bg-white border border-pink-300 text-pink-600 px-4 py-2 rounded hover:bg-pink-100">
              次のページ ＞
            </button>
          </div>
        </div>

        {/* サイドバー */}
        <aside className="space-y-6">
          {/* (サイドバー省略、変更なし) */}
        </aside>
      </section>
    </div>
  )
}
