module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js"],
    options: {
      keyframes: true
    }
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
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
