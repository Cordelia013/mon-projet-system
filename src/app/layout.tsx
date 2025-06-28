import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'NextJS Boilerplate',
    template: '%s | NextJS Boilerplate',
  },
  description: 'Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript et Tailwind CSS.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Boilerplate'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.com',
    title: 'NextJS Boilerplate',
    description: 'Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript et Tailwind CSS.',
    siteName: 'NextJS Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextJS Boilerplate',
    description: 'Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript et Tailwind CSS.',
    creator: '@votre_twitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}