import { Heart, Calendar, Eye, Share2, MessageCircle, ThumbsUp, ArrowLeft, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { notFound } from "next/navigation"

// サンプル記事データ
const posts = {
  "youtuber-new-project-viral": {
    id: 1,
    title: "話題のYouTuber新企画が大反響！視聴者数が過去最高を記録",
    content: `
      <p>人気YouTuberの新しい企画動画が公開されてから24時間で100万回再生を突破し、ファンからは絶賛の声が続々と寄せられています。</p>
      
      <h2>企画の詳細</h2>
      <p>今回の企画は、視聴者からのリクエストに応える形で実現したもので、これまでにない斬新なアイデアが話題となっています。動画では、普段見ることのできない舞台裏の様子や、制作過程での苦労話なども赤裸々に語られており、ファンにとっては貴重な内容となっています。</p>
      
      <h2>ファンの反応</h2>
      <p>コメント欄には「感動した！」「次回も楽しみ！」といった好意的な意見が多数寄せられており、SNSでも大きな話題となっています。特に、企画の最後に明かされたサプライズ発表には、多くのファンが驚きと喜びの声を上げています。</p>
      
      <h2>今後の展開</h2>
      <p>この成功を受けて、今後も定期的に同様の企画を実施していく予定とのことです。また、他のクリエイターとのコラボレーション企画も検討されており、さらなる盛り上がりが期待されています。</p>
      
      <p>YouTuber業界全体にとっても、新しい企画の可能性を示す重要な事例となりそうです。視聴者との距離を縮める新しい形のコンテンツとして、今後の動向に注目が集まっています。</p>
    `,
    excerpt: "人気YouTuberの新しい企画動画が公開されてから24時間で100万回再生を突破。ファンからは絶賛の声が...",
    category: "YouTuber",
    views: "1.2M",
    date: "2024年1月15日",
    publishedAt: "2024-01-15T10:00:00Z",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["YouTuber", "バズ", "企画", "エンタメ"],
    readTime: "3分",
    author: "トレンドカフェ編集部",
  },
  "celebrity-couple-dating-rumors": {
    id: 2,
    title: "芸能界に新たなカップル誕生？熱愛報道の真相に迫る",
    content: `
      <p>人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題となっています。二人の関係性について詳しく調査しました。</p>
      
      <h2>報道の経緯</h2>
      <p>今回の熱愛報道は、週刊誌のスクープ記事から始まりました。都内の高級レストランでの密会の様子が撮影され、親密な関係であることが明らかになりました。</p>
      
      <h2>ファンの反応</h2>
      <p>ファンからは祝福の声が多数寄せられている一方で、驚きの声も上がっています。SNSでは関連するハッシュタグがトレンド入りするなど、大きな注目を集めています。</p>
    `,
    excerpt: "人気俳優と女優の熱愛が報じられ、ファンの間で大きな話題となっています。二人の関係性について詳しく...",
    category: "芸能",
    views: "890K",
    date: "2024年1月14日",
    publishedAt: "2024-01-14T15:30:00Z",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["芸能", "熱愛", "俳優", "女優"],
    readTime: "2分",
    author: "トレンドカフェ編集部",
  },
  "spring-fashion-trends-2024": {
    id: 3,
    title: "今年のトレンドファッションを先取り！春の注目アイテム",
    content: `
      <p>2024年春のファッショントレンドが続々と発表されています。今年注目すべきアイテムとコーディネート術をご紹介します。</p>
      
      <h2>注目のカラー</h2>
      <p>今年の春は、パステルカラーが大注目です。特にラベンダーやミントグリーンなどの優しい色合いが人気を集めています。</p>
      
      <h2>マストハブアイテム</h2>
      <p>この春絶対に手に入れたいアイテムをピックアップしました。トレンドを取り入れながらも、長く愛用できるアイテムを中心にご紹介します。</p>
    `,
    excerpt: "2024年春のファッショントレンドが続々と発表されています。今年注目すべきアイテムとコーディネート術を...",
    category: "ファッション",
    views: "654K",
    date: "2024年1月13日",
    publishedAt: "2024-01-13T12:00:00Z",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["ファッション", "トレンド", "春", "コーディネート"],
    readTime: "4分",
    author: "トレンドカフェ編集部",
  },
}

// 関連記事データ
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
]

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

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
              <div
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
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
                      <div key={relatedPost.id} className="group cursor-pointer">
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
                      </div>
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
  )
}
