import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./element";

export default {
  title: "Element",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    count: { control: "number" },
  },
  render: (args) =>
    html`<my-element count=${args.count}><h1>welcome</h1></my-element>`,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    count: 0,
  },
};
