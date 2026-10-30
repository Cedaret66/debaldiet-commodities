/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff5e14',
          'orange-hover': '#e04e0b',
          navy: '#001659',
          'navy-hover': '#00235a',
          'navy-dark': '#0a1229',
          'navy-surface': '#12192d',
          'navy-footer': '#1d263f',
          text: '#565969',
          muted: '#8b8e99',
          light: '#f8f9fa',
          border: '#e8e8e9',
          borderDark: '#28324e',
        }
      },
      fontFamily: {
        heading: ['Yantramanav', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'widest-heavy': '0.15em',
        'title': '0.08em',
      }
    },
  },
  plugins: [],
}
