module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lg': '1560px',
      'tablet': '1920px',
      // => @media (min-width: 1440px) { ... }
      // => @media (min-width: 640px) { ... }
    },

    extend: {
      fontFamily: {
        junkdog: ["junkdog", "sans-serif"],
      },
      backgroundImage: {
        background: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602933/icons/grietamain.png')",
        secondbackground: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602925/icons/backgroundtile.png')",
        thirdbackground:"url('https://res.cloudinary.com/bloodholders/image/upload/v1640602924/icons/thirdbackground.png')",
        hover: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602930/icons/bloodhover.svg')",
        team: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602929/icons/backgroundTeam.svg')",
        concept:"url('https://res.cloudinary.com/bloodholders/image/upload/v1640602923/icons/concepttop.png')",
        hamburguer: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602933/icons/hoverHamburguer.svg')",
        teambackground: "url('https://res.cloudinary.com/bloodholders/image/upload/v1640602929/icons/backgroundTeam.svg')",
        coinbackground:"url('https://res.cloudinary.com/bloodholders/image/upload/v1640602933/icons/grietamain_moneda.png')"
      },
      colors: {
        blood: "#E20613",
      },
    },
  },
  images: {
    domains: ["preview.redd.it"],
    formats: ["image/avif", "image/webp"],
  },
  variants: {
    extend: {},
    fill: ["hover", "focus"],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')],
};
