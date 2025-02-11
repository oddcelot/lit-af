import "@fontsource-variable/nunito";
import { create } from "@storybook/theming";

const colors = {
  primary: "white",
  primaryTransparent: "white",
  secondary: "#1D2558",
  error: "#FF5264",
  attention: "#EFD830",
  white: "#FFFFFF",
  black: "#010101",
  lightgrey: "#E7E6E6",
  grey: "#4D4D4D",
  darkgrey: "#222524",
  darkgreyAccent: "#2F3231",
} as const;

export default create({
  base: "dark",

  fontBase: '"Nunito Variable", system-ui, sans-serif',
  fontCode:
    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',

  brandTitle: "Pentacode",

  colorPrimary: colors.primary,
  colorSecondary: colors.primaryTransparent,

  appBg: "green",
  appContentBg: colors.darkgreyAccent,
  appPreviewBg: colors.white,
  appBorderColor: colors.primary,
  appBorderRadius: 10,

  barTextColor: colors.lightgrey,
  barSelectedColor: colors.primary,
  barHoverColor: colors.primaryTransparent,
  barBg: colors.darkgrey,

  textColor: colors.lightgrey,
  textInverseColor: colors.darkgrey,
  textMutedColor: colors.grey,

  booleanBg: colors.darkgrey,
  booleanSelectedBg: colors.grey,

  buttonBg: colors.darkgrey,
  buttonBorder: colors.primary,

  inputBg: colors.darkgrey,
  inputBorder: colors.lightgrey,
  inputTextColor: colors.lightgrey,
  inputBorderRadius: 10,
});
