import type { Meta, StoryObj } from "@storybook/web-components";
// import from "@storybook/web-components";
// import "./element";

import { MyElement } from "./button";
import { html } from "lit";

const meta: Meta = {
  component: "my-element",
  // component: MyElement,
  tags: ["autodocs"],
  argTypes: { "docs-hint": { description: "test" } },
  render: (args, ctx) => {
    console.log({ args, ctx });
    console.log([...MyElement.elementProperties]);
    return html`<my-element .count=${args.count}><h1>welcome</h1></my-element>`;
  },
};
export default meta;

// export default {
//   title: "Element",
//   parameters: {
//     layout: "centered",
//   },
//   argTypes: {
//     count: { control: "number" },
//   },
//   tags: ["autodocs"],
//   render: (args) =>
//     html`<my-element count=${args.count}><h1>welcome</h1></my-element>`,
// } as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    count: 0,
  },
};
