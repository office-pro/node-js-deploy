// const path = require("path");
// const webpack = require("webpack");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// module.exports = {
//   entry: {
//     main: './index.js'
//   },
//   mode: 'development',
//   output: {
//     path: path.resolve(__dirname,'dist'),
//     publicPath: "/",
//     filename: "[name].js",
//     clean: true
//   },
//   target: 'node',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       }
//     ]
//   }
// }