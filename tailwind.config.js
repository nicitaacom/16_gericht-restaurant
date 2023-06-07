/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4K': {'max': '2560px',},
        // => @media (min-width: 1px and max-width: 359px) { ... }
        
        'LaptopL': {'max': '1440px'},
        // => @media (min-width: 360px and max-width: 719px) { ... }

        'Laptop': {'max': '1024px'},
        // => @media (min-width: 720px and max-width: 1279px) { ... }
  
        'Tablet': {'max': '768px'},
        // => @media (min-width: 1280px and max-width: 1919px) { ... }
  
        'MobileL': {'max': '425px'},
        // very funny when queries for Tablet works and for it it requires +1px
        // => @media (min-width: 1920px and max-width: 2559px) { ... }
  
        'MobileM': {'max': '375px'},
        // => @media (min-width: 2560px and max-width: 3839px) { ... }
  
        'MobileS': {'max': '320px'},
        // => @media (min-width: 3840px) { ... }
      },
    },
  },
  plugins: [],
}
