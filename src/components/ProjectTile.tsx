'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { aspectClass, clientLabel, type ResolvedProject } from '@/lib/video'

export function ProjectTile({
  project,
  onOpen,
  onHoverChange,
  priority,
  className,
  order,
  drift = 0,
}: {
  project: ResolvedProject
  onOpen: () => void
  onHoverChange: (hovering: boolean) => void
  priority?: boolean
  className?: string
  /** Position in the single-column mobile layout. */
  order?: number
  /** Pixels this tile travels while crossing the viewport. 0 turns it off. */
  drift?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift])

  return (
    <motion.div ref={ref} className={className} style={{ order, y: drift ? y : 0 }}>
      <motion.article
        className="group cursor-none-fine"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onOpen}
          onMouseEnter={() => onHoverChange(true)}
          onMouseLeave={() => onHoverChange(false)}
          onFocus={() => onHoverChange(true)}
          onBlur={() => onHoverChange(false)}
          aria-label={`Assistir ${project.title}`}
          className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        >
          <div className={clsx('relative overflow-hidden bg-paper-dim', aspectClass(project.aspect))}>
            {project.thumbUrl ? (
              <Image
                src={project.thumbUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority}
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 text-center text-label uppercase text-ink-faint">
                  {project.title}
                </span>
              </div>
            )}
          </div>
  
          <div className="mt-3 flex items-baseline justify-between gap-6">
            <div className="min-w-0">
              <p className="text-label uppercase leading-snug text-ink-faint">
                {clientLabel(project)}
                {project.agency && ` · via ${project.agency}`}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug tracking-tight text-balance sm:text-lg">
                {project.title}
              </h3>
            </div>
            <span className="shrink-0 text-label uppercase text-ink-faint">{project.year}</span>
          </div>
  
          {project.roles.length > 0 && (
            <p className="mt-1 text-label-sm uppercase text-ink-faint">{project.roles.join(' / ')}</p>
          )}
        </button>
      </motion.article>
    </motion.div>
  )
}
