import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { site } from '@/data/site'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700'],
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://motion.wilbetech.com.br'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F2EE',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `Portfólio de ${site.role.toLowerCase()} de ${site.name}: animação, direção de arte em movimento e identidade visual animada.`,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: `Portfólio de ${site.role.toLowerCase()} de ${site.name}.`,
    url: BASE_URL,
    siteName: site.name,
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: `Portfólio de ${site.role.toLowerCase()} de ${site.name}.`,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className={`${archivo.className} bg-paper text-ink antialiased`}>{children}</body>
    </html>
  )
}
