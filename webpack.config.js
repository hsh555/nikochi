const path = require("path");

const webpack = require('webpack');


const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/js/app.js",
    owl: "./src/js/owl.js",
    noUiSlider: "./src/js/noUiSlider.js",
    splide: "./src/js/splide.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  // optimization: {
  //   splitChunks: {
  //     // include all types of chunks
  //     chunks: 'all',
  //   },
  // },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(scss)$/,
        use: [
   
          {
            // inject CSS to page
            // loader: MiniCssExtractPlugin.loader,
            loader: "style-loader"
          },

          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       // name: "/fonts/[name].[ext]",
        //       name: '[name].[ext]',
        //       outputPath: 'fonts/',
        //       publicPath: '../fonts/'

        //     },
        //   },
        // ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       publicPath: "images",
        //       outputPath: "/images",
        //     },
        //   },
        // ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [

    // new HtmlWebpackPlugin({
    //   title: "Home",
    //   template: "src/index.html",
    //   filename: "index.html",
    //   chunks: ["index", "swiper"],
    // }),
    new HtmlWebpackPlugin({
      title: "Home",
      template: "src/home.html",
      filename: "home.html",
      chunks: ["owl", "app"],
    }),
    new HtmlWebpackPlugin({
      title: "Archive",
      template: "src/archive.html",
      filename: "archive.html",
      chunks: ["app", "noUiSlider"],
    }),
    new HtmlWebpackPlugin({
      title: "Single Page",
      template: "src/single-page.html",
      filename: "single-page.html",
      chunks: ["app", "owl", "splide"],
    }),
    new HtmlWebpackPlugin({
      title: "Cart",
      template: "src/cart.html",
      filename: "cart.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      title: "Shipping",
      template: "src/shipping.html",
      filename: "shipping.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      title: "Profile",
      template: "src/profile.html",
      filename: "profile.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      title: "Profile Edit",
      template: "src/profile-edit.html",
      filename: "profile-edit.html",
      chunks: ["app"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
};
