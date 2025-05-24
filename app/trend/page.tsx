"use client"

import { Heart, TrendingUp, Eye, FlameIcon as Fire, Star, ArrowUp, Menu, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function TrendPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const trendingTopics = [
    {
      id: 1,
      title: "新世代YouTuberが大ブレイク中",
      description: "Z世代を中心に絶大な人気を誇る新しいクリエイターたちが続々と登場",
      category: "YouTuber",
      trend: "急上昇",
      views: "2.5M",
      growth: "+150%",
      image: "/placeholder.svg?height=200&width=300",
      slug: "new-generation-youtubers",
    },
    {
      id: 2,
      title: "K-POPアイドルの日本進出ラッシュ",
      description: "韓国の人気グループが次々と日本デビューを発表、ファンの期待が高まる",
      category: "音楽",
      trend: "話題沸騰",
      views: "1.8M",
      growth: "+89%",
      image: "/placeholder.svg?height=200&width=300",
      slug: "kpop-japan-debut-rush",
    },
    {
      id: 3,
      title: "バーチャルファッションが新トレンド",
      description: "デジタル空間でのファッション表現が若者の間で大流行",
      category: "ファッション",
      trend: "注目",
      views: "1.2M",
      growth: "+67%",
      image: "/placeholder.svg?height=200&width=300",
      slug: "virtual-fashion-trend",
    },
    {
      id: 4,
      title: "TikTokダンスチャレンジ最新版",
      description: "世界中で話題のダンスチャレンジが日本でも大ブーム",
      category: "SNS",
      trend: "バズ中",
      views: "3.1M",
      growth: "+200%",
      image: "/placeholder.svg?height=200&width=300",
      slug: "tiktok-dance-challenge-latest",
    },
  ]

  const weeklyTrends = [
    { rank: 1, keyword: "新人YouTuber", growth: "+250%" },
    { rank: 2, keyword: "K-POPコラボ", growth: "+180%" },
    { rank: 3, keyword: "バーチャル配信", growth: "+145%" },
    { rank: 4, keyword: "TikTokダンス", growth: "+120%" },
    { rank: 5, keyword: "芸能人YouTube", growth: "+95%" },
    { rank: 6, keyword: "ファッションTikTok", growth: "+87%" },
    { rank: 7, keyword: "音楽コラボ", growth: "+76%" },
    { rank: 8, keyword: "バラエティ企画", growth: "+65%" },
  ]

  const hotCategories = [
    { name: "YouTuber", count: 156, growth: "+45%" },
    { name: "音楽", count: 89, growth: "+32%" },
    { name: "ファッション", count: 67, growth: "+28%" },
    { name: "芸能", count: 134, growth: "+25%" },
    { name: "SNS", count: 98, growth: "+67%" },
    { name: "ドラマ", count: 45, growth: "+15%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                トレンドカフェ
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                ホーム
              </Link>
              <Link
                href="/category/entertainment"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                芸能ニュース
              </Link>
              <Link
                href="/category/youtuber"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                YouTuber
              </Link>
              <Link href="/trend" className="text-pink-500 font-medium border-b-2 border-pink-500">
                トレンド
              </Link>
              <Link
                href="/category/lifestyle"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                ライフスタイル
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                お問い合わせ
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2">
                  ホーム
                </Link>
                <Link
                  href="/category/entertainment"
                  className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2"
                >
                  芸能ニュース
                </Link>
                <Link
                  href="/category/youtuber"
                  className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2"
                >
                  YouTuber
                </Link>
                <Link href="/trend" className="text-pink-500 font-medium py-2">
                  トレンド
                </Link>
                <Link
                  href="/category/lifestyle"
                  className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2"
                >
                  ライフスタイル
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2">
                  お問い合わせ
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-8 h-8 text-pink-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              今話題の
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                トレンド
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            リアルタイムで更新される最新トレンド情報をチェック！今何が話題になっているかを見逃さないで♪
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Trending Topics */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2 mb-6">
              <Fire className="w-6 h-6 text-red-500" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">急上昇トピック</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trendingTopics.map((topic) => (
                <Card
                  key={topic.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-pink-100 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`${
                          topic.trend === "急上昇"
                            ? "bg-red-500"
                            : topic.trend === "話題沸騰"
                              ? "bg-orange-500"
                              : topic.trend === "バズ中"
                                ? "bg-purple-500"
                                : "bg-blue-500"
                        } text-white`}
                      >
                        {topic.trend}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        <ArrowUp className="w-3 h-3 mr-1 text-green-600" />
                        {topic.growth}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs">
                        {topic.category}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                      {topic.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{topic.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {topic.views}
                      </span>
                      <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 text-xs">
                        詳しく見る →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Weekly Trends */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>週間トレンドワード</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyTrends.map((trend) => (
                    <div key={trend.rank} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            trend.rank <= 3
                              ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {trend.rank}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{trend.keyword}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                        {trend.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hot Categories */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-pink-500" />
                  <span>注目カテゴリー</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-pink-50 cursor-pointer transition-colors"
                    >
                      <div>
                        <span className="font-medium text-gray-800">{category.name}</span>
                        <span className="text-xs text-gray-500 ml-2">({category.count}件)</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-pink-200 text-pink-600">
                        {category.growth}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
              <CardHeader>
                <CardTitle className="text-center text-lg">
                  <Heart className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  トレンド通知
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  最新トレンドをいち早くお知らせ！通知設定でトレンドを見逃さない♪
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-sm">
                  通知を設定
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-100 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              トレンドカフェ
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 トレンドカフェ. All rights reserved. 最新のトレンド情報をお届けします♪
          </p>
        </div>
      </footer>
    </div>
  )
}
