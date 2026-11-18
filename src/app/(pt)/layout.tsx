import { buildMetadata, RootDocument } from '@/lib/root'
import '../globals.css'

export { viewport } from '@/lib/root'

export const metadata = buildMetadata('pt')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="pt">{children}</RootDocument>
}
