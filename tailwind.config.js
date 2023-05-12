
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 540px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      '2xl': '1450px',
      // => @media (min-width: 1450px) { ... }
    },
    fontSize: {
      sm: ['15px', '36px'],
      base: ['16px', '27px'],
      lg: ['18px', '30px'],
      xl: ['23px', '41px'],
      h1: ['43px', '60px'],
      h2: ['42px', '58px'],
      h3: ['38px', '52px'],
      h4: ['24px', '28px'],


    }
  },
  plugins: [],
};
