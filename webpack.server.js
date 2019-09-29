const path = require("path");

module.exports = {
  // building bundle for nodeJS and not browser
  target: "node",

  // root file of our server application
  entry: "./src/index.js",

  // output bundle file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // to run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
