# Menix Website

Hosted at https://menix-os.org

# Building

`nodejs` and `npm` is required for this build.

First install depencies

```bash
npm install
```

## Production bundle

```bash
npm run build
```

The files will be in the `dist` directory

## Dev server

```bash
npm run dev
```

# Available commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
