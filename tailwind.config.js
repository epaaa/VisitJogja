/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      cream:"#fdf5ea",
      yellow:"#eec456",
      brown:"#3F3B38",
      green:"#97bb61"
    },
    fontFamily:{
      body:["Poppins"]
    },
    screens: {
      'mobile': '600px',
      'tablet': '800px',
      'laptop': '1000px'
    }
  },
  plugins: [require("daisyui")],
})