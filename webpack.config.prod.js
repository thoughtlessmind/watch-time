/* eslint-disable */
const path = require("path")
const dotenv = require("dotenv")
const Dotenv = require("dotenv-webpack")
const webpack = require("webpack")
const MiniCssExractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob")

const PATHS = {
  src: path.join(__dirname, "src")
}
const env = dotenv.config().parsed

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin

let mode = "production"
let target = "browserslist"

const envKeys = env
  ? Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next])
      return prev
    }, {})
  : {}

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExractPlugin(),
  new PurgecssPlugin({
    paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    safelist: {
      deep: [/swiper/]
    }
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new CopyPlugin({
    patterns: [{ from: "./src/_redirects", to: "" }]
  }),
  new Dotenv({ systemvars: true }),
  new webpack.DefinePlugin(envKeys)
  // new BundleAnalyzerPlugin()
]

module.exports = {
  mode: mode,
  target: target,
  entry: ["regenerator-runtime/runtime", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist/"),
    assetModuleFilename: "image/[hash][ext][query]",
    publicPath: "/"
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

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: (module) =>
            `vendor.${
              module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            }`
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },

  stats: {
    // Examine all modules
    moduleAssets: true,
    // Display bailout reasons
    optimizationBailout: true
  },

  devtool: "source-map"
}
