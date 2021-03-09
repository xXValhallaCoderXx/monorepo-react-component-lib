#!/usr/bin/env node

const path = require("path");
const webpack = require("webpack");
const babelConfig = require("./.babelrc");

const options = {};
module.exports = {
  target: ["web"],
  externals: {
    react: "react",
  },
  entry: path.resolve(__dirname, "../../valhalla-ui/lib"),
  mode: "production",
  output: {
    libraryTarget: "umd",
    path: path.resolve(__dirname, "../../valhalla-ui/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelConfig,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
