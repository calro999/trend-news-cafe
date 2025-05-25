import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Linkコンポーネントをインポート
import { Heart } from "lucide-react"; // Heartアイコンをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "トレンドカフェ - 最新トレンド情報をお届け",
    template: "%s | トレンドカフェ",
  },
  description: "芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイトです♪",
  keywords: ["トレンド", "芸能", "YouTuber", "ファッション", "音楽", "ドラマ", "エンタメ"],
  authors: [{ name: "トレンドカフェ編集部" }],
  creator: "トレンドカフェ",
  publisher: "トレンドカフェ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trend-news.com"), // 実際のドメインに変更してください
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "トレンドカフェ RSS Feed" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://trend-news.com",
    title: "トレンドカフェ - 最新トレンド情報をお届け",
    description: "芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイトです♪",
    siteName: "トレンドカフェ",
  },
  twitter: {
    card: "summary_large_image",
    title: "トレンドカフェ - 最新トレンド情報をお届け",
    description: "芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイトです♪",
    creator: "@trendcafe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Consoleの確認コードに置き換えてください
  },
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {/* Header (グローバルナビゲーション) */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
              <Link href="/category/entertainment">芸能ニュース</Link>
              <Link href="/category/youtuber">YouTuber</Link>
              <Link href="/category/trend">トレンド</Link>
              <Link href="/category/lifestyle">ライフスタイル</Link>
              {/* お問い合わせページへのリンクが必要な場合、追加してください */}
              <Link href="/contact">お問い合わせ</Link>
            </nav>
            {/* モバイルナビゲーション用のトグルボタンなど、必要であればここに追加 */}
          </div>
        </header>

        {children} {/* 各ページのコンテンツがここにレンダリングされます */}

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-100 py-8 md:py-12 mt-12">
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
      </body>
    </html>
  );
}