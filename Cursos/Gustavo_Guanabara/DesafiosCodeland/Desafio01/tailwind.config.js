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
        OtherGrey: 'var(--OtherGrey)',
        semiTransparent: 'var(--semiTransparent)',
        customBG: '#d6e7f6'
      },
      fontFamily: {
        primaryFont: 'var(--Font)',
        secondaryFont: 'var(--Font2)'
      }
    },
  },
  plugins: [],
}

