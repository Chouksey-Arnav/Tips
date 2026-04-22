import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#06040e',
        'divine-gold': '#c9a227',
        'bright-gold': '#f0c940',
        parchment: '#e8dcc8',
        bone: '#d4c9a8',
        'demon-red': '#cc2200',
        'mid-purple': '#1a0a2e',
        electric: '#4fc3f7',
        silver: '#c0c0c0',
      },
    },
  },
  plugins: [],
}
export default config
