/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
       brightColor:"#3D30A2",
       backgroundColor: "#7071E8",
       white: "#FFF"
    },
    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

