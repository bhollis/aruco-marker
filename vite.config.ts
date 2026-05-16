/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase());
  } catch {
    throw new Error("Name property in package.json is missing.");
  }
};

export default defineConfig({
  base: "./",
  plugins: [
    dts(),
  ],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "src/aruco-marker.ts"),
        path.resolve(__dirname, "src/element.ts"),
      ],
      name: getPackageNameCamelCase(),
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
