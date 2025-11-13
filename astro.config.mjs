import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://menix-os.org",
	vite: { plugins: [tailwindcss()] },
	integrations: [
		starlight({
			title: "Menix Docs",
			customCss: ["./src/styles/global.css"],
			logo: {
				src: "./src/assets/logos/logo.svg",
			},
			social: [
				{
					icon: "github",
					label: "Github",
					href: "https://github.com/menix-os/menix",
				},
			],
			editLink: {
				baseUrl: "https://github.com/menix-os/website/edit/main/",
			},
			disable404Route: true,
			components: {
				SiteTitle:
					"./src/components/starlight-overrides/SiteTitle.astro",
			},
		}),
	],
});
