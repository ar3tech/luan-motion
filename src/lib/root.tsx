import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { site } from '@/data/site'
import { dict, HOME, type Lang } from '@/i18n'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700'],
})

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://motion.wilbetech.com.br'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F2EE',
}

export function buildMetadata(lang: Lang): Metadata {
  const t = dict[lang]
  const title = `${site.name} — ${site.role}`

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: title, template: `%s | ${site.name}` },
    description: t.description,
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: {
      canonical: HOME[lang],
      languages: { 'pt-BR': HOME.pt, en: HOME.en, 'x-default': HOME.pt },
    },
    openGraph: {
      title,
      description: t.description,
      url: HOME[lang],
      siteName: site.name,
      type: 'website',
      locale: t.ogLocale,
      alternateLocale: lang === 'pt' ? dict.en.ogLocale : dict.pt.ogLocale,
    },
    twitter: { card: 'summary_large_image', title, description: t.description },
    robots: { index: true, follow: true },
  }
}

// Each language has its own root layout so <html lang> is correct in the
// server-rendered page — that is what search engines and screen readers read.
export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={dict[lang].htmlLang} className={archivo.variable}>
      <body className={`${archivo.className} bg-paper text-ink antialiased`}>{children}</body>
    </html>
  )
}
