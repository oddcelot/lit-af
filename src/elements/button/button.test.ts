import { page } from "@vitest/browser/context";
import { beforeEach, describe, expect, it } from "vitest";

import "./button";
import { defaultProps } from "./button";

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

  it("should have the correct structure with base part", async () => {
    const button = document.querySelector("my-button");
    const buttonElement = button?.shadowRoot?.querySelector("button");
    expect(buttonElement?.getAttribute("part")).toBe("base");
  });

  it("should have the m-2 class for styling", async () => {
    const button = document.querySelector("my-button");
    const buttonElement = button?.shadowRoot?.querySelector("button");
    expect(buttonElement?.classList.contains("m-2")).toBe(true);
  });

  it("should render slotted content correctly", async () => {
    document.body.innerHTML =
      "<my-button><div>Custom Slot Content</div></my-button>";
    await expect
      .element(page.getByRole("button"))
      .toHaveTextContent("Custom Slot Content");
  });
});
