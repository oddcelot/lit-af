/* playground-fold */
import { LitElement, css } from "lit";

type Constructor<T> = new (...args: any[]) => T;

export declare class UnoInterface {}

export const Uno = <T extends Constructor<LitElement>>(superClass: T) => {
  class UnoElement extends superClass {
    // Adds some styles...
    static styles =

      css`
        * {
          font-size: 100px !important;
          color: red !important;
        }
        @unocss-placeholder;
      `;
  }
  return UnoElement as Constructor<UnoInterface> & T;
};
