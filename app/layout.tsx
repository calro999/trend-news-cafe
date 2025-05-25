"use client"

import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import ja from "date-fns/locale/ja"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-pink-50 py-10 px-4">
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

      {/* 注目記事セクション */}
      <section className="max-w-screen-lg mx-auto">
        <h2 className="flex items-center text-pink-600 font-bold text-xl mb-4">
          <Star className="mr-2 fill-pink-500 text-white" /> 注目記事
        </h2>

        <Card className="flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/3 h-48 relative">
            <Image
              src="/sample.jpg"
              alt="サンプル画像"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4 md:w-2/3">
            <div className="flex gap-2 mb-2">
              <Badge variant="outline" className="bg-pink-100 text-pink-600">芸能</Badge>
              <span className="text-sm text-gray-500">2分で読める</span>
            </div>
            <h3 className="font-bold text-lg mb-1">
              芸能界に新たなカップル誕生？熱愛報道の真相に迫る
            </h3>
            <p className="text-sm text-gray-600">
              人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題に。関係者によると二人の交際は…
            </p>
            <div className="mt-2 text-right">
              <a href="#" className="text-pink-600 hover:underline">
                続きを読む →
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
