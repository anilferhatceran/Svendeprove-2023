/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'DMsans' : ['"DM Sans"']
      },
      backgroundImage:{
        'hero' : "url('src/assets/frontpageImage.jpg')"
      }
    },
  },
  plugins: [],
}
