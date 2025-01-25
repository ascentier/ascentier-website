import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "株式会社アセンティア",
  description: "害虫駆除と水道トラブル、迅速対応いたします！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}