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
        'secondary': '#64FFDA',
        'back':'#0A192F'
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

