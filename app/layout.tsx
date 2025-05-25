// layout.tsx：ヘッダー＋ナビゲーション追加済みバージョン
"use client"

import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Trend Cafe",
  description: "最新トレンドを毎日チェック！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={cn("min-h-screen bg-white font-sans antialiased", inter.className)}>
        {/* ヘッダー */}
        <header className="bg-white border-b">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              <Link href="/">Trend Cafe</Link>
            </h1>
            {/* ナビゲーションメニュー */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">ニュース</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/entertainment" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">エンタメ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sports" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">スポーツ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/economy" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">経済</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/column" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">コラム</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* メインエリア */}
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}
