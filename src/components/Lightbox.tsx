'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clientLabel, type ResolvedProject } from '@/lib/video'
import { dict, translateRole, type Lang } from '@/i18n'

export function Lightbox({
  project,
  lang,
  onClose,
}: {
  project: ResolvedProject | null
  lang: Lang
  onClose: () => void
}) {
  useEffect(() => {
    if (!project) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={dict[lang].closeLabel}
            className="absolute right-5 top-5 z-10 text-label uppercase text-paper/70 transition-colors hover:text-paper sm:right-8 sm:top-8"
          >
            {dict[lang].close}
          </button>

          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={project.embedUrl}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-paper">
              <h2 className="text-lg font-semibold tracking-tight">
                <span className="text-paper/50">{clientLabel(project, lang)} — </span>
                {project.title}
                {project.agency && (
                  <span className="ml-2 text-sm font-normal text-paper/50">{dict[lang].via} {project.agency}</span>
                )}
              </h2>
              <p className="text-label uppercase text-paper/50">
                {[...project.roles.map((role) => translateRole(role, lang)), project.year].join(' · ')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
