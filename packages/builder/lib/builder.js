// #!/usr/bin/env node

const path = require("path");
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import analyze from "rollup-plugin-analyzer";
import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";

const workingDir = "../../valhalla-ui";

export default {
  input: path.resolve(__dirname, `${workingDir}/lib/index.ts`),
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
    analyze(),
    resolve(),
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
    del({
      force: true,
      targets: path.resolve(__dirname, `${workingDir}/dist/`),
    }),
  ],
};
