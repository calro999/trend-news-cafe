"use client"

import { Heart, Star, TrendingUp, Users, Calendar, Eye, Menu, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const featuredPosts = [
    {
      id: 1,
      title: "話題のYouTuber新企画が大反響！視聴者数が過去最高を記録",
      excerpt: "人気YouTuberの新しい企画動画が公開されてから24時間で100万回再生を突破。ファンからは絶賛の声が...",
      category: "YouTuber",
      views: "1.2M",
      date: "2024年1月15日",
      image: "/placeholder.svg?height=200&width=300",
      isPopular: true,
      slug: "youtuber-new-project-viral",
    },
    {
      id: 2,
      title: "芸能界に新たなカップル誕生？熱愛報道の真相に迫る",
      excerpt: "人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題となっています。二人の関係性について詳しく...",
      category: "芸能",
      views: "890K",
      date: "2024年1月14日",
      image: "/placeholder.svg?height=200&width=300",
      isPopular: false,
      slug: "celebrity-couple-dating-rumors",
    },
    {
      id: 3,
      title: "今年のトレンドファッションを先取り！春の注目アイテム",
      excerpt: "2024年春のファッショントレンドが続々と発表されています。今年注目すべきアイテムとコーディネート術を...",
      category: "ファッション",
      views: "654K",
      date: "2024年1月13日",
      image: "/placeholder.svg?height=200&width=300",
      isPopular: true,
      slug: "spring-fashion-trends-2024",
    },
  ]

  const latestNews = [
    { title: "人気アイドルグループの新曲がオリコン1位獲得", category: "音楽", time: "2時間前" },
    { title: "バラエティ番組で話題のあの人が写真集発売決定", category: "芸能", time: "4時間前" },
    { title: "TikTokで大バズり中のダンスチャレンジとは？", category: "SNS", time: "6時間前" },
    { title: "人気YouTuberコラボ企画の裏側を大公開", category: "YouTuber", time: "8時間前" },
    { title: "今週のドラマ視聴率ランキング発表", category: "ドラマ", time: "10時間前" },
  ]

  const popularTags = ["YouTuber", "芸能ニュース", "トレンド", "ファッション", "音楽", "ドラマ", "バラエティ"]

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
              <Link href="/trend" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
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
                <Link href="/trend" className="text-gray-700 hover:text-pink-500 transition-colors font-medium py-2">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            今話題の
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              トレンド情報
            </span>
            をお届け
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer text-xs md:text-sm"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Featured Posts */}
          <div className="lg:col-span-2 h-full">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">注目記事</h3>
            </div>

            <div className="space-y-6 h-full">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-pink-100 h-auto"
                >
                  <div className="md:flex h-full">
                    <div className="md:w-1/3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between">
                      <div>
                        <CardHeader className="p-0 mb-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs">
                              {post.category}
                            </Badge>
                            {post.isPopular && (
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                人気
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg md:text-xl hover:text-pink-600 cursor-pointer transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">{post.excerpt}</p>
                        </CardContent>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mt-auto">
                        <div className="flex items-center space-x-2 md:space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-3 md:w-4 h-3 md:h-4 mr-1" />
                            {post.views}
                          </span>
                        </div>
                        <Link href={`/posts/${post.slug}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-pink-600 hover:text-pink-700 text-xs md:text-sm"
                          >
                            続きを読む →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* 高さを埋めるための空のスペース */}
              <div className="flex-1 min-h-[50px] lg:min-h-[100px]"></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Latest News */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-pink-500" />
                  <span>最新情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestNews.map((news, index) => (
                    <div key={index} className="border-b border-pink-50 last:border-b-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-gray-800 hover:text-pink-600 cursor-pointer transition-colors mb-1 text-sm md:text-base">
                        {news.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <Badge variant="outline" className="text-xs border-pink-200 text-pink-600">
                          {news.category}
                        </Badge>
                        <span>{news.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span>人気カテゴリー</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                  {popularTags.slice(0, 6).map((tag, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="justify-start border-pink-200 hover:bg-pink-50 hover:border-pink-300 text-xs"
                    >
                      #{tag}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
              <CardHeader>
                <CardTitle className="text-center text-lg">
                  <Heart className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  最新情報をお届け
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  トレンド情報を見逃さないように、メルマガ登録をお忘れなく♪
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-sm">
                  メルマガ登録
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Site Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  トレンドカフェ
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイトです♪
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                >
                  <span className="text-pink-600 text-sm font-bold">T</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <span className="text-blue-600 text-sm font-bold">F</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                >
                  <span className="text-red-600 text-sm font-bold">Y</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                >
                  <span className="text-purple-600 text-sm font-bold">I</span>
                </a>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-base">カテゴリー</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/category/entertainment" className="text-gray-600 hover:text-pink-600 transition-colors">
                    芸能ニュース
                  </Link>
                </li>
                <li>
                  <Link href="/category/youtuber" className="text-gray-600 hover:text-pink-600 transition-colors">
                    YouTuber
                  </Link>
                </li>
                <li>
                  <Link href="/trend" className="text-gray-600 hover:text-pink-600 transition-colors">
                    トレンド
                  </Link>
                </li>
                <li>
                  <Link href="/category/fashion" className="text-gray-600 hover:text-pink-600 transition-colors">
                    ファッション
                  </Link>
                </li>
                <li>
                  <Link href="/category/music" className="text-gray-600 hover:text-pink-600 transition-colors">
                    音楽
                  </Link>
                </li>
                <li>
                  <Link href="/category/drama" className="text-gray-600 hover:text-pink-600 transition-colors">
                    ドラマ
                  </Link>
                </li>
                <li>
                  <Link href="/category/lifestyle" className="text-gray-600 hover:text-pink-600 transition-colors">
                    ライフスタイル
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-base">サイト情報</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                    サイトについて
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-pink-600 transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-pink-600 transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className="text-gray-600 hover:text-pink-600 transition-colors">
                    サイトマップ
                  </Link>
                </li>
                <li>
                  <Link href="/rss.xml" className="text-gray-600 hover:text-pink-600 transition-colors">
                    RSS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-base">最新情報をお届け</h4>
              <p className="text-gray-600 text-sm mb-4">トレンド情報を見逃さないように、メルマガ登録をお忘れなく♪</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
                />
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-sm"
                >
                  登録する
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-pink-100 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>© 2024 トレンドカフェ. All rights reserved.</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <Link href="/privacy" className="hover:text-pink-600 transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/terms" className="hover:text-pink-600 transition-colors">
                  利用規約
                </Link>
                <Link href="/contact" className="hover:text-pink-600 transition-colors">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
