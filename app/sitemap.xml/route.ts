// app/sitemap.xml/route.ts
import { getAllArticles } from "@/lib/getAllArticles";

export async function GET() {
  const baseUrl = "https://your-domain.com"; // ← あなたのドメインに置き換えてください
  const articles = getAllArticles();

  const urls = articles.map((article) => {
    return `
      <url>
        <loc>${baseUrl}/article/${article.id}</loc>
        <lastmod>${article.publishedAt}</lastmod>
      </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
