import Link from "next/link";
import { Heart, Calendar, Eye, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import fs from "fs"; // ファイルシステムを操作するNode.jsモジュール
import path from "path"; // パスを操作するNode.jsモジュール
import matter from "gray-matter"; // フロントマターをパースするライブラリ

// 記事のメタデータの型定義 (app/posts/[slug]/page.tsx と同じもの)
interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  views: string;
  date: string;
  publishedAt: string; // ソート用に追加
  image: string;
  tags: string[];
  readTime: string;
  author: string;
}

// すべてのMDX記事のメタデータを取得する関数
async function getAllPostsMeta() {
  const postsDirectory = path.join(process.cwd(), 'app', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent); // フロントマターのみ取得

      return {
        slug: filename.replace(/\.mdx$/, ''), // スラッグ (ファイル名から拡張子を除去)
        ...(data as PostFrontmatter), // フロントマターのデータを展開
      };
    })
    .sort((a, b) => {
      // 公開日で降順にソート (新しい記事が上に来るように)
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return posts;
}

export default async function HomePage() {
  // すべての記事のメタデータを取得
  const posts = await getAllPostsMeta();

  // 主要な記事（最新の1つ）とそれ以外の記事に分ける
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 7); // 最新の6記事をトップに表示（featuredを除いた6つ）

  // Popular Tags は現状ハードコードのままですが、将来的に動的にすることも可能です。
  const popularTags = ["YouTuber", "芸能", "ファッション", "音楽", "ドラマ", "バラエティ", "SNS", "トレンド"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                トレンドカフェ
              </h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post (最新記事) */}
          {featuredPost && (
            <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/posts/${featuredPost.slug}`}>
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">{featuredPost.category}</Badge>
                  <span className="text-sm text-gray-500">{featuredPost.readTime}で読める</span>
                </div>
                <Link href={`/posts/${featuredPost.slug}`}>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight hover:text-pink-600 transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-gray-600 text-base mb-4 line-clamp-3">
                  {featuredPost.excerpt}
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredPost.views} 回閲覧
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Popular Tags Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">人気タグ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer text-sm"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Posts Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-12 mb-8 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          最新のトレンド記事
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <Card key={post.slug} className="bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/posts/${post.slug}`}>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-pink-100 text-pink-700">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}で読める</span>
                </div>
                <Link href={`/posts/${post.slug}`}>
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-pink-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center text-xs text-gray-500 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views} 回閲覧
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        {posts.length > 7 && ( // 表示されていない記事がある場合にのみ表示
          <div className="text-center mt-12">
            <Button variant="outline" className="bg-white border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700">
              すべての記事を見る
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-100 py-8 md:py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              トレンドカフェ
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 トレンドカフェ. All rights reserved. 最新のトレンド情報をお届けします♪
          </p>
        </div>
      </footer>
    </div>
  );
}