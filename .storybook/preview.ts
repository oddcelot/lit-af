import type { Preview } from "@storybook/web-components";
import "@fontsource-variable/nunito";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // use this to attatch anything to the preview
};

export default preview;
