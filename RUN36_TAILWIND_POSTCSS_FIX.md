# IIFLHM Run 36 — Tailwind/PostCSS production-build repair

## Root cause

The uploaded project resolved Tailwind CSS 4.3.5 while `postcss.config.mjs` still registered `tailwindcss` as a PostCSS plugin. The stylesheet also used Tailwind v3 directives and the old JavaScript config loaded daisyUI 4, which is not the supported daisyUI integration for Tailwind v4.

## Changes

- Registered `@tailwindcss/postcss` as the PostCSS plugin.
- Migrated `src/app/globals.css` to `@import "tailwindcss"` and CSS-first plugin registration.
- Updated daisyUI to the v5 dependency line and registered its `institute` theme in CSS.
- Updated the Typography plugin dependency and CSS registration.
- Moved the existing brand palette and gradient utilities into Tailwind v4 `@theme` tokens.
- Removed the obsolete Tailwind v3 JavaScript config to prevent its daisyUI v4 plugin from being loaded.
- Preserved the existing application component markup and design tokens.

## Required lockfile refresh

The build environment used to prepare this patch could not reach the npm registry (the package-lock-only install timed out). Therefore `package.json` is updated, but `package-lock.json` has deliberately not been hand-edited or supplied with invented integrity hashes. Before deploying, run from the project root in a network-enabled environment:

```bash
npm install
npm run audit:i18n
npm run typecheck:i18n
npm run audit:tooling
npm run lint
npx tsc --noEmit
npm run build
```

Commit the regenerated `package-lock.json` together with the source changes. If the hosting platform uses `npm ci`, this lockfile refresh is mandatory.

## Build cache warning

The `No build cache found` message is informational and is not the cause of this failure. Configure Netlify's Next.js build cache separately if desired; it does not fix PostCSS plugin errors.

## Verification limitation

Static source checks can verify the migration declarations, but the full CSS compilation and production build must be run after the dependencies and lockfile have been installed in a network-enabled environment. No deployment was performed.
