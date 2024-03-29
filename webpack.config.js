const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/src/index.js",
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
    ],
  }
}