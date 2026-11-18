'use client'

import { motion } from 'framer-motion'
import { site } from '@/data/site'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

export function About() {
  return (
    <section id="sobre" className="px-5 pt-32 sm:px-8 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="hairline pt-10 md:pt-14" />

        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15%' }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p variants={fade} className="text-label uppercase text-ink-faint md:col-span-3">
            Sobre
          </motion.p>

          <div className="md:col-span-9">
            {site.bio.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fade}
                className="mb-6 max-w-3xl text-display-lg text-balance last:mb-0"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {site.services.length > 0 && (
          <motion.div
            className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-12 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.p variants={fade} className="text-label uppercase text-ink-faint md:col-span-3">
              O que eu faço
            </motion.p>

            <ul className="md:col-span-9">
              {site.services.map((service) => (
                <motion.li
                  key={service}
                  variants={fade}
                  className="hairline py-4 text-xl font-medium tracking-tight sm:text-2xl"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {site.clients.length > 0 && (
          <motion.div
            className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-12 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={fade}
          >
            <p className="text-label uppercase text-ink-faint md:col-span-3">Clientes</p>
            <p className="md:col-span-9 text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              {site.clients.join(', ')}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
