---
title: Building and development
---

`nodejs` and `npm` are required for this build.

Clone and enter the reposity

```bash
git clone https://github.com/menix-os/website
cd website
```

Next, install depencies

```bash
npm install
```

## Production bundle

```bash
npm run build
```

The files will be placed in the `dist` directory. These files can be served by a static file server.

## Dev server

```bash
npm run dev
```

Runs on `http://localhost:4321` by default

# Available commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Installs dependencies                       |
| `npm run dev`          | Starts local dev server at `localhost:4321` |
| `npm run build`        | Build production site to `./dist/`          |
| `npm run preview`      | Preview build locally, before deploying     |
| `npm run format`       | Formats all files                           |
| `npm run format:check` | Checks if all files are formatted           |
