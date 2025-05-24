import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://trend-news.com" // 実際のドメインに変更してください

  // 実際の実装では、データベースやCMSから最新記事を取得します
  const posts = [
    {
      id: 1,
      title: "話題のYouTuber新企画が大反響！視聴者数が過去最高を記録",
      description: "人気YouTuberの新しい企画動画が公開されてから24時間で100万回再生を突破。ファンからは絶賛の声が...",
      slug: "youtuber-new-project-viral",
      category: "YouTuber",
      publishedAt: new Date("2024-01-15"),
    },
    {
      id: 2,
      title: "芸能界に新たなカップル誕生？熱愛報道の真相に迫る",
      description:
        "人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題となっています。二人の関係性について詳しく...",
      slug: "celebrity-couple-dating-rumors",
      category: "芸能",
      publishedAt: new Date("2024-01-14"),
    },
    {
      id: 3,
      title: "今年のトレンドファッションを先取り！春の注目アイテム",
      description:
        "2024年春のファッショントレンドが続々と発表されています。今年注目すべきアイテムとコーディネート術を...",
      slug: "spring-fashion-trends-2024",
      category: "ファッション",
      publishedAt: new Date("2024-01-13"),
    },
  ]

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>トレンドカフェ</title>
    <description>芸能界からYouTuberまで、様々なジャンルの最新トレンド情報をかわいく楽しくお届けするブログサイト</description>
    <link>${baseUrl}</link>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>トレンドカフェ</title>
      <link>${baseUrl}</link>
    </image>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/posts/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/posts/${post.slug}</guid>
      <category><![CDATA[${post.category}]]></category>
      <pubDate>${post.publishedAt.toUTCString()}</pubDate>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
