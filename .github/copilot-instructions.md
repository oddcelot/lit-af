We use lit to create custom elements with up-to-date Typescript.

Each custom element is a component. Every component (e.g. `my-example`) should have directory called `my-example` with `my-example.ts` for exporting the component as well as its dependencies like styling or other components. The component directory should also include `my-example.component.ts` for the actual component, `my-example.style.css` for styles and `my-example.test.ts` for tests.

Use JSDoc for annotating the properties of componentes, but maily use Typescript types with inference.

Out main build tool is Vite. Do not try use any webpack at all.

For testing we use Vitest alongside Playwright as testing framework for end to end tests.

For managing and showcasing our components we use storybook with the web-components-vite package.

When using styling stick to plain css and try using really good descriptive names for css custom properties.

We use pnpm as package manager.

We always write Typescript with double quotes and 2 spaces for indentation, so when your responses include Typescript or Javascript code, please follow those conventions.

Our team uses GitHub Issues for tracking items of work.

Out team uses GitHub actions for managing CI/CD pipelines for our projects.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
