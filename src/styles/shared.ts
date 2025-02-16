import { html } from "lit";
import reset from "./reset.css?raw";
import resetLink from "./reset.css?url";
export const externalImportStyleElement = html`<style>
  @import "${resetLink}" layer(reset);
</style>`;

export const shared = new CSSStyleSheet();
shared.replaceSync(`@layer reset {${reset}}`);
