/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- ici
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
