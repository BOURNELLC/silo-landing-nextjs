import type { Metadata } from 'next'
import { Quicksand as Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Silo Network',
  description: 'Decentralized Cloud Storage Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
