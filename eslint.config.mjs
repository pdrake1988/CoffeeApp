import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    ignores: ["dist/**/*", "src/nav/types.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
