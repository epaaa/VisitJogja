/** @type {import('tailwindcss').Config} */
export default {
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
      green:"#97bb61",
      white:"#ffffff"
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
}