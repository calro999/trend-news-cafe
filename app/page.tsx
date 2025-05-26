import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ClientCarouselWrapper from "@/components/ClientCarouselWrapper";

function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  const hours = Math.floor(diff / 3600);
  if (hours < 1) return "1時間以内";
  if (hours < 24) return `${hours}時間前`;
  const days = Math.floor(hours / 24);
  return `${days}日前`;
}

export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
};

// 🔁 各カテゴリ記事を明示的に静的インポート
import * as newsArticles from "@/app/news/articles/index";
import * as entArticles from "@/app/entertainment/articles/index";
import * as sportsArticles from "@/app/sports/articles/index";
import * as economyArticles from "@/app/economy/articles/index";
import * as columnArticles from "@/app/column/articles/index";

// 全記事をまとめて整形
const allArticles: Article[] = [
  ...Object.values(newsArticles),
  ...Object.values(entArticles),
  ...Object.values(sportsArticles),
  ...Object.values(economyArticles),
  ...Object.values(columnArticles),
].filter((a) => a && a.publishedAt)
 .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

const featuredArticles = allArticles.slice(0, 20);
const popularArticles = allArticles.slice(0, 4);

export default function HomePage() {
  return (
    <div className="bg-pink-50 py-10 px-4 md:px-12 w-full overflow-x-hidden">
      <style>{`
        .animated-gradient {
          background: linear-gradient(270deg, #f472b6, #ec4899, #8b5cf6, #f472b6);
          background-size: 800% 800%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 10s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="animated-gradient">今話題の トレンド情報 をお届け</span>
        </h1>
        <p className="mt-4 text-gray-600">
          芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          {["#YouTuber", "#芸能", "#ファッション", "#音楽", "#ドラマ", "#バラエティ", "#SNS", "#トレンド"].map((tag) => (
            <span key={tag} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ✅ クライアント側カルーセル */}
      <ClientCarouselWrapper featuredArticles={featuredArticles} />

      <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="flex items-center text-pink-600 font-bold text-xl mb-4">
            <Star className="mr-2 fill-pink-500 text-white" /> 人気記事ランキング
          </h2>

          <div className="space-y-6">
            {popularArticles.map((article) => (
              <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/3 h-60 relative">
                  <Image
                    src={article.image}
                    alt="記事画像"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between md:w-2/3">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="bg-pink-100 text-pink-600">{article.category}</Badge>
                      <span className="text-sm text-gray-500">{article.readTime || "1分"}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </div>
                  <div className="mt-4 text-right">
                    <Link href={`/article/${article.id}`} className="text-pink-600 hover:underline">続きを読む →</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="bg-white border border-pink-300 text-pink-600 px-4 py-2 rounded hover:bg-pink-100">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="text-pink-600 font-bold">1 / 5</div>
            <button className="bg-white border border-pink-300 text-pink-600 px-4 py-2 rounded hover:bg-pink-100">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <aside className="space-y-6">
          <Card className="p-4">
            <h3 className="flex items-center font-bold text-lg text-pink-600 mb-4">
              <Flame className="w-4 h-4 mr-2 text-pink-600" /> 最新情報をお届け
            </h3>
            <ul className="space-y-4 text-sm">
              {allArticles.slice(0, 12).map((article) => (
                <li key={article.id} className="flex justify-between items-start">
                  <div>
                    {article.title}
                    <div className="mt-1">
                      <Badge className="bg-pink-100 text-pink-600">{article.category}</Badge>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{formatTimeAgo(article.publishedAt)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="flex items-center font-bold text-lg text-pink-600 mb-4">
              <User className="w-4 h-4 mr-2 text-pink-600" /> 人気カテゴリー
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["#芸能", "#音楽", "#ドラマ", "#ファッション"].map((tag) => (
                <span key={tag} className="text-sm border border-pink-200 text-pink-600 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-pink-100 to-pink-200 text-center">
            <div className="text-pink-600 text-2xl mb-2">♡</div>
            <p className="font-bold mb-1">最新情報をお届け</p>
            <p className="text-sm text-gray-600 mb-4">メルマガ登録で芸能ニュースをいち早くゲット！</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              メルマガ登録
            </button>
          </Card>
        </aside>
      </section>
    </div>
  );
}
