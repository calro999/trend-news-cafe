import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllArticles } from "@/lib/getAllArticles";

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  const allArticles = await getAllArticles();
  const article = allArticles.find((a) => String(a.id) === params.id);

  if (!article) {
    notFound(); // 存在しない記事ID
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">{article.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{article.readTime}・{new Date(article.publishedAt).toLocaleDateString()}</div>
      <div className="relative w-full h-64 mb-6">
        <Image src={article.image} alt={article.title} fill className="object-cover rounded-lg" />
      </div>
      <p className="text-gray-700 leading-relaxed">
        {article.description}
      </p>
    </div>
  );
}
