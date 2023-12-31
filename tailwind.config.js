// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
        colors: {
          pry: "#3F51B5",
        },
        transitionProperty: {
          oneTransition: 'max-height ',
          twoTransition: "0.3s",
          threeTransition: 'ease-in'
        }
      },
      screens: {
        'phone' : {'max':'480px'},
        'tb' : '1024px',
        'dk' : '1280px',
        'smallPhone': '351px'
      },
      
  },
  plugins: [],
};
