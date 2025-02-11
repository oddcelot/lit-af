import { addons } from "@storybook/manager-api";
import pentacodeTheme from "./themes/pentacode/theme";

addons.setConfig({
  theme: pentacodeTheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    fullscreen: { hidden: true },
  },
});
