// #!/usr/bin/env node

// const path = require("path");
// const webpack = require("webpack");
// const babelConfig = require("./.babelrc");

// const options = {};
// module.exports = {
//   target: ["web"],
//   externals: {
//     react: "react",
//   },
//   entry: path.resolve(__dirname, "../../valhalla-ui/lib"),
//   mode: "production",
//   output: {
//     libraryTarget: "umd",
//     path: path.resolve(__dirname, "../../valhalla-ui/dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         options: babelConfig,
//       },
//     ],
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js"],
//   },
// };

const path = require("path");
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const workingDir = "../../valhalla-ui";

export default {
  input: path.resolve(__dirname, `${workingDir}/lib/index.js`),
  external: ["react"],
  output: [
    {
      file: path.resolve(__dirname, `${workingDir}/dist/index.cjs.js`),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, `${workingDir}/dist/index.esm.js`),
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
      configFile: path.resolve(__dirname, "./.babelrc.js"),
    }),
  ],
};
