/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body, 'Inter')", 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Titres en serif fin, personnalisable via --font-display (aspect luxueux).
        display: ["var(--font-display, 'Cormorant Garamond')", 'Didot', 'Bodoni MT', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        // Gris chauds (papier / encre) : on réutilise l'échelle « slate » de
        // toute l'app, mais teintée chaude façon papeterie de luxe.
        slate: {
          50: '#faf8f3',
          100: '#f2efe7',
          200: '#e7e1d5',
          300: '#d4ccbd',
          400: '#a9a190',
          500: '#7c7566',
          600: '#57514a',
          700: '#423d36',
          800: '#29251f',
          900: '#1b1813',
          950: '#12100b',
        },
        // Accent de marque « violet » remplacé par un or/champagne : toute la
        // chrome (en-tête, boutons génériques, puces, liens) devient dorée sans
        // toucher les couleurs propres à chaque matière (hex inline).
        violet: {
          50: '#faf6ec',
          100: '#f4ead1',
          200: '#e8d5a4',
          300: '#d9bd77',
          400: '#c8a24e',
          500: '#b6912f',
          600: '#98761f',
          700: '#7c5f1f',
          800: '#614a1c',
          900: '#493819',
          950: '#2a2010',
        },
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-1px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-4px)' },
          '40%, 60%': { transform: 'translateX(4px)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pop-in': 'pop-in .25s ease-out both',
        'slide-up': 'slide-up .35s ease-out both',
        shake: 'shake .5s',
        'bounce-in': 'bounce-in .5s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
