/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'noto': ['Noto Sans TC', 'sans-serif'],
      },
      colors: {
        // 主色調
        primary: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E5E5E5',
          300: '#D1D1D1',
          400: '#B0B0B0',
          500: '#8A8A8A',
          600: '#6D6D6D',
          700: '#4A4A4A',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        // 輔助色
        accent: {
          orange: '#FF7043',
          blue: '#3E8EDE',
          wood: '#8B4513',
        },
        // 工業風色調
        industrial: {
          concrete: '#B0B0B0',
          steel: '#4A4A4A',
          warm: '#F2F2F2',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
} 