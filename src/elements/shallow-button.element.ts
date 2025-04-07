import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyles from "./button.css?raw";

const componentStyleSheet = new CSSStyleSheet();
componentStyleSheet.replaceSync(componentStyles);

export const defaultProps = {
  docsHint: "Hello there",
};

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-button")
export class MyButton extends LitElement {
  static override readonly styles = [componentStyleSheet];
  /**
   * Copy for the read the docs hint.
   */

  @property({ attribute: "docs-hint" })
  docsHint = defaultProps.docsHint;

  override render() {
    return html`
      <style></style>
      <button part="base" class="m-2">
        <p><slot /></p>
        <p>${this.docsHint}</p>
      </button>
    `;
  }
}

export default MyButton;
declare global {
  interface HTMLElementTagNameMap {
    "my-sbutton": MyButton;
  }
}
