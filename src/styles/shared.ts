import { html } from "lit";

import resetLink from "./reset.css?url";
import unoLink from "./uno.css?url";
import reset from "./reset.css?raw";
import uno from "./uno.css?raw";

const styleImport = /*css*/`
@import "${resetLink}" layer(meh);
@import "${unoLink}" layer(uno);
`;

export const externalImportStyleElement = html`<style>
  ${styleImport}
</style>`;

export const shared = new CSSStyleSheet();
shared.replaceSync(`@layer reset {${reset}} ${uno}`);
