import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Heart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "トレンドカフェ - 最新トレンド情報をお届け",
    template: "%s | トレンドカフェ",
  },
  description: "芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイトです♪",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
          <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                トレンドカフェ
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
              <Link href="/">ホーム</Link>
              <Link href="/news">ニュース</Link>
              <Link href="/entertainment">エンタメ</Link>
              <Link href="/sports">スポーツ</Link>
              <Link href="/economy">経済</Link>
              <Link href="/column">コラム</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-100 py-8 md:py-12 mt-12">
          <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
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
      </body>
    </html>
  );
}
