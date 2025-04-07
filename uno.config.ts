import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    ["m-1", { margin: "1px" }],
    ["m-2", { margin: "2px" }],
  ],
  content: {
    pipeline: {
      include: [/\.(mdx?|html)($|\?)/, "src/**/*.{js,ts}"],
    },
  },
});
