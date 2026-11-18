// ─────────────────────────────────────────────────────────────
// Textos da interface nos dois idiomas. O português fica em "/" e o
// inglês em "/en". Textos sobre você (bio, serviços) ficam em
// src/data/site.ts; os trabalhos, em src/data/projects.ts.
// ─────────────────────────────────────────────────────────────

export type Lang = 'pt' | 'en'

export const LANGS: Lang[] = ['pt', 'en']

export const HOME: Record<Lang, string> = { pt: '/', en: '/en' }

export const dict = {
  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    description:
      'Portfólio de motion design de Luan Borges: animação, direção de arte em movimento e identidade visual animada.',
    sections: { work: 'trabalhos', about: 'sobre', contact: 'contato' },
    nav: { work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
    switchTo: 'EN',
    switchLabel: 'Read in English',
    about: 'Sobre',
    whatIDo: 'O que eu faço',
    clients: 'Clientes',
    contact: 'Contato',
    emailMissing: 'adicione seu e-mail',
    personal: 'Projeto pessoal',
    via: 'via',
    watch: (title: string) => `Assistir ${title}`,
    close: 'Fechar (esc)',
    closeLabel: 'Fechar',
    roles: {} as Record<string, string>,
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    description:
      "Luan Borges's motion design portfolio: animation, motion art direction and animated visual identity.",
    sections: { work: 'work', about: 'about', contact: 'contact' },
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    switchTo: 'PT',
    switchLabel: 'Ler em português',
    about: 'About',
    whatIDo: 'What I do',
    clients: 'Clients',
    contact: 'Contact',
    emailMissing: 'add your email',
    personal: 'Personal project',
    via: 'via',
    watch: (title: string) => `Watch ${title}`,
    close: 'Close (esc)',
    closeLabel: 'Close',
    // Funções dos trabalhos (src/data/projects.ts) em inglês. Uma função sem
    // tradução aqui aparece como está escrita lá.
    roles: {
      'Direção de arte': 'Art direction',
      'Motion design': 'Motion design',
      'Animação 2D': '2D animation',
      Edição: 'Editing',
    } as Record<string, string>,
  },
}

export type Dict = (typeof dict)[Lang]

export function translateRole(role: string, lang: Lang) {
  return dict[lang].roles[role] ?? role
}
