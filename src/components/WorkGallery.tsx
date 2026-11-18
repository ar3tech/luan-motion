'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ProjectTile } from './ProjectTile'
import { Lightbox } from './Lightbox'
import type { ResolvedProject } from '@/lib/video'
import { dict, type Lang } from '@/i18n'

// A speed that looks random but is fixed per position, so the server and the
// browser render the same layout. Neighbours never differ by more than 90px,
// which stays under the 128px column gap — tiles can't run into each other.
function driftFor(order: number) {
  const r = Math.abs(Math.sin(order * 12.9898 + 78.233) * 43758.5453) % 1
  return Math.round(20 + r * 90)
}

function useIsDesktop() {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const update = () => setMatches(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return matches
}

// The word PLAY trails the cursor while a tile is hovered. Difference blending
// keeps it readable over both light and dark thumbnails.
function PlayCursor({ active }: { active: boolean }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 450, damping: 38, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 450, damping: 38, mass: 0.5 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden mix-blend-difference [@media(hover:hover)]:block"
      style={{ x: sx, y: sy }}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            className="block -translate-x-1/2 -translate-y-1/2 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Play
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function WorkGallery({ projects, lang }: { projects: ResolvedProject[]; lang: Lang }) {
  const [open, setOpen] = useState<ResolvedProject | null>(null)
  const [hovering, setHovering] = useState(false)

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => p !== featured)

  // Two columns on desktop, the right one starting lower. On mobile the
  // column wrappers dissolve (display: contents) and `order` restores the
  // original sequence.
  const indexed = rest.map((project, order) => ({
    project,
    order,
    side: project.column ?? (order % 2 === 0 ? 'left' : 'right'),
  }))
  const left = indexed.filter(({ side }) => side === 'left')
  const right = indexed.filter(({ side }) => side === 'right')

  // Parallax in two layers: each column drifts at its own speed, and every
  // tile inside it drifts at another. Off on mobile (stacked columns would
  // overlap) and for reduced motion.
  const gridRef = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()
  const reduceMotion = useReducedMotion()
  const parallax = isDesktop && !reduceMotion

  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['start end', 'end start'] })
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const rightY = useTransform(scrollYProgress, [0, 1], [160, -160])

  return (
    <section id={dict[lang].sections.work} className="px-5 sm:px-8">
      <PlayCursor active={hovering && !open} />

      {featured && (
        <div className="mx-auto mb-20 max-w-[1600px] md:mb-32">
          <ProjectTile
            project={featured}
            lang={lang}
            priority
            onOpen={() => setOpen(featured)}
            onHoverChange={setHovering}
          />
        </div>
      )}

      <div
        ref={gridRef}
        className="relative mx-auto flex max-w-[1600px] flex-col gap-20 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-0 lg:gap-x-24"
      >
        <motion.div
          className="contents md:flex md:flex-col md:gap-32"
          style={{ y: parallax ? leftY : 0 }}
        >
          {left.map(({ project, order }) => (
            <ProjectTile
              key={project.key}
              project={project}
              lang={lang}
              order={order}
              drift={parallax ? driftFor(order) : 0}
              priority={order === 0}
              onOpen={() => setOpen(project)}
              onHoverChange={setHovering}
            />
          ))}
        </motion.div>

        <motion.div
          className="contents md:flex md:flex-col md:gap-32 md:pt-24"
          style={{ y: parallax ? rightY : 0 }}
        >
          {right.map(({ project, order }) => (
            <ProjectTile
              key={project.key}
              project={project}
              lang={lang}
              order={order}
              drift={parallax ? driftFor(order) : 0}
              onOpen={() => setOpen(project)}
              onHoverChange={setHovering}
            />
          ))}
        </motion.div>
      </div>

      <Lightbox project={open} lang={lang} onClose={() => setOpen(null)} />
    </section>
  )
}
