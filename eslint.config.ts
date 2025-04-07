// TODO: Remove `jiti` as dependency once https://github.com/eslint/eslint/issues/19357 is resolved for loading this .ts config file

import js from "@eslint/js";
import { configs } from "eslint-plugin-lit";
import unocss from "@unocss/eslint-config/flat";

import type { Linter } from "eslint";

export const eslintConfig = [
  unocss,
  {
    ...js.configs.recommended,


    plugins: [unocss, "eslint-plugin-lit"],
  },
  // {
  //   ...configs["flat/recommended"],
  //   files: ["./src/**/*.ts"],
  // },
  // {
  //   name: "eslint-plugin-lit",
  // },
  {
    rules: {
      "no-console": "warn",
    },

  },
] as Linter.Config[];

export default eslintConfig;
