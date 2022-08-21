const { FaFilePowerpoint } = require('react-icons/fa');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
  ,
  theme: {
    extend: {
      fontFamily:{
        'inder':['Inder','sans-serif'],
        'montserrat':['Montserrat','sans-serif'],
        'courgette':['Courgette','sans-serif']
      }
    },
  },
  plugins: [],
}
