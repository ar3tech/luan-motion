// ─────────────────────────────────────────────────────────────
// Seus trabalhos. Para adicionar um projeto, copie um bloco abaixo.
//
// COMO PEGAR O ID DO VÍDEO
//
//   Vimeo público     https://vimeo.com/912345678
//                     → id: '912345678'
//
//   Vimeo não listado https://vimeo.com/912345678/a1b2c3d4e5
//                     → id: '912345678', hash: 'a1b2c3d4e5'
//
//   YouTube           https://youtu.be/dQw4w9WgXcQ
//                     → platform: 'youtube', id: 'dQw4w9WgXcQ'
//
// A miniatura vem automaticamente do Vimeo/YouTube. Se quiser usar
// uma imagem sua, coloque o arquivo em /public/work/ e aponte em
// `thumb` (ex.: '/work/nome-do-projeto.jpg') — ela tem prioridade.
//
// `featured: true` coloca o projeto em destaque, largo, no topo.
// Use em no máximo um (o reel, normalmente).
//
// `agency` mostra "via Agência" abaixo do cliente, quando o trabalho
// veio por intermédio de uma agência.
//
// `personal: true` marca o trabalho como projeto pessoal (estudo, não
// encomendado). Com `client` vazio aparece só "Projeto pessoal"; com o
// nome de uma marca, "Marca · Projeto pessoal". Em inglês vira
// "Personal project".
//
// No computador os trabalhos se alternam entre as colunas esquerda e
// direita, na ordem da lista. Use `column: 'left'` ou `column: 'right'`
// para forçar um trabalho numa coluna. No celular vale sempre a ordem
// da lista.
// ─────────────────────────────────────────────────────────────

export type Project = {
  id: string
  hash?: string
  platform?: 'vimeo' | 'youtube'
  client: string
  agency?: string
  personal?: boolean
  title: string
  year: string
  roles: string[]
  /** Proporção do tile na grade. Padrão: '16/9'. */
  aspect?: '16/9' | '4/3' | '1/1' | '4/5' | '9/16'
  thumb?: string
  featured?: boolean
  column?: 'left' | 'right'
}

const ROLES = ['Direção de arte', 'Motion design']

export const projects: Project[] = [
  {
    id: '1233150827',
    client: 'OH BRÜDER',
    title: 'Café do Amanhã',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
  },
  {
    id: '1247958718',
    client: 'Elva',
    title: 'Comer bem é mais simples do que parece',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
  },
  {
    id: '1165471613',
    client: 'ÖUS',
    personal: true,
    title: 'Skate Everywhere',
    year: '2026',
    roles: ROLES,
    aspect: '4/5',
  },
  {
    id: '1140519600',
    client: 'Timo',
    title: 'A New Visual ID',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
  },
  {
    id: '1124329944',
    client: '',
    personal: true,
    title: 'Skate Cycle',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
  },
  {
    id: '1104596350',
    client: 'Câmara de Francisco Beltrão',
    agency: 'Blanco Lima',
    title: 'Explainer - Câmara de Vereadores',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
  },
  {
    id: '1247994656',
    client: 'Batidaviva',
    title: 'Presente, inclusive na ausência',
    year: '2026',
    roles: ROLES,
    aspect: '16/9',
    column: 'right',
  },
]
