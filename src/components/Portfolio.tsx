import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { WorkGallery } from '@/components/WorkGallery'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { projects } from '@/data/projects'
import { resolveProjects } from '@/lib/video'
import type { Lang } from '@/i18n'

// The whole page, shared by "/" (pt) and "/en" (en).
export async function Portfolio({ lang }: { lang: Lang }) {
  const resolved = await resolveProjects(projects)

  return (
    <>
      <Nav lang={lang} />
      <main id="top">
        <Hero />
        <WorkGallery projects={resolved} lang={lang} />
        <About lang={lang} />
      </main>
      <Contact lang={lang} />
    </>
  )
}
