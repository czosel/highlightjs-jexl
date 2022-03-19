import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
      {
        file: 'dist/highlightjs-jexl.min.js',
        format: 'iife',
        name: "hljsDefineJexl",
        interop: "default",
        plugins: [terser()],
      },
    ],
};
