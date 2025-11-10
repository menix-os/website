import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [starlight({
    title: "Menix - Docs",
    customCss: [
      './src/styles/global.css',
    ],
    logo: {
      src: "./src/assets/menix.svg"
    },
    social: [
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/menix-os/menix"
      }
    ],
    editLink: {
      baseUrl: "https://github.com/menix-os/website/edit/main/"
    },
    disable404Route: true
  })],
});