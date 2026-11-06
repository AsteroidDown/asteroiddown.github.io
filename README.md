# Jasper Stahmer's portfolio

A React and Next.js App Router site using the published `@locus-ui/components` package for layout, typography, theming, badges, and buttons. The site is exported as static files for the existing GitHub Pages setup.

## Develop

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit `src/data/portfolio.ts` to update work experience, project descriptions, and contact links. The home page composes the sections directly in `src/app/page.tsx`. Each component has its own folder containing its `.tsx` file and, when needed, a matching `.module.css` file. For example, `src/components/header/` contains `header.tsx` and `header.module.css`. The section components, footer, cards, and project visuals follow the same structure. Shared section typography lives in `src/components/shared/section.module.css`. `src/app/globals.css` contains the stylesheet imports, document defaults, accessibility rules, and reduced-motion preferences. Use Locus UI props for supported layout, spacing, typography, and control variants. Use Tailwind utilities for remaining layout, sizing, and alignment; keep CSS modules for the site’s artwork, animations, and visual details. Tailwind is configured through `postcss.config.mjs` and imported in `globals.css` without Preflight to preserve the document defaults. Locus UI styles are in the `components` cascade layer so Tailwind utilities can override them when needed. Responsive layouts align at 768px and 1024px: Locus UI calls these `sm` and `md`, while Tailwind calls them `md` and `lg`.

## Verify and build

```sh
npm run typecheck
npm run build
npm run preview
```

`npm run build` generates the Next.js static export in `out/`. This directory is ignored by Git and is uploaded directly to GitHub Pages during deployment. `npm run preview` serves the exported site at http://localhost:3000.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` installs dependencies, builds the static site, and deploys `out/` on every push to `master`. It can also be run manually from the repository’s Actions tab. No generated files need to be committed, and no redirect page or Node.js server is needed in production.

One-time setup when pushing this migration:

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** instead of deploying from a branch and `/docs`.
3. Push the source changes to `master`, or run **Deploy portfolio to GitHub Pages** manually after the workflow has been pushed.

The workflow uses GitHub’s built-in token; no personal access token or additional secret is required. Deployment uses the `github-pages` environment and respects its existing protection rules. The site stays at `https://asteroiddown.github.io/`.

This repository is a root user site, so assets and links use `/` without a repository base path. Keep `output: "export"` in `next.config.ts`; GitHub Pages hosts the generated static files.

## Locus UI

The library and its stylesheet are imported from npm, so a separate checkout is not required to install or deploy this site. The root layout defines the palette through Locus UI’s `Theme.colors`: backgrounds, text, muted text, borders, and blue, purple, and orange accents. Components use the resulting `--bg-1`, `--bg-2`, `--text`, `--text-light`, `--border-1`, `--primary`, `--secondary`, and `--tertiary` variables wrapped in `rgb()` (or `rgba()` for translucent artwork). Project visuals are decorative CSS illustrations, with subtle motion that respects reduced-motion preferences. Each project name is paired with its logo from the project’s source repository. The browser tab uses a `js.` monogram in `public/favicon.svg` matching the site header.
