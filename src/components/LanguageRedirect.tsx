'use client'

import { useEffect } from 'react'
import { HOME, type Lang } from '@/i18n'

const STORAGE_KEY = 'lang'

// Crawlers and link-preview bots must see "/" in Portuguese, never a redirect.
const BOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|linkedin|telegram|slack|discord|embedly|preview/i

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Private mode or blocked storage: the switch still navigates.
  }
}

function savedLang(): Lang | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'pt' || value === 'en' ? value : null
  } catch {
    return null
  }
}

// Only on the Portuguese home: send a visitor to /en when they picked English
// before, or — on a first visit — when no browser language is Portuguese.
// A link that already points at /en is never redirected back.
export function LanguageRedirect() {
  useEffect(() => {
    if (window.location.pathname !== HOME.pt) return
    if (BOT.test(navigator.userAgent) || navigator.webdriver) return

    const saved = savedLang()
    const prefersPortuguese = (navigator.languages ?? [navigator.language]).some((l) =>
      l.toLowerCase().startsWith('pt')
    )

    if (saved === 'en' || (saved === null && !prefersPortuguese)) {
      window.location.replace(HOME.en)
    }
  }, [])

  return null
}
