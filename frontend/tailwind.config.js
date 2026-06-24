/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        cardBg: '#1E1E1E',
        accentRed: '#E63946',
        neutralWhite: '#F1FAEE',
      },
    },
  },
  plugins: [],
}