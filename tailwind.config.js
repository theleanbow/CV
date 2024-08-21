/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
       'serif': ['Times New Roman', 'serif'],
    },
    }, fontSize: {
      base: '12px',    // Default font size
     '4xl': '2.5rem'
           
    },
  },
  plugins: [],
}