/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "clamp(1rem, 0.7727rem + 1.1364vw, 3.5rem);",
        sm: "clamp(1.25rem, 1.75vw, 4.5rem);",
        md: "clamp(1.5rem, 1.2727rem + 1.1364vw, 4rem);",
        lg: "clamp(3.5rem, 5vw, 8.5rem);"
      },
      screens: {
        "4K": { max: "2560px" },
        // => @media (min-width: 1px and max-width: 359px) { ... }

        LaptopL: { max: "1440px" },
        // => @media (min-width: 360px and max-width: 719px) { ... }

        Laptop: { max: "1024px" },
        // => @media (min-width: 720px and max-width: 1279px) { ... }

        Tablet: { max: "768px" },
        // => @media (min-width: 1280px and max-width: 1919px) { ... }

        MobileL: { max: "425px" },
        // very funny when queries for Tablet works and for it it requires +1px
        // => @media (min-width: 1920px and max-width: 2559px) { ... }

        MobileM: { max: "375px" },
        // => @media (min-width: 2560px and max-width: 3839px) { ... }

        MobileS: { max: "320px" }
        // => @media (min-width: 3840px) { ... }
      }
    }
  },
  plugins: []
}
