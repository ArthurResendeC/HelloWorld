/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        Blue: 'var(--Blue)',
        Green: 'var(--Green)',
        Yellow: 'var(--Yellow)',
        Red: 'var(--Red)',
        Grey: 'var(--Grey)',
      },
      fontFamily: {
        primaryFont: 'var(--Font)'
      }
    },
  },
  plugins: [],
}

