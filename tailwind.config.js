/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyanCustom: 'rgb(0, 163, 255, 0.3)',
        cyanCustom1: 'rgb(0, 163, 255, 0.1)',
      },
    },
  },
  plugins: [],
}