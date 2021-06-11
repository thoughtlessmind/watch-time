module.exports = {
  purge: {
    // enabled: true,
    content: ["./src/**/*.js"]
    // options: {
    //   keyframes: true
    // }
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--color-primary-main)"
        },
        secondary: {
          main: "var(--color-secondary-main)"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
