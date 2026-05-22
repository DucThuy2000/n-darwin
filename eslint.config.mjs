import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  prettier,

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error", // enforces sorted imports
      "simple-import-sort/exports": "error", // enforces sorted exports
    },
  },
];

export default eslintConfig;
