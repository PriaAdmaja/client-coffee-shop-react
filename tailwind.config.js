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
        'bgAuth': "url('/src/assets/images/foot-on-table.webp')",
        'bgForgot': "url('/src/assets/images/four coffee.webp')",
        'bgHistory': "url('/src/assets/images/vietnam-press.webp')",
        'bgProfile': "url('/src/assets/images/biji kopi.webp')",
        'bgHero': "url('/src/assets/images/3 cup of coffee.webp')",
        'bgCheckout': "url('/src/assets/images/pour coffee.webp')"
      },
    },
  },
  plugins: [],
}
