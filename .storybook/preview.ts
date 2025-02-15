import { setCustomElementsManifest } from "@storybook/web-components";
import type { Preview } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import "@fontsource-variable/nunito";
import "../src/index.css";

setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ["autodocs"],
  },
};

export default preview;
