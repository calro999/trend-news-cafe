import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/getAllArticles";
import type { Article } from "@/lib/getAllArticles";

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const allArticles: Article[] = await getAllArticles();
  const article = allArticles.find((a) => String(a.id) === params.id);

  if (!article) notFound();

  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white py-10 px-4 max-w-3xl mx-auto">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">ホーム</Link> &gt; {article.category} &gt; {article.title}
      </nav>

      <h1 className="text-3xl font-bold text-pink-600 mb-4">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-2">{article.readTime} ・ {new Date(article.publishedAt).toLocaleDateString()}</p>

      <div className="relative w-full h-64 mb-6">
        <Image src={article.image} alt={article.title} fill className="object-cover rounded-lg" />
      </div>

      <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line mb-8">
        {article.description}
      </p>

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
    </div>
  );
}
