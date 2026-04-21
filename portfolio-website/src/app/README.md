> Last updated: 2026-04-21
> Changes: Documented that the home page now highlights proof-backed past projects before the active roadmap.

# Portfolio Website App Router

This folder stores the Next.js App Router structure and the root application files.

## Contents

- `layout.tsx`: root layout
- `page.tsx`: home page
- `globals.css`: global styles
- `robots.ts` and `sitemap.ts`: metadata routes
- [a-propos](a-propos/README.md): about page
- [contact](contact/README.md): contact page
- [projets](projets/README.md): projects page

## Code Comment Index

- [layout.tsx](layout.tsx): documents the shared shell, default metadata flow, and layout-level navigation decisions.
- [page.tsx](page.tsx): documents the landing page structure, the proof-backed past-project section, the roadmap recap, and centralized contact links.
- [globals.css](globals.css): documents the token system, navigation behavior, section styling, and breakpoint rules.
- [robots.ts](robots.ts): documents how the robots metadata route is generated.
- [sitemap.ts](sitemap.ts): documents sitemap generation and crawl frequency choices.

## Maintenance Steps

1. Keep route-specific pages in dedicated subfolders.
2. Keep app-wide files at this level.

## Todo

- Add an index of important route-specific comments when those files are updated.
