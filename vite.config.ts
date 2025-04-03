import { globSync } from "node:fs";
import { env, cwd } from "node:process";
import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

const version = env.npm_package_version;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), "");
  return {
    resolve: {
      alias: {
        "@root": resolve(__dirname, "./"),
        "@modules": resolve(__dirname, "./node_modules"),
        "@": resolve(__dirname, "./src"),
      },
    },
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
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssCodeSplit: true,
      cssMinify: "lightningcss",
      lib: {
        entry: {
          main: resolve(__dirname, "./src/main.ts"),
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
        input: Object.fromEntries(
          globSync(
            ["src/elements/**/*.ts", "src/main.ts", "src/styles/*.css"],
            {
              exclude: (fileName) => {
                return (
                  fileName.includes("stories") || fileName.includes("test")
                );
              },
            }
          ).map((file) => {
            // This remove `src/` as well as the file extension from each
            // file, so e.g. src/nested/foo.js becomes nested/foo
            const entryName = relative(
              "src",
              file.slice(0, file.length - extname(file).length)
            );
            /** expanded relative paths to absolute paths */
            const entryUrl = fileURLToPath(new URL(file, import.meta.url));
            return [entryName, entryUrl];
          })
        ),
        output: {
          banner: `/*! my UI v${version} */`,
          format: "commonjs",
          entryFileNames: "[name].js",
          assetFileNames: ({ originalFileNames }) => {
            const filePath = originalFileNames[0];

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
      },

      sourcemap: true,
      emptyOutDir: true,
    },

    plugins: [
      eslint(),
      dts({
        rollupTypes: true,
        tsconfigPath: "./tsconfig.json",
        exclude: ["**/*.stories.ts", "src/test", "**/*.test.ts"],
      }),
    ],
  };
});
