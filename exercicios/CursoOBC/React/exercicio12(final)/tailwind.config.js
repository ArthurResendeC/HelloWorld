/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,js,jsx,ts}'
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

