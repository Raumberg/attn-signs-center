# Attention Signs Center — Next.js 15 ⚡️

**ASC** is a fully static (GitHub Pages-friendly) portfolio & blog built with Next 15 and React 19. It mixes motion-driven UI, a Markdown blog with syntax highlighting, and slick Framer Motion effects. Fully vibed using cursor with o3 / Gemini 2.5 Pro bcs I know absolutely nothing about frontend! :)

## ✨ Features

* **Next.js App Router** – all routes live inside `src/app`.
* **Tailwind CSS v4** – painless styling.
* **Framer Motion** – smooth entrances, parallax and a magnetic cursor.
* **Video backgrounds** – the `VideoBackground` component.
* **Markdown blog** – posts sit in `content/blog/*.md`.
* **Difficulty tags** – `easy 🔥`, `medium 🔥🔥🔥`, `hard 🔥🔥🔥🔥`, `extreme 🔥🔥🔥🔥🔥` (auto-colored + emoji).
* **Code highlighting** – powered by `react-syntax-highlighter` (One Dark theme).
* **100 % static export** – perfect for GitHub Pages deployments.

## 🚀 Local Development

```bash
# install dependencies
npm i

# start the dev server at http://localhost:3000
npm run dev
```

## 🛠️ Scripts

| npm script | purpose |
|------------|---------|
| `dev`      | development mode |
| `build`    | production build (Next.js) |
| `start`    | run production server |
| `build:gh` | static export for GitHub Pages |
| `lint`     | run ESLint |

## 📦 Deploy to GitHub Pages

```bash
npm run build:gh
# produces .next/static + out/  → push to the gh-pages branch
```

## 📝 Adding a Post

1. Create a file `content/blog/my-post.md`.
2. Add front-matter:

```md
---
title: "My Brilliant Title"
date: "2025-08-16"
author: "Attention Signs"
excerpt: "Short card description"
tags: ["deep-learning", "attention", "medium"]
---

# Heading
```

3. Run `npm run dev` – the post appears instantly.

## 📄 License

MIT © Attention Signs 2025
