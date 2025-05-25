"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Flame, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

const initialArticles = [
  {
    id: 1,
    title: "芸能界に新たなカップル誕生？熱愛報道の真相に迫る",
    description: "人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題に。関係者によると二人の交際は…",
    image: "/sample.jpg",
    category: "芸能",
    readTime: "2分で読める",
  },
]

export default function Home() {
  const [articles, setArticles] = useState(initialArticles)
  const addArticle = () => {
    setArticles((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: "新着記事タイトル",
        description: "この記事の概要がここに入ります。",
        image: "/sample.jpg",
        category: "新着",
        readTime: "3分で読める",
      },
    ])
  }

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

          {/* 記事追加ボタン */}
          <div className="mt-6">
            <button
              onClick={addArticle}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              新しい記事を追加
            </button>
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
          <Card className="p-4">
            <h3 className="flex items-center font-bold text-lg text-pink-600 mb-4">
              <Flame className="w-4 h-4 mr-2 text-pink-600" /> 最新情報
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-start">
                <div>
                  人気アイドルグループの新曲がオリコン1位獲得
                  <div className="mt-1"><Badge className="bg-pink-100 text-pink-600">音楽</Badge></div>
                </div>
                <span className="text-gray-400 text-xs">2時間前</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  バラエティ番組で話題のあの人が写真集発売決定
                  <div className="mt-1"><Badge className="bg-pink-100 text-pink-600">芸能</Badge></div>
                </div>
                <span className="text-gray-400 text-xs">4時間前</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  TikTokで大バズり中のダンスチャレンジとは？
                  <div className="mt-1"><Badge className="bg-pink-100 text-pink-600">SNS</Badge></div>
                </div>
                <span className="text-gray-400 text-xs">6時間前</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  人気YouTuberコラボ企画の裏側を大公開
                  <div className="mt-1"><Badge className="bg-pink-100 text-pink-600">YouTuber</Badge></div>
                </div>
                <span className="text-gray-400 text-xs">8時間前</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  今週のドラマ視聴率ランキング発表
                  <div className="mt-1"><Badge className="bg-pink-100 text-pink-600">ドラマ</Badge></div>
                </div>
                <span className="text-gray-400 text-xs">10時間前</span>
              </li>
            </ul>
          </Card>
        </aside>
      </section>
    </div>
  )
}
