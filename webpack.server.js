const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than the browser.
  // target: "node",
  target: "node",
  externals: [nodeExternals()],

  // root file of the server application
  entry: "./src/server.js",

  // tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
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
