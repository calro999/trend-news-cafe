import { Heart, Calendar, Eye, Share2, MessageCircle, ThumbsUp, ArrowLeft, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs"; // ファイルシステムを操作するNode.jsモジュール
import path from "path"; // パスを操作するNode.jsモジュール
import matter from "gray-matter"; // フロントマターをパースするライブラリ
import { MDXRemote } from "next-mdx-remote/rsc"; // next-mdx-remote の RSC (React Server Components) 対応版

// 関連記事データ（これはMDXファイルから取得しないので、そのまま残します）
// 必要に応じて、こちらもMDXファイルから動的に取得するように拡張することも可能です。
const relatedPosts = [
  {
    id: 4,
    title: "人気インフルエンサーの最新コラボが話題沸騰",
    category: "YouTuber",
    image: "/placeholder.svg?height=150&width=200",
    slug: "influencer-collab-trending",
  },
  {
    id: 5,
    title: "今週のバラエティ番組視聴率ランキング",
    category: "エンタメ",
    image: "/placeholder.svg?height=150&width=200",
    slug: "variety-show-ratings",
  },
  {
    id: 6,
    title: "SNSで話題のダンスチャレンジまとめ",
    category: "トレンド",
    image: "/placeholder.svg?height=150&width=200",
    slug: "dance-challenge-summary",
  },
  {
    id: 7,
    title: "今年注目のK-POPアーティスト特集",
    category: "音楽",
    image: "/placeholder.svg?height=150&width=200",
    slug: "kpop-artists-2024",
  },
];

// getStaticPaths の代替として、Next.js 13+ の App Router では generateStaticParams を使用します。
// これにより、ビルド時にすべての記事ページを静的に生成します。
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app', 'posts'); // postsディレクトリのパス
  const filenames = fs.readdirSync(postsDirectory); // ディレクトリ内のすべてのファイル名を取得

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''), // .mdx拡張子を除去してslugを生成
  }));
}

// 記事データを取得する関数
async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'app', 'posts', `${slug}.mdx`);

  // ファイルが存在しない場合は404
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent); // フロントマターとコンテンツをパース

  return {
    frontmatter: data, // メタデータ
    content, // MDXコンテンツ
  };
}

// 記事のメタデータの型定義
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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const postData = await getPost(params.slug);

  if (!postData) {
    notFound();
  }

  const post = postData.frontmatter as PostFrontmatter; // フロントマターを型付け
  const mdxSource = postData.content; // MDXコンテンツ

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                トレンドカフェ
              </h1>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-pink-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.readTime}で読める</span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {post.views} 回閲覧
                </div>
                <div className="flex items-center">
                  <span>by {post.author}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-4 mb-8 p-4 bg-white/60 rounded-lg">
                <span className="text-sm font-medium text-gray-700">この記事をシェア:</span>
                <Button size="sm" variant="outline" className="border-pink-200 hover:bg-pink-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-blue-200 hover:bg-blue-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-green-200 hover:bg-green-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  LINE
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-8">
              {/* dangerouslySetInnerHTML の代わりに MDXRemote を使用 */}
              <div className="text-gray-700 leading-relaxed space-y-4">
                <MDXRemote source={mdxSource} />
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">タグ:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Article Actions */}
            <div className="flex items-center justify-between mb-8 p-4 bg-white/60 rounded-lg">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="border-pink-200 hover:bg-pink-50">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  いいね (124)
                </Button>
                <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  コメント (18)
                </Button>
              </div>
              <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50">
                <Heart className="w-4 h-4 mr-2" />
                お気に入り
              </Button>
            </div>

            {/* Comments Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-pink-500" />
                  <span>コメント (18)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                        <span className="text-pink-700 font-bold text-sm">A</span>
                      </div>
                      <span className="font-medium text-gray-800">匿名ユーザー</span>
                      <span className="text-xs text-gray-500">2時間前</span>
                    </div>
                    <p className="text-gray-700 text-sm">とても興味深い記事でした！続報も楽しみにしています♪</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold text-sm">B</span>
                      </div>
                      <span className="font-medium text-gray-800">トレンド好き</span>
                      <span className="text-xs text-gray-500">4時間前</span>
                    </div>
                    <p className="text-gray-700 text-sm">いつも最新情報をありがとうございます！参考になります。</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-3">コメントを投稿</h4>
                    <div className="space-y-3">
                      <textarea
                        placeholder="コメントを入力してください..."
                        className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                        rows={3}
                      />
                      <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500">
                        コメントを投稿
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
                <CardHeader>
                  <CardTitle className="text-xl">関連記事</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/posts/${relatedPost.slug}`} className="group cursor-pointer">
                        <div className="space-y-3">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="text-base font-medium text-gray-800 group-hover:text-pink-600 transition-colors line-clamp-2 mb-2">
                              {relatedPost.title}
                            </h4>
                            <Badge variant="outline" className="text-sm border-pink-200 text-pink-600">
                              {relatedPost.category}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
                <CardHeader>
                  <CardTitle className="text-xl">人気タグ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["YouTuber", "芸能", "ファッション", "音楽", "ドラマ", "バラエティ", "SNS", "トレンド"].map(
                      (tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer text-sm"
                        >
                          #{tag}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
                <CardHeader>
                  <CardTitle className="text-center text-xl">
                    <Heart className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    最新情報をお届け
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 text-center mb-4">
                    トレンド情報を見逃さないように、メルマガ登録をお忘れなく♪
                  </p>
                  <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500">
                    メルマガ登録
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

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