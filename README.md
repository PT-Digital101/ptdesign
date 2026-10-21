# Astro Blog on Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template)

![Astro Template Preview](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

<!-- dash-content-start -->

A minimal, fast blog built with [Astro](https://astro.build) and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown & MDX support
- ✅ Built-in Observability logging

<!-- dash-content-end -->

## Requirements

- [Node.js](https://nodejs.org/) **22 or newer**
- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (only needed to deploy)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the site. Changes reload automatically.

## Make it yours

Before you publish, update these placeholders:

| What                          | Where                                                |
| :---------------------------- | :--------------------------------------------------- |
| Site title and description    | [src/consts.ts](src/consts.ts)                       |
| Production URL (sitemap, canonical links) | `site` in [astro.config.mjs](astro.config.mjs) |
| Worker name                   | `name` in [wrangler.json](wrangler.json)             |
| Navigation and social links   | [src/components/Header.astro](src/components/Header.astro) |
| Footer                        | [src/components/Footer.astro](src/components/Footer.astro) |
| About page                    | [src/pages/about.astro](src/pages/about.astro)       |
| Colors, fonts and layout      | [src/styles/global.css](src/styles/global.css)       |
| Favicon and images            | [public/](public/)                                   |

Then delete the sample posts in [src/content/blog/](src/content/blog/).

## Writing posts

Each `.md` or `.mdx` file in `src/content/blog/` becomes a post at `/blog/<file-name>/`. Every post needs frontmatter like this:

```markdown
---
title: "My first real post"
description: "A one-line summary shown in listings and link previews"
pubDate: "2026-10-21"
updatedDate: "2026-10-22"     # optional
heroImage: "/my-hero.jpg"     # optional, a file in public/
---

Write your post here in Markdown.
```

The schema in [src/content.config.ts](src/content.config.ts) checks this frontmatter, so the build fails if a required field is missing or has the wrong type. Use `.mdx` when you need to use components inside a post. See [using-mdx.mdx](src/content/blog/using-mdx.mdx) for an example, and [markdown-style-guide.md](src/content/blog/markdown-style-guide.md) for how each Markdown element looks.

## Project structure

```text
├── public/                 # Static files served as-is (images, fonts, favicon)
├── src/
│   ├── components/         # Reusable Astro components (header, footer, head tags)
│   ├── content/blog/       # Blog posts (Markdown / MDX)
│   ├── layouts/            # Page layouts, e.g. BlogPost.astro
│   ├── pages/              # File-based routes: /, /about, /blog
│   ├── styles/global.css   # Site-wide styles
│   ├── consts.ts           # Site title and description
│   └── content.config.ts   # Blog collection and frontmatter schema
├── astro.config.mjs        # Astro config: site URL, integrations, Cloudflare adapter
└── wrangler.json           # Cloudflare Workers config
```

## Commands

Run these from the project root:

| Command              | Action                                                             |
| :------------------- | :----------------------------------------------------------------- |
| `npm install`        | Install dependencies                                               |
| `npm run dev`        | Start the dev server at `localhost:4321`                           |
| `npm run build`      | Build the production site to `./dist/`                             |
| `npm run preview`    | Build, then serve it with the Workers runtime at `localhost:8787`  |
| `npm run check`      | Build, type-check, and do a dry-run deploy (good before a PR)      |
| `npm run deploy`     | Deploy `./dist/` to Cloudflare (run `npm run build` first)         |
| `npm run cf-typegen` | Regenerate `worker-configuration.d.ts` after changing `wrangler.json` |
| `npm run astro ...`  | Run Astro CLI commands, e.g. `npm run astro add`                   |
| `npx wrangler tail`  | Stream live logs from your deployed Worker                         |

## Deploying to Cloudflare

1. Log in once: `npx wrangler login`
2. Build and deploy:

   ```bash
   npm run build && npm run deploy
   ```

Wrangler prints your `*.workers.dev` URL when the deploy finishes. To use your own domain, add a [custom domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) in the Cloudflare dashboard and set the same URL as `site` in `astro.config.mjs`.

You can also connect this repository to Cloudflare with [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) so each push to `main` deploys automatically.

## Learn more

- [Astro documentation](https://docs.astro.build)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro on Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)

## Credit

This theme is based on the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
