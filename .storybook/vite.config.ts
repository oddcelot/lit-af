import { defineConfig, loadEnv } from "vite";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.BASE_PATH,
    assetsInclude: ["/sb-preview/runtime.js"],
    optimizeDeps: { exclude: ["/node_modules/.cache/storybook"] },
  };
});
