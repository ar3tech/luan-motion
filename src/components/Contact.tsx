'use client'

import { motion } from 'framer-motion'
import { site } from '@/data/site'
import { dict, type Lang } from '@/i18n'

const SOCIAL_LABELS: Record<keyof typeof site.social, string> = {
  instagram: 'Instagram',
  behance: 'Behance',
  vimeo: 'Vimeo',
  linkedin: 'LinkedIn',
}

export function Contact({ lang }: { lang: Lang }) {
  const t = dict[lang]
  const socials = (Object.keys(site.social) as (keyof typeof site.social)[])
    .filter((key) => site.social[key])
    .map((key) => ({ label: SOCIAL_LABELS[key], href: site.social[key] }))

  return (
    <footer id={t.sections.contact} className="px-5 pb-10 pt-32 sm:px-8 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-label uppercase text-ink-faint">{t.contact}</p>

          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-display-xl lowercase tracking-tight transition-opacity hover:opacity-55"
            >
              {site.email}
            </a>
          ) : (
            <p className="mt-6 text-display-xl tracking-tight text-ink-faint">
              {t.emailMissing}
            </p>
          )}
        </motion.div>

        <div className="hairline mt-20 flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p className="text-label uppercase text-ink-faint">
            © {new Date().getFullYear()} {site.name}
          </p>

          {socials.length > 0 && (
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-label uppercase text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}
