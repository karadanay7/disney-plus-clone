/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
          playwrite: ["Playwrite DE Grund"],
        },
       
      },
    },
    plugins: [],
  };
  