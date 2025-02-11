// import { LitElement, css, html } from "lit";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "../assets/lit.svg";
import viteLogo from "/vite.svg";
import componentStyles from "./element.style.css?raw";

const sheet = new CSSStyleSheet();
sheet.replaceSync(componentStyles);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property({ attribute: "docs-hint" })
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <!-- <style>
        ${componentStyles}
      </style> -->
      <div>
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
  }

  static override readonly styles = sheet;

  // static override readonly styles = css`
  //   :host {
  //     display: block;
  //     padding: 1rem;
  //     background: var(--my-element-text-color, black);
  //   }
  //   ${componentStyles}
  // `;
}
