'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { site } from '@/data/site'

const links = [
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={clsx(
        'fixed inset-x-0 top-0 z-30 flex items-center justify-end gap-6 px-5 py-5 transition-colors duration-300 sm:justify-between sm:px-8',
        scrolled && 'bg-paper/80 backdrop-blur-md'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <a
        href="#top"
        className="hidden whitespace-nowrap text-label uppercase transition-opacity hover:opacity-55 sm:block"
      >
        {site.name}
      </a>

      <div className="flex gap-6 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-label uppercase text-ink-soft transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
