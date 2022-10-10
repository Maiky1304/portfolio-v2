/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Reem Kufi Ink", "sans-serif"],
        sans: ["Reem Kufi Fun", "sans-serif"],
        mono: ['Noto Sans Mono', "monospace"]
      },
      colors: {
        'dark': {  DEFAULT: '#191919',  '50': '#757575',  '100': '#6B6B6B',  '200': '#565656',  '300': '#424242',  '400': '#2D2D2D',  '500': '#191919',  '600': '#000000',  '700': '#000000',  '800': '#000000',  '900': '#000000'},
        "dark-text": "#888",
        'primary': {  DEFAULT: '#68E1FD',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#E1F9FF',  '300': '#B9F1FE',  '400': '#90E9FE',  '500': '#68E1FD',  '600': '#31D6FC',  '700': '#03C5F2',  '800': '#0298BA',  '900': '#026B83'},
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2.5rem",
        md: "3rem",
        lg: "3.5rem",
        xl: "5rem"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}