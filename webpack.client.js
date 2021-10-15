const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
//   externals: [nodeExternals()],

  // root file of the server application
  entry: "./src/client.js",

  // tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  // run babel to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
