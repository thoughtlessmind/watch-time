/* eslint-disable */
const path = require("path");
const MiniCssExractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    assetModuleFilename: "image/[hash][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            //Change the default maxSize of 8kb for putting the img in inline to 10kb
            maxSize: 10 * 1024
          }
        }
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExractPlugin.loader,
            options: {
              //Support url depended assets in css
              publicPath: ""
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: plugins,

  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx"],
    unsafeCache: true,
    alias: {
      components: path.resolve(__dirname, "src", "components"),
      globalComponents: path.resolve(__dirname, "src", "globalComponents"),
      resources: path.resolve(__dirname, "src", "resources")
    }
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    port: 3000,
    overlay: {
      errors: true,
      warnings: true
    }
  }
}
