import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'SkillBridge Agency | Building Digital Experiences That Grow Your Brand',
  description: 'SkillBridge Agency is a premium digital agency specializing in website development, video editing, graphic designing, and social media marketing. We build digital experiences that grow your brand.',
  keywords: ['digital agency', 'web development', 'video editing', 'graphic design', 'social media marketing', 'SkillBridge'],
  authors: [{ name: 'SkillBridge Agency' }],
  openGraph: {
    title: 'SkillBridge Agency | Building Digital Experiences That Grow Your Brand',
    description: 'Premium digital agency specializing in website development, video editing, graphic designing, and social media marketing.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
