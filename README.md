# Nearness

A minimal bilingual personal journal built with Astro and Markdown.

## Write a new entry

Create a Markdown file in `src/content/posts/` using a date and slug, for example:

```text
2026-06-14-near-the-void.md
```

Every published file is automatically included on the homepage, archive, category page, and tag pages. Use this frontmatter:

```yaml
---
title: "Post title"
date: 2026-06-14
category: journal
language: en
direction: ltr
tags: [memory, computers]
excerpt: "A short preview."
draft: false
---
```

Allowed categories are `journal`, `poetry`, `prose`, `books`, `code`, `computers`, `ai`, `memory`, and `fragments`.

Urdu posts use `language: ur` and `direction: rtl`. In mixed posts, wrap language-specific passages in `<div class="urdu">` or `<div class="english">`.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` to produce the static site in `dist/`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a new Markdown entry. The included workflow builds and deploys it automatically.

The Astro configuration detects project repositories and sets the correct GitHub Pages base path. For a custom domain, set `SITE_URL` and `BASE_PATH` in the workflow or repository environment.
