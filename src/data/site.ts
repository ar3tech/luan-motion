// ─────────────────────────────────────────────────────────────
// Dados gerais do site. Edite aqui — nada de mexer em componente.
// Campos vazios ('') simplesmente não aparecem no site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Luan Borges',
  role: 'Motion Designer',

  // Cidade/estado, ex.: 'São Paulo, BR'. Aparece embaixo do nome.
  location: '',

  // Aparece na seção Sobre. Cada item vira um parágrafo.
  // `pt` é a versão em português (/), `en` a versão em inglês (/en).
  bio: {
    pt: ['Conto umas histórias através do movimento.'],
    en: ['I tell a few stories through motion.'],
  },

  email: 'luan.wilbe@gmail.com',

  // Cole o link completo do perfil, ex.: 'https://instagram.com/seuperfil'.
  social: {
    instagram: '',
    behance: '',
    vimeo: '',
    linkedin: '',
  },

  // Lista de serviços/capacidades, nos dois idiomas, na mesma ordem.
  services: {
    pt: [
      'Direção de arte em movimento',
      'Animação 2D',
      'Identidade em movimento',
      'Motion para redes sociais',
      'Edição e finalização',
    ],
    en: [
      'Motion art direction',
      '2D animation',
      'Motion identity',
      'Social media motion',
      'Editing and finishing',
    ],
  },

  // Clientes/marcas com quem já trabalhou.
  clients: [] as string[],
} as const
