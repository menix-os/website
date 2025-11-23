---
layout: ../../layouts/BlogPostLayout.astro
title: "A new Website"
date: 2025-07-01
lastEdited: null
author: "PotatoMaaan"
---

Menix now has a new website! It's made up entirely of static assets and doesn't ship any javascript to the client. It's currently hosted by Github Pages.

## Tech Stack

- The main framework is [Astro](https://astro.build/)
- [Starlight](https://starlight.astro.build/) for the handbook pages
- [Tailwind](https://tailwindcss.com/) for styling
- [Astro's RSS plugin](https://www.npmjs.com/package/@astrojs/rss) to easily set up our [RSS feed](https://menix-os.org/rss.xml).

As one would expect, this allows us to hit great lighthouse scores :D

![screenshot of good lighthouse scores](../../assets/images/lighthouse-scores.png)

You can find the code [on our Github](https://github.com/menix-os/website).
