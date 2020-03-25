import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/app.jsx",
  output: {
    // sourcemap: true,
    format: "iife",
    file: "dist/app.js"
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["solid"]
    }),
    resolve({ extensions: [".js", ".jsx"] }),
    production && terser()
  ]
};
