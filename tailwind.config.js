/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BBBBCB',
        'secondary':'#1C1E53'
      },
      fontFamily: {
        'pop': ["Poppins"],
        
      },
      maxWidth: {
        'container': '1140px',
      },
    },
  },
  plugins: [],
}

