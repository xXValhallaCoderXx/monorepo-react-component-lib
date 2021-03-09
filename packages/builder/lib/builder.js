// #!/usr/bin/env node

const path = require("path");
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import analyze from "rollup-plugin-analyzer";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
const cjs = require("rollup-plugin-commonjs");
import { nodeResolve } from "@rollup/plugin-node-resolve";
import purgecss from "rollup-plugin-purgecss";
import { uglify } from "rollup-plugin-uglify";

const workingDir = "../../core";

export default {
  input: path.resolve(__dirname, `${workingDir}/lib/index.ts`),
  external: ["react", "classnames"],
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
    nodeResolve({
      moduleDirectories: [path.resolve(__dirname, "../../../node_modules/")],
    }),
    analyze(),
    resolve(),
    purgecss({
      content: [path.resolve(__dirname, `${workingDir}/lib/index.ts`)],
      css: [path.resolve(__dirname, `${workingDir}/lib/styles/index.scss`)],
    }),
    babel({
      babelHelpers: "bundled",
      configFile: path.resolve(__dirname, "./.babelrc.js"),
    }),
    typescript({
      tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      tsconfigOverride: {
        include: [path.resolve(__dirname, `${workingDir}/lib/*`)],
      },
    }),
    postcss({
      minimize: true,
      extract: true,
      extract: path.resolve(__dirname, `${workingDir}/dist/index.css`),
      plugins: [],
    }),
    cjs({
      // include: [path.resolve(__dirname, "../../../node_modules/**")],
      namedExports: {
        "node_modules/classnames/**": ["classNames"],
      },
    }),
    uglify(),
  ],
};
