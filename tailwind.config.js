/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'card-color': '#FFFFFF',
        'border-color': '#E6E6E6',
        'font-dark-color': '#212121',
        'font-error-color': '#D86161',
        'font-placeholder-color': '#7A7A7A',
        'font-white-color': '#FAFAFA',
        'primary-color': '#1597E4',
        'grey-color':'#4D4D4D'
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif"
      },
      fontSize: {
        'font-14': '14px',
        'font-16':'16px',
        'font-20': '20px',
        'font-24':'24px'
      }
    },
  },
  plugins: [],
}

