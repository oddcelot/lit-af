import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {
      builder: { viteConfigPath: "./.storybook/vite.config.ts" },
    },
  },
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
