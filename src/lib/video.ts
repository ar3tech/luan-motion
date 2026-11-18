import type { Project } from '@/data/projects'
import { dict, type Lang } from '@/i18n'

export type ResolvedProject = Project & {
  key: string
  thumbUrl: string | null
  embedUrl: string
}

const ASPECT_CLASS: Record<NonNullable<Project['aspect']>, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '9/16': 'aspect-[9/16]',
}

export function aspectClass(aspect: Project['aspect']) {
  return ASPECT_CLASS[aspect ?? '16/9']
}

export function clientLabel(project: Project, lang: Lang) {
  if (!project.personal) return project.client
  const personal = dict[lang].personal
  return project.client ? `${project.client} · ${personal}` : personal
}

function embedUrl(project: Project) {
  if (project.platform === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${project.id}?autoplay=1&rel=0&modestbranding=1`
  }
  const params = new URLSearchParams({ autoplay: '1', byline: '0', portrait: '0', title: '0', dnt: '1' })
  if (project.hash) params.set('h', project.hash)
  return `https://player.vimeo.com/video/${project.id}?${params}`
}

// Vimeo's oEmbed endpoint is public — no API key needed for public or
// unlisted-with-hash videos. A failure here just falls back to a plain tile.
async function vimeoThumb(project: Project): Promise<string | null> {
  const page = project.hash
    ? `https://vimeo.com/${project.id}/${project.hash}`
    : `https://vimeo.com/${project.id}`

  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(page)}&width=1280`,
      process.env.NODE_ENV === 'development' ? { cache: 'no-store' } : { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const data: unknown = await res.json()
    const url = (data as { thumbnail_url?: unknown }).thumbnail_url
    return typeof url === 'string' ? url : null
  } catch {
    return null
  }
}

export async function resolveProject(project: Project): Promise<ResolvedProject> {
  let thumbUrl: string | null = project.thumb ?? null

  if (!thumbUrl) {
    thumbUrl =
      project.platform === 'youtube'
        ? `https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`
        : await vimeoThumb(project)
  }

  return {
    ...project,
    key: `${project.platform ?? 'vimeo'}-${project.id}`,
    thumbUrl,
    embedUrl: embedUrl(project),
  }
}

export function resolveProjects(list: Project[]) {
  return Promise.all(list.map(resolveProject))
}
