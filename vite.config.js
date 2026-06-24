import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default ({ mode }) => {
  // load env from repository root (one level up) so frontend and backend can share one .env
  const root = path.resolve(__dirname, "..");
  const env = loadEnv(mode, root);

  // merge loaded root env into process.env so Vite can pick up VITE_ vars
  for (const k of Object.keys(env)) process.env[k] = env[k];

  return defineConfig({
    plugins: [react()],
  });
};