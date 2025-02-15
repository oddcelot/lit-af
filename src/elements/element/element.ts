import { MyElement } from "./element.component";

export * from "./element.component";
export default MyElement;

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
