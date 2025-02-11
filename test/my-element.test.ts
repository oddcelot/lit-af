import { page } from "@vitest/browser/context";
import { beforeEach, describe, expect, it } from "vitest";

import "../src/my-element.js";

describe("Button with increment", async () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<my-element count="10" docs-hint="Updated Docs"></my-element>';
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
