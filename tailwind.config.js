/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#122223',
        'blue-black': '#020204',
      },
      screens: {
        'resp': '824px',
      }
    },

  },
  plugins: [],
};
