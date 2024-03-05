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
      body:["Montserrat"]
    },
    screens: {
      'mobile': '600px',
      'tablet': '800px',
      'laptop': '1000px',
      'extra_screen': '1900px',
      'laptop': '1000px'
    },
    dropShadow: {
      glow: [
        "0 0px 200px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ]
    }
  },
  plugins: [require("daisyui")],
}