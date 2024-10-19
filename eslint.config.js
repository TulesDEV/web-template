import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true, // Support filenames like babel.config.js or smoke.spec.ts
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!(__tests__)": "KEBAB_CASE", // Enforce kebab-case for folders within src (except __tests__)
        },
      ],
    },
  },
];
