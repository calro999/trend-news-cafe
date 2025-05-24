import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trend-news.com" // 実際のドメインに変更してください

  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ]

  // カテゴリーページ
  const categories = ["entertainment", "youtuber", "trend", "fashion", "music", "drama", "lifestyle"]

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }))

  // 記事ページ（サンプル）
  // 実際の実装では、データベースやCMSから記事一覧を取得します
  const samplePosts = [
    {
      id: 1,
      slug: "youtuber-new-project-viral",
      lastModified: new Date("2024-01-15"),
    },
    {
      id: 2,
      slug: "celebrity-couple-dating-rumors",
      lastModified: new Date("2024-01-14"),
    },
    {
      id: 3,
      slug: "spring-fashion-trends-2024",
      lastModified: new Date("2024-01-13"),
    },
  ]

  const postPages = samplePosts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // タグページ
  const tags = [
    "youtuber",
    "entertainment-news",
    "trend",
    "fashion",
    "music",
    "drama",
    "variety",
    "sns",
    "tiktok",
    "instagram",
  ]

  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // アーカイブページ
  const currentYear = new Date().getFullYear()
  const archivePages = []

  for (let year = currentYear; year >= currentYear - 2; year--) {
    for (let month = 1; month <= 12; month++) {
      archivePages.push({
        url: `${baseUrl}/archive/${year}/${month.toString().padStart(2, "0")}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })
    }
  }

  return [...staticPages, ...categoryPages, ...postPages, ...tagPages, ...archivePages]
}
