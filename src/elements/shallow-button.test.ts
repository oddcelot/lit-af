import { page } from "@vitest/browser/context";
import { beforeEach, describe, expect, it } from "vitest";

import "./button.element";
import { defaultProps } from "./button.element";

describe("Button", async () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<my-button count="10" docs-hint="Updated Docs"><h1>hello there</h1></my-button>';
  });

  it("should use default docsHint when no attribute is provided", async () => {
    document.body.innerHTML =
      "<my-button><span>Default Test</span></my-button>";
    await expect
      .element(page.getByRole("paragraph").nth(1))
      .toHaveTextContent(defaultProps.docsHint);
  });


  it("should render slotted content correctly", async () => {
    document.body.innerHTML =
      "<my-button><div>Custom Slot Content</div></my-button>";
    await expect
      .element(page.getByRole("button"))
      .toHaveTextContent("Custom Slot Content");
  });
});
