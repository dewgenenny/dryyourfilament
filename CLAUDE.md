# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A static website about drying 3D printing filament, built with [Eleventy](https://www.11ty.dev/) (v0.11). The site lives at `dryyourfilament.com` and is deployed to GitHub Pages via the `gh-pages` branch on every push to `main`.

## Commands

```bash
npm install          # install dependencies
npm start            # serve locally with live reload (http://localhost:8080)
npx eleventy         # one-off build → ./_site/
npm run clean        # remove dist/ (note: Eleventy outputs to _site/, not dist/)
```

There are no tests or linters configured.

## Architecture

Eleventy processes the source files and writes the output to `./_site/`.

- `index.md` — the single main content page; uses `layout: base.njk`
- `_includes/base.njk` — HTML shell (Bootstrap 4 + Google Analytics); renders `{{ content | safe }}` inside `.container`
- `_includes/header.njk` / `_includes/footer.njk` — partial includes used by `base.njk`
- `_data/site.json` — global data (`name`, `description`) available as `{{ site.name }}` etc. in templates
- `_data/site.js` — exports `{ url: 'https://dryyourfilament.com' }`, available as `{{ site.url }}`
- `.eleventy.js` — config: passes through `assets/`, `CNAME`, `robots.txt`; defines a `tools` collection from `tools/**/*.md` (no `tools/` directory currently exists)
- `sitemap.njk` — generates `/sitemap.xml` from `collections.all`
- `assets/css/styles.css` — custom CSS layered on top of Bootstrap

Adding a new page: create a `.md` file with `layout: base.njk` frontmatter. To add it to the nav, place it under `tools/` so it is picked up by the `tools` collection and rendered in the Bootstrap navbar automatically.
