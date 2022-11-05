/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/routes/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: { 
        "sans": ['Readex Pro',...defaultTheme.fontFamily.sans] // 'font-readex'
      },
      colors: {
        darkBrown: "#29180F",
        khaki: "#A69E56",
        lightGreen: "#DEDBC0",
        ivory: "#F5F2F2"
      }
    },
    
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: false,
    themes: [
      {
        mytheme: {
          primary: "#29180F", // darkBrown
          secondary: "#A69E56", // khaki
          accent: "#DEDBC0", // lightGreen
          neutral: "#F5F2F2", // ivory
          "base-100": "#ffffff",
          // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          // "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-text-case": "uppercase", // set default text transform for buttons
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--border-btn": "1px", // border width of buttons
          // "--tab -border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
