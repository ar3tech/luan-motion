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
  bio: ['Conto umas histórias através do movimento.'],

  email: 'luan.wilbe@gmail.com',

  // Cole o link completo do perfil, ex.: 'https://instagram.com/seuperfil'.
  social: {
    instagram: '',
    behance: '',
    vimeo: '',
    linkedin: '',
  },

  // Lista de serviços/capacidades. Remova ou acrescente à vontade.
  services: [
    'Direção de arte em movimento',
    'Animação 2D',
    'Identidade em movimento',
    'Motion para redes sociais',
    'Edição e finalização',
  ],

  // Clientes/marcas com quem já trabalhou.
  clients: [] as string[],
} as const
