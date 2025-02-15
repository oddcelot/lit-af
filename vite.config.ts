import { globSync } from "node:fs";
import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";

const version = process.env.npm_package_version;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.BASE_PATH,
    test: {
      // Lit recommends using browser environment for testing
      // https://lit.dev/docs/tools/testing/#testing-in-the-browser
      browser: {
        enabled: true,
        provider: "playwright",
        instances: [{ browser: "chromium" }],
      },
    },
    build: {
      cssCodeSplit: true,
      lib: {
        entry: {
          // main: resolve(__dirname, "./src/main.ts"),
          my_element: resolve(
            __dirname,
            "./src/elements/element/element.component.ts"
          ),
        },
        formats: ["es"],
        name: "my-ui",
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // If we want to publish standalone components we don't externalize lit,
        // if you are going to use lit in your own project, you can make it a dep instead.
        // @ref: https://leonradley.com/articles/web-components/2022-02-vite-lit-storybook
        external: /^lit/,
      },

      input: Object.fromEntries(
        globSync(["src/elements/**/*.ts", "src/styles/*.css"], {
          exclude: (fileName) => {
            return fileName.includes("stories") || fileName.includes("test");
          },
        }).map((file) => {
          console.log(file);
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = relative(
            "src",
            file.slice(0, file.length - extname(file).length)
          );
          /** expanded relative paths to absolute paths */
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          console.log([entryName, entryUrl]);
          return [entryName, entryUrl];
        })
      ),

      output: {
        banner: `/*! my UI v${version} */`,
        entryFileNames: "[name].js",

        assetFileNames: ({ originalFileNames }) => {
          console.log(originalFileNames);
          const filePath = originalFileNames[0];
          console.log(filePath);

          /** put component css next to its js */
          if (filePath?.includes("/elements/")) {
            return "elements/[name]/[name][extname]";
          }
          /** move all other styles here */
          if (filePath?.includes("/styles/")) {
            return "[name][extname]";
          }
          /** move all other assets to the default location */
          return "assets/[name][extname]";
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [
      dts({
        rollupTypes: true,
        tsconfigPath: "./tsconfig.json",
        exclude: ["**/*.stories.ts", "src/test", "**/*.test.ts"],
      }),
    ],
  };
});
