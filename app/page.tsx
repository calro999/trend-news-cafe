import Link from "next/link";
import { Heart, Calendar, Eye, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 記事のメタデータの型定義 (app/posts/[slug]/page.tsx と同じもの)
interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  views: string;
  date: string;
  publishedAt: string;
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
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...(data as PostFrontmatter),
      };
    })
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return posts;
}

// 最新情報サイドバー用のダミーデータ (必要に応じて、MDXから動的に取得するように変更も可能です)
const latestInfoPosts = [
  {
    id: 1,
    title: "人気アイドルグループの新作曲がオリコン1位獲得",
    category: "芸能",
    time: "2時間前",
    slug: "idol-group-no1",
  },
  {
    id: 2,
    title: "バラエティ番組で話題のあの人が写真集発売決定",
    category: "エンタメ",
    time: "4時間前",
    slug: "variety-show-photo-book",
  },
  {
    id: 3,
    title: "TikTokでバズり中のダンスチャレンジとは？",
    category: "SNS",
    time: "6時間前",
    slug: "tiktok-dance-challenge",
  },
  {
    id: 4,
    title: "人気YouTuberコラボ企画の裏側を大公開",
    category: "YouTuber",
    time: "8時間前",
    slug: "youtuber-collab-behind-scenes",
  },
  {
    id: 5,
    title: "今週のドラマ視聴率ランキング発表",
    category: "ドラマ",
    time: "10時間前",
    slug: "drama-ratings",
  },
];


export default async function HomePage() {
  const posts = await getAllPostsMeta();

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 7);

  const popularTags = ["YouTuber", "芸能", "ファッション", "音楽", "ドラマ", "バラエティ", "SNS", "トレンド"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header は app/layout.tsx でレンダリングされます */}

      {/* Main Content */}
      {/* ★変更箇所1: max-w-6xl を max-w-7xl に変更し、ページの全体幅を広げます */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* 今話題のトレンド情報をお届け (ヒーローセクション) */}
        <section className="text-center py-12 mb-12 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            今話題のトレンド情報をお届け
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            芸能界からYouTuberまで、様々なジャンルの最新トレンドを可愛く楽しくお伝えします♪
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer text-sm py-1 px-3"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* 注目記事セクションと最新情報サイドバー */}
        {/* ★変更箇所2: lg:grid-cols-3 を lg:grid-cols-4 に変更します */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 注目記事 (左側) */}
          {/* ★変更箇所3: lg:col-span-2 を lg:col-span-3 に変更し、メインコンテンツの幅を広げます */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center space-x-2">
              <span className="text-pink-500">★</span>
              <span>注目記事</span>
            </h3>
            {featuredPost && (
              <Card className="bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                  <div className="text-right mt-4">
                    <Link href={`/posts/${featuredPost.slug}`}>
                      <Button variant="link" className="text-pink-600 hover:text-pink-800">
                        続きを読む →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 最新情報サイドバー (右側) */}
          {/* ★変更なし: lg:col-span-1 を維持することで、相対的に幅が広がります */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <span className="text-pink-500">~</span>
                  <span>最新情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestInfoPosts.map((info) => (
                    <div key={info.id}>
                      <Link href={`/posts/${info.slug}`} className="block hover:text-pink-600 transition-colors">
                        <h4 className="text-base font-medium text-gray-800 line-clamp-2">
                          {info.title}
                        </h4>
                      </Link>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Badge variant="outline" className="text-xs mr-2 border-pink-200 text-pink-600">
                          {info.category}
                        </Badge>
                        <span className="text-xs">{info.time}</span>
                      </div>
                      <Separator className="mt-4 bg-pink-100" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Posts Grid (最新のトレンド記事) */}
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
        {posts.length > 7 && (
          <div className="text-center mt-12">
            <Link href="/posts">
              <Button variant="outline" className="bg-white border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700">
                すべての記事を見る
              </Button>
            </Link>
          </div>
        )}
      </main>

      {/* Footer は app/layout.tsx でレンダリングされます */}
    </div>
  );
}
