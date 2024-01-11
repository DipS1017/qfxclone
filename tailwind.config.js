/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./qfx/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'qfxgray':'#414042',
        'qfxgray1':'#1D1B20',
        'qfxbtn':'#01AAD2',
        'qfxbg':'#ECF1F3',
      },
    },
  },
  plugins: [],
}

