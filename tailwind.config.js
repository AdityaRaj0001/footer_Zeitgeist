/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      text: ["Grenze Gotisch", "cursive"],
    },
    extend: {
      colors: {
        'custom-yellow':'#723E30',
        'light':'#E6D6B5',
        'dark-extra':'#B2805C',
        'lighter':'#F8F2D8',
      }
    },
  },
  plugins: [],
}

