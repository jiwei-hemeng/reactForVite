import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import externalGlobals from "rollup-plugin-external-globals";
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/", //格式一定要写对喽不然没有代码提示或者报错
    },
  },
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        externalGlobals({
          react: "React",
          "react-dom": "ReactDOM",
        }),
      ],
    },
  },
});
