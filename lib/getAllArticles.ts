// lib/getAllArticles.ts
import fs from "fs";
import path from "path";

export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
  content?: string;
};

export type Category = "news" | "entertainment" | "sports" | "economy" | "column";

const categoryPaths: Record<Category, string> = {
  news: "app/news/articles",
  entertainment: "app/entertainment/articles",
  sports: "app/sports/articles",
  economy: "app/economy/articles",
  column: "app/column/articles",
};

export function getAllArticles(): Article[] {
  const allArticles: Article[] = [];

  for (const dir of Object.values(categoryPaths)) {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const filePath = path.join(fullDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      try {
        const data = JSON.parse(content);
        if (data && data.id && data.title) {
          allArticles.push(data); // ← 上書きせず、そのまま使う！
        }
      } catch (e) {
        console.warn(`Invalid JSON in ${filePath}`);
      }
    }
  }

  return allArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
