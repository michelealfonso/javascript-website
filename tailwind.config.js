/*
/** @type {import('tailwindcss').Config} */
/*
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     colors: {
      'bg-color': 'rgba(73, 166, 233, 0.5)',
     }
    },
  },
  plugins: [],
}
