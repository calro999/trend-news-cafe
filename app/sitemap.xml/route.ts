import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://v0-wo-zeta.vercel.app/";
  const categories = ["news", "entertainment", "sports", "economy", "column"];

  const urls = categories.flatMap((category) => {
    const dirPath = path.join(process.cwd(), "app", category, "articles");
    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".json"));

    return files.map((file) => {
      const slug = file.replace(/\.json$/, "");
      return {
        url: `${baseUrl}/${category}/${slug}`,
        lastModified: new Date().toISOString(),
      };
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    ...urls,
  ];
}
