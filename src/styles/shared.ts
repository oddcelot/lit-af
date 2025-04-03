import { html } from "lit";
import reset from "./reset.css?raw";
import resetLink from "./reset.css?url";
import unoLink from "./uno.css?url";
const styleImport = `@import "${resetLink}" layer(meh); @import "${unoLink}" layer(uno);`;

export const externalImportStyleElement = html`<style>
  ${styleImport}
</style>`;

export const shared = new CSSStyleSheet();
shared.replaceSync(`@layer reset {${reset}}`);
