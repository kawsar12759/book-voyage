/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(19, 19, 19, 0.05)',
        'custom-green': 'rgba(35, 190, 10, 0.05)',
        'custom-black': 'rgba(19, 19, 19, 0.8)',
        'hr-color': 'rgba(19, 19, 19, 0.15)',
        'black60':'rgba(19, 19, 19, 0.6)',
        'category-background': 'rgba(50, 142, 255, 0.15)',
        'rating-background':'rgba(255, 172, 51, 0.15)',
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

