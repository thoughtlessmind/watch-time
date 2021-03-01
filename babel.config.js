const plugins = []

if (process.env.SERVE) {
  plugins.push("react-refresh/babel")
}

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }]
  ],
  plugins
}

// runtime:'automatic' enables the using the jsx wihtout importing React in the file.
// https://ibb.co/jTZHbYb
