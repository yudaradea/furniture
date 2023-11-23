/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "furniture-primary": "#054C73",
        "furniture-secondary": "#DFE9F4",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero-background.png')",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI Config
  daisyui: {
    themes: "light", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
