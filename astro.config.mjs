// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// Old WordPress case-study URLs → new /projects/ pages, so existing links and rankings keep working.
const oldProjectSlugs = [
	"relax-moment",
	"woodever",
	"rassapoom-clinic",
	"berrydent",
	"foxconnect",
	"factory-builder",
	"inception-idea",
	"120-wellness-villa",
	"zincia-clinic",
	"boxbox",
	"thaiclinic-co",
	"thailandtravelmap",
];
const redirects = Object.fromEntries(oldProjectSlugs.map((s) => [`/${s}`, `/projects/${s}/`]));
redirects["/project-title"] = "/projects/meikswe-myanmar/";

// https://astro.build/config
export default defineConfig({
	site: "https://ptdesign.me",
	integrations: [mdx(), sitemap()],
	redirects,
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
