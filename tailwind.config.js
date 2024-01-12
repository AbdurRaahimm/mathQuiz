/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'landing': "url('/bg-landing.jpg')",
        'footer-texture': "url('/src/assets/img/footer-texture.png')",
      },
      fontFamily: {
        'Luckiest': ['Luckiest Guy', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

