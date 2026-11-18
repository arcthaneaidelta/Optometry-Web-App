/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F6F2',
        stone: {
          soft: '#EFEEE8',
          border: '#E4E2DA',
        },
        charcoal: {
          DEFAULT: '#252B27',
          deep: '#1A1F1C',
        },
        olive: {
          DEFAULT: '#74786F',
          light: '#8E9289',
        },
        forest: {
          DEFAULT: '#52665B',
          dark: '#26332D',
          deeper: '#1C2621',
          light: '#657B6F',
        },
        sage: {
          DEFAULT: '#A9B6A5',
          light: '#C7D1C4',
          subtle: '#E8ECE6',
        },
        sand: {
          DEFAULT: '#B8A18A',
          light: '#D3C4B3',
          subtle: '#F2EDE7',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.04em',
        widest: '0.12em',
      },
      lineHeight: {
        editorial: '1.15',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
