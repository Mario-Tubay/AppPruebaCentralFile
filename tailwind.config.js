/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#77B1D0',
        'secondary': '#bde0fe',
        'rose': "#ffafcc",
        'rose-light': '#ffc8dd'
      },
    },
  },
  plugins: [],
}

