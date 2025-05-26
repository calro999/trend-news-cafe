import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/getAllArticles";
import type { Article } from "@/lib/getAllArticles";

export const dynamic = "force-dynamic";
export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const articles = await getAllArticles();
  const article = articles.find((a) => String(a.id) === params.id);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
};

const categorySlugMap: Record<string, string> = {
  "ニュース": "news",
  "芸能": "entertainment",
  "スポーツ": "sports",
  "経済": "economy",
  "コラム": "column",
};

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const allArticles: Article[] = await getAllArticles();
  const article = allArticles.find((a) => String(a.id) === params.id);

  if (!article) notFound();

  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const shareUrl = `https://v0-wo-zeta.vercel.app/article/${article.id}`;
  const shareText = encodeURIComponent(`${article.title} - トレンドカフェ`);
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const pinterestShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(article.image)}&description=${shareText}`;
  const threadsShare = `https://www.threads.net/intent/post?url=${encodeURIComponent(shareUrl)}&text=${shareText}`;

  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = allArticles[currentIndex + 1];
  const nextArticle = allArticles[currentIndex - 1];

  return (
    <div className="bg-white py-10 px-4 max-w-3xl mx-auto">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">ホーム</Link> &gt; <Link href={`/${categorySlugMap[article.category]}`} className="hover:underline">{article.category}</Link> &gt; <span>{article.title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-pink-600 mb-4">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-2">{article.readTime} ・ {new Date(article.publishedAt).toLocaleDateString()}</p>

      <div className="relative w-full h-64 mb-6">
        <Image src={article.image} alt={article.title} fill className="object-cover rounded-lg" />
      </div>

      {/* 本文（段落装飾） */}
      <div className="text-gray-700 text-base leading-relaxed space-y-6 mb-8">
        {(article.content || article.description).split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* SNSシェアボタン */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Twitter</a>
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm">Facebook</a>
        <a href={pinterestShare} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">Pinterest</a>
        <a href={threadsShare} target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm">Threads</a>
      </div>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-pink-600 mb-4">関連記事</h2>
          <ul className="space-y-4">
            {relatedArticles.map((rel) => (
              <li key={rel.id} className="border-b pb-3">
                <Link href={`/article/${rel.id}`} className="text-pink-600 hover:underline font-medium">
                  {rel.title}
                </Link>
                <p className="text-sm text-gray-500">{rel.readTime} ・ {new Date(rel.publishedAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ページネーション */}
      <div className="flex justify-between mt-10">
        {prevArticle ? (
          <Link href={`/article/${prevArticle.id}`} className="text-pink-600 hover:underline">← 前の記事</Link>
        ) : <span />}
        {nextArticle ? (
          <Link href={`/article/${nextArticle.id}`} className="text-pink-600 hover:underline">次の記事 →</Link>
        ) : <span />}
      </div>
    </div>
  );
}
