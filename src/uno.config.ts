import { defineConfig } from "unocss";

export default defineConfig({
  cli: {
    entry: { outFile: "src/styles/uno.css", patterns: ["src/**/*.ts"] },
  },
  rules: [
    ["m-1", { margin: "1px" }],
    ["m-2", { margin: "2px" }],
  ],
});
