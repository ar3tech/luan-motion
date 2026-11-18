import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { WorkGallery } from '@/components/WorkGallery'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { projects } from '@/data/projects'
import { resolveProjects } from '@/lib/video'

// Thumbnails come from Vimeo/YouTube and refresh hourly, so a new cover set
// on Vimeo shows up without a redeploy.
export const revalidate = 3600

export default async function Home() {
  const resolved = await resolveProjects(projects)

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <WorkGallery projects={resolved} />
        <About />
      </main>
      <Contact />
    </>
  )
}
