/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'XS': {'min': '1px', 'max': '359px'},
        // => @media (min-width: 1px and max-width: 359px) { ... }
        
        'SM': {'min': '360px', 'max': '719px'},
        // => @media (min-width: 360px and max-width: 719px) { ... }

        'SD': {'min': '720px', 'max': '1279px'},
        // => @media (min-width: 720px and max-width: 1279px) { ... }
  
        'HD': {'min': '1280px', 'max': '1919px'},
        // => @media (min-width: 1280px and max-width: 1919px) { ... }
  
        'FHD': {'min': '1920px', 'max': '2559px'},
        // => @media (min-width: 1920px and max-width: 2559px) { ... }
  
        'QHD': {'min': '2560px', 'max': '3839px'},
        // => @media (min-width: 2560px and max-width: 3839px) { ... }
  
        '4K': {'min': '3840px'},
        // => @media (min-width: 3840px) { ... }
      },
    },
  },
  plugins: [],
}
