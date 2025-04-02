import { html } from "lit";
import reset from "./reset.css?raw";
import resetLink from "./reset.css?url";

const styleImport = `@import "${resetLink}" layer(reset);`;

export const externalImportStyleElement = html` <style>
  ${styleImport}
</style>`;

export const shared = new CSSStyleSheet();
shared.replaceSync(`@layer reset {${reset}}`);
