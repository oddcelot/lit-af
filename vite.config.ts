import { defineConfig, loadEnv } from "vite";
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
  };
});
