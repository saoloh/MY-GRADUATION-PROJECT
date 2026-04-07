/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-grey': '#263238',
        'energetic-teal': '#00BFA5',
      },
    },
  },
  plugins: [],
}
