import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F2EE',
        'paper-dim': '#EBE8E2',
        ink: '#101010',
        'ink-soft': '#5A5853',
        'ink-faint': '#8E8B84',
        line: 'rgba(16,16,16,0.12)',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Oversized display scale — the type is the identity here
        'display-hero': ['clamp(3rem, 13vw, 13rem)', { lineHeight: '0.86', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '600' }],
        'label-sm': ['0.625rem', { lineHeight: '1', letterSpacing: '0.16em', fontWeight: '600' }],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
