import { Portfolio } from '@/components/Portfolio'
import { LanguageRedirect } from '@/components/LanguageRedirect'

// Thumbnails come from Vimeo/YouTube and refresh hourly, so a new cover set
// on Vimeo shows up without a redeploy.
export const revalidate = 3600

export default function Home() {
  return (
    <>
      <LanguageRedirect />
      <Portfolio lang="pt" />
    </>
  )
}
