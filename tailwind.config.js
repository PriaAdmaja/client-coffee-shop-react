/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
   
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        primary: '#FFBA33',
        secondary: '#6A4029',
        bgPrimary: '#ffffff',
        bgSecondary: '#EEEFF2',
        txtPrimary: '#4F5665',
        txtSecondary: '#0B132A',
        bgModal: 'rgba(0,0,0,0.4)'
      },
      fontFamily: {
        rubik: 'Rubik, sans-serif',
        poppins: 'Poppins, sans-serif'
      },
      backgroundImage: {
        'bgAuth': "url('/src/assets/foot-on-table.webp')"
      },
    },
  },
  plugins: [],
}
