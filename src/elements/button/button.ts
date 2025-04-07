import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyles from "./button.css?raw";
import { externalImportStyleElement } from "@/styles/shared";

const componentStyleSheet = new CSSStyleSheet();
componentStyleSheet.replaceSync(componentStyles);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-button")
export class MyButton extends LitElement {
  static override readonly styles = [
    css`
      @unocss-placeholder;
    `,
    componentStyleSheet,
  ];
  /**
   * Copy for the read the docs hint.
   */
  @property({ attribute: "docs-hint" })
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ attribute: false })
  count = 0;

  override render() {
    return html`
      <!-- ${externalImportStyleElement} -->
      <button part="base" class="m-2"><slot /></button>
    `;
  }

  // protected override createRenderRoot() {
  //   return this;
  // }
}

export default MyButton;
declare global {
  interface HTMLElementTagNameMap {
    "my-button": MyButton;
  }
}
