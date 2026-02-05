import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#738e3f',
          dark: '#2c4211',
          light: '#b0b83e',
        },
        secondary: '#c6b398',
        accent: {
          DEFAULT: '#9d7a50',
          light: '#b0b83e',
        },
        earth: '#9d7a50',
        beige: '#c6b398',
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
