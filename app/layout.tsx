import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'
import Analytics from '@/components/Analytics'
import { generateOrganizationSchema, generateWebSiteSchema, BASE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Rentabilidad Empresarial para Pymes`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['rentabilidad', 'pymes', 'empresarios', 'método', 'margen bruto', 'costes', 'beneficio'],
  authors: [{ name: 'Foco Rentabilismo' }],
  creator: 'Foco Rentabilismo',
  publisher: 'Foco Rentabilismo',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Rentabilidad Empresarial para Pymes`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Rentabilidad Empresarial para Pymes`,
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: 'SKIkHC0ay4lEdMvEDbKtdrxtGTEL8kL3EFQ7k5OvW70',
  },
  other: {
    'google-adsense-account': 'ca-pub-0495369967608511',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es': BASE_URL,
      'es-419': BASE_URL,
      'x-default': BASE_URL,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Analytics />
        <SchemaOrg schema={generateOrganizationSchema()} />
        <SchemaOrg schema={generateWebSiteSchema()} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
