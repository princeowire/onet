/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F8F8F8",
        "btn-color": "#1D192B",
        "dark-gray": "#E2E2E2",
        "text-gray": "#79747E",
        "dart-bg": "#21005D",
        "carosel-gray": "#ADADADB2",
        "ft-one": "#191919",
        "ft-two": "#313131FC",
        "faq-text": "#49454F",
        "rocket-bg": "#FCF7FF",
        "border": "#CCC2DC",
        "purple-text": "#4A0063"
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}