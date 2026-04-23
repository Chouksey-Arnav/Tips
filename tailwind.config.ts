import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:         '#04030a',
        abyss:        '#06040e',
        'deep-purple':'#0d0820',
        'mid-purple': '#170b30',
        'divine-gold':'#c9a227',
        'bright-gold':'#f0c940',
        'pale-gold':  '#e8d5a0',
        parchment:    '#e8dcc8',
        bone:         '#d4c9a8',
        ash:          '#a09070',
        'demon-red':  '#cc2200',
        blood:        '#8a1500',
        ember:        '#ff6622',
        'silver-blue':'#a8c4d4',
        electric:     '#4fc3f7',
        silver:       '#c0c0c0',
      },
      fontFamily: {
        cinzel:  ['Cinzel Decorative', 'serif'],
        heading: ['Cinzel', 'serif'],
        body:    ['Cormorant Garamond', 'serif'],
        fell:    ['IM Fell English', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
