import { page } from "@vitest/browser/context";
import { beforeEach, describe, expect, it } from "vitest";

import "./button";

describe("Button with increment", async () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<my-element count="10" docs-hint="Updated Docs"><h1>hello there</h1></my-element>';
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("11");
  });

  it("should show name props", async () => {
    await expect
      .element(page.getByRole("paragraph"))
      .toHaveTextContent("Updated Doc");
  });
});
