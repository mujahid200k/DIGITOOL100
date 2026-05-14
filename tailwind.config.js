/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7C3AED",
          light: "#F5F3FF",
        }
      }
    },
  },
  plugins: [],
}


