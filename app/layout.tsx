import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
