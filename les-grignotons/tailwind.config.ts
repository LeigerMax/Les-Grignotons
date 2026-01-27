import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B9F6E',
          dark: '#4A7C4D',
          light: '#A8D5AB',
        },
        secondary: '#FFF9F0',
        accent: {
          DEFAULT: '#F4B393',
          light: '#FFDDC7',
        },
        earth: '#D4A574',
        beige: '#FAF3E9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      animation: {
        'parallax': 'parallax 20s ease-in-out infinite',
      },
      keyframes: {
        parallax: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
}

export default config
