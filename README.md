# Luan Borges — Portfólio de Motion

Site em `motion.wilbetech.com.br`. Next.js + Tailwind + Framer Motion.

## Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3100

## O que editar

Você só precisa mexer em dois arquivos:

| Arquivo | O que tem dentro |
|---|---|
| `src/data/site.ts` | Seu nome, bio, e-mail, redes, lista de serviços |
| `src/data/projects.ts` | Os trabalhos (vídeos, títulos, clientes, ano) |

Os campos ainda em aberto estão marcados com `TODO` nesses arquivos.

## Como adicionar um trabalho

Abra `src/data/projects.ts` e copie um dos blocos. Para o ID do vídeo:

| Link que você tem | O que preencher |
|---|---|
| `vimeo.com/912345678` | `id: '912345678'` |
| `vimeo.com/912345678/a1b2c3d4e5` (não listado) | `id: '912345678'`, `hash: 'a1b2c3d4e5'` |
| `youtu.be/dQw4w9WgXcQ` | `platform: 'youtube'`, `id: 'dQw4w9WgXcQ'` |

A miniatura vem sozinha do Vimeo/YouTube. Se quiser usar uma sua, salve em
`public/work/` e aponte em `thumb: '/work/arquivo.jpg'`.

O campo `aspect` controla o formato do tile na grade: `'16/9'`, `'4/3'`,
`'1/1'`, `'4/5'` ou `'9/16'`. Variar entre os projetos é o que dá o ritmo
assimétrico da página.

Use `featured: true` em um único projeto (normalmente o reel) — ele aparece
grande, no topo.

## Importante sobre os vídeos

Não coloque arquivos de vídeo no repositório. Hospede no Vimeo ou YouTube e
use só o link. A Vercel limita arquivos a 100 MB e cobra por banda.

## Publicar

O projeto é independente da landing da Wilbe — repositório próprio e projeto
próprio na Vercel.

1. Suba para um repositório no GitHub
2. Importe na Vercel
3. Settings → Domains → `motion.wilbetech.com.br`
4. No Hostgator, crie um CNAME com nome `motion` apontando para o valor que a
   Vercel mostrar

Não mexa nos registros `@` e `www` — são da landing da Wilbe.
