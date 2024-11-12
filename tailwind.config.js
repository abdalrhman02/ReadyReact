/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fColor: 'var(--f-color)',
        sColor: 'var(--s-color)',
        textColor: 'var(--text-color)',
        textSecondColor: 'var(--text-s-color)',
        backgroundColor: 'var(--background-color)',
        gradientColor: 'var(--gradient-color)',
      },
    },
  },
  plugins: [],
}