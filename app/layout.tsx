import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SessionProvider } from 'next-auth/react'
import AuthHandler from '@/components/auth-handler'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Passiflora Properties - Luxury Eco-Real Estate',
  description:
    'Invest in land and grow with nature. Discover sustainable communities, farm plots, and resort destinations across India.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Passiflora Properties',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#fbbf24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SessionProvider>
          {children}
          <AuthHandler />
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  )
}
