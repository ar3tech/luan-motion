'use client'

import { motion } from 'framer-motion'
import { site } from '@/data/site'

const rise = {
  hidden: { y: '100%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const words = site.name.split(' ')
  const meta = [site.role, site.location, `©${new Date().getFullYear()}`].filter(Boolean)

  return (
    <header className="relative px-5 pt-28 pb-16 sm:px-8 md:pt-36 md:pb-24">
      <h1 className="text-display-hero uppercase text-center">
        {words.map((word, i) => (
          <span key={word} className="block overflow-hidden pb-[0.04em] sm:inline-block sm:px-[0.06em]">
            <motion.span
              className="block"
              variants={rise}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="mt-5 text-center text-label uppercase text-ink-soft md:mt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {meta.join(' · ')}
      </motion.p>
    </header>
  )
}
