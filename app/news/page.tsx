"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Flame, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const newsArticles = [
  {
    id: 1,
    title: "俳優Aと女優Bの熱愛報道にSNS騒然",
    description: "大手メディアがスクープした芸能界のカップル誕生に関して、関係者の証言とファンの反応をまとめました。",
    image: "/sample.jpg",
    category: "芸能",
    readTime: "3分で読める",
  },
  {
    id: 2,
    title: "人気アイドルが活動休止を発表",
    description: "多忙による体調不良が原因とされるが、復帰時期やファンへのメッセージを紹介します。",
    image: "/sample.jpg",
    category: "芸能",
    readTime: "2分で読める",
  },
  {
    id: 3,
    title: "話題の女優が新ドラマで主演決定",
    description: "2025年秋ドラマで主演に抜擢された人気女優のコメントとドラマのあらすじをご紹介。",
    image: "/sample.jpg",
    category: "芸能",
    readTime: "2分で読める",
  }
]

export default function NewsPage() {
  return (
    <div className="bg-pink-50 py-10 px-4 w-full">
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-600">
          芸能ニュース特集
        </h1>
        <p className="mt-4 text-gray-600">
          話題の芸能情報をいち早くお届け！スクープ、出演情報、熱愛報道など盛りだくさん！
        </p>
      </section>

      <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="flex items-center text-pink-600 font-bold text-xl mb-4">
            <Star className="mr-2 fill-pink-500 text-white" /> 芸能記事一覧
          </h2>

          <div className="space-y-6">
            {newsArticles.map((article) => (
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
                    <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </div>
                  <div className="mt-4 text-right">
                    <a href="#" className="text-pink-600 hover:underline">続きを読む →</a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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
                <div>俳優Xの舞台裏インタビュー<div className="mt-1"><Badge className="bg-pink-100 text-pink-600">芸能</Badge></div></div>
                <span className="text-gray-400 text-xs">3時間前</span>
              </li>
              <li className="flex justify-between items-start">
                <div>女優Yの結婚報道に各界の反応<div className="mt-1"><Badge className="bg-pink-100 text-pink-600">芸能</Badge></div></div>
                <span className="text-gray-400 text-xs">6時間前</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="flex items-center font-bold text-lg text-pink-600 mb-4">
              <User className="w-4 h-4 mr-2 text-pink-600" /> 人気カテゴリー
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["#芸能", "#音楽", "#ドラマ", "#ファッション"].map((tag) => (
                <span key={tag} className="text-sm border border-pink-200 text-pink-600 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-pink-100 to-pink-200 text-center">
            <div className="text-pink-600 text-2xl mb-2">♡</div>
            <p className="font-bold mb-1">最新情報をお届け</p>
            <p className="text-sm text-gray-600 mb-4">メルマガ登録で芸能ニュースをいち早くゲット！</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              メルマガ登録
            </button>
          </Card>
        </aside>
      </section>
    </div>
  )
}
