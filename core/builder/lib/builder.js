#!/usr/bin/env node

const path = require("path");
const webpack = require("webpack");
const babelConfig = require("./.babelrc");

const options = {};
webpack(
  {
    target: "node",
    externals: {
      react: "react",
    },
    entry: {
      atoms: path.resolve(__dirname, "../../../ui-atoms"),
      molecules: path.resolve(__dirname, "../../../ui-molecules"),
    },
    mode: "production",
    output: {
      //   filename: `${fileName}.cjs.js`,
      libraryTarget: "commonjs2",
      path: path.resolve(__dirname, "../../../dist"),
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
  },
  (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true, // Shows colors in the console
      })
    );
  }
);
