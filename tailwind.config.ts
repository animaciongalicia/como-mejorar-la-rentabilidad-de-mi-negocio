import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        orange: {
          DEFAULT: '#f97316',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#0d9488',
              '&:hover': {
                color: '#0f766e',
              },
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            // Tablas
            table: {
              width: '100%',
              display: 'block',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderCollapse: 'collapse',
              marginTop: '2rem',
              marginBottom: '2rem',
              fontSize: '0.875rem',
            },
            'thead th': {
              backgroundColor: '#f0fdfa',
              color: '#115e59',
              fontWeight: '600',
              padding: '0.75rem 1rem',
              borderBottom: '2px solid #5eead4',
              textAlign: 'left',
              whiteSpace: 'nowrap',
            },
            'tbody td': {
              padding: '0.625rem 1rem',
              borderBottom: '1px solid #f3f4f6',
              verticalAlign: 'top',
              color: '#374151',
            },
            'tbody tr:nth-child(even) td': {
              backgroundColor: '#f9fafb',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
