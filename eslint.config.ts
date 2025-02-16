// TODO: Remove `jiti` as dependency once https://github.com/eslint/eslint/issues/19357 is resolved for loading this .ts config file

import js from "@eslint/js";
import { configs } from "eslint-plugin-lit";

import type { Linter } from "eslint";

export default [
  {
    ...js.configs.recommended,
    files: ["./src/**/*.ts"],
  },
  {
    ...configs["flat/recommended"],
    files: ["./src/**/*.ts"],
  },
  // {
  //   name: "eslint-plugin-lit",
  //   rules: ,
  // },
  {
    rules: {
      "no-console": "warn",
    },
  },
] satisfies Linter.Config[];
