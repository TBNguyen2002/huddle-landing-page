/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        veryPaleCyan: "hsl(193, 100%, 96%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        desktopbackgroundImage: "url('..images/bg-hero-desktop.svg')",
        mobilebackgroundImage: "url('..images/bg-hero-mobile.svg')",
      },
    },
  },
  plugins: [],
};
