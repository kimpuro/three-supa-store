import { GeistSans } from 'geist/font/sans'
import React from 'react'
import "./globals.css"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "KimPuro's Shoe Store",
  description: '김동은의 신발 스토어 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={GeistSans.className}>
      <body className="w-full h-dvh">
        <main className="w-full h-dvh">{children}</main>
      </body>
    </html>
  )
}