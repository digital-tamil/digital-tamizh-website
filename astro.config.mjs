// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://digital-tamizh.web.app",
	integrations: [
		react({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		markdoc(),
		sitemap(),
	],
	server: {
		port: 8083,
		host: true,
	},
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
