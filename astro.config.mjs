// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";

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
		defaultStrategy: "viewport",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
	experimental: {
		clientPrerender: true,
		svgOptimizer: svgoOptimizer(),
	},
	redirects: {
		"/instagram": "https://www.instagram.com/tamil.ai.llm",
		"/insta": "https://www.instagram.com/tamil.ai.llm",
		"/youtube": "https://www.youtube.com/@tamizh-ai",
	},
});
