import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = import.meta.url.NODE_ENV === "production";
const baseUrl = isProd ? "/portfolio" : "";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: baseUrl,
});
