/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: {
          orange: '#F56600',
          deep: '#E85D04',
          light: '#FF8533',
          subtle: '#FFF1E6',
        },
        charcoal: {
          DEFAULT: '#191919',
          dark: '#121212',
          light: '#242424',
        },
        industrial: {
          grey: '#35383D',
          dark: '#26292D',
          light: '#4B5056',
        },
        warm: {
          bg: '#FFF7F0',
          light: '#FFFCF9',
        },
        light: {
          grey: '#F4F5F7',
          border: '#E5E7EB',
        },
        muted: {
          DEFAULT: '#666666',
          light: '#888888',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(25, 25, 25, 0.08)',
        'industrial-lg': '0 10px 30px -4px rgba(25, 25, 25, 0.12)',
        'orange-glow': '0 8px 25px -4px rgba(245, 102, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
