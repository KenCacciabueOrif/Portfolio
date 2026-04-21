> Last updated: 2026-04-21
> Changes: Added README maintenance metadata for the portfolio website source root.

# Portfolio Website Source

This folder contains the application source code for the portfolio website.

## Contents

- [app](app/README.md): Next.js App Router routes and global application files.
- [components](components/README.md): reusable UI and domain components.
- [config](config/README.md): shared application configuration.
- [content](content/README.md): static site data and copy.

## Code Comment Index

- [app/layout.tsx](app/layout.tsx): documents the shared application shell, default metadata setup, and why navigation stays in the root layout.
- [app/globals.css](app/globals.css): documents the global design tokens, navigation styles, panel system, and responsive behavior.
- [content/site.ts](content/site.ts): documents the site-wide data model, shared identity content, and roadmap data ownership.
- [config/seo.ts](config/seo.ts): documents the canonical URL source and shared metadata factory.

## Maintenance Steps

1. Keep route files under `app`.
2. Keep reusable UI pieces under `components`.
3. Move hard-coded site content into `content` when possible.

## Todo

- Extend the code comment index as source files receive deeper documentation updates.
