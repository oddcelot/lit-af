import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "@/assets/lit.svg";
import viteLogo from "@/assets/vite.svg";
import componentStyles from "./element.css?raw";
import { externalImportStyleElement } from "@/styles/shared";
import { Uno } from "../util-mixin";

const componentStyleSheet = new CSSStyleSheet();
componentStyleSheet.replaceSync(componentStyles);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends Uno(LitElement) {
  static override readonly styles = [
    componentStyleSheet,

  ];
  // static override readonly styles = [shared, componentStyleSheet];
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
      ${externalImportStyleElement}
      <div class="m-2">
        <a href="https://vite.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  private _onClick() {
    this.count++;
    console.log(this.count);
  }
}

export default MyElement;
declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
