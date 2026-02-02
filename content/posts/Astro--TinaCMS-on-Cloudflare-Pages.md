---
title: Astro + TinaCMS on Cloudflare Pages
date: 2026-02-02T00:00:00.000Z
author: Nanda
tags:
  - astro
  - tinacms
  - cloudflare pages
caption: ''
---

## Project Setup

```bash
npm create astro@latest my-cms-site
cd my-cms-site
npm install contentful graphql
```

Install the Contentful JavaScript SDK:

```bash
npm install contentful
```

## Environment Configuration

Create a .env file for your CMS credentials:

```plaintext
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

![A screenshot of gitignore](/Screenshot_20260202_124421.png "Gitignore configuration")
