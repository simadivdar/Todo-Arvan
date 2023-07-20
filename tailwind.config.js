/** @type {import('tailwindcss').Config} */
export default{
    content:["./src/**/*.html", "./src/**/*.vue",],
     theme: {
      extend: {
        backgroundImage: {
          'bgImage': "url('./assets/image/bg-desktop-light.jpg')",
        },
        fontFamily:{
          'custom':"url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap')",
        },
      },
     },
     plugins: [],
   }