import path from "path";

// See https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files for details

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write -u"],
  "*.mdx": "prettier --write -u",
};

export default lintStagedConfig;
