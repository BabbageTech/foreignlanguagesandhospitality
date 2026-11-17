# Localization / build reliability progress — Run 36

## Scope

Applied a targeted build repair to the uploaded Run 35 project after the Netlify production build failed while evaluating `src/app/globals.css`.

## Changes

- Replaced the invalid direct Tailwind PostCSS plugin registration with `@tailwindcss/postcss`.
- Migrated global CSS from removed Tailwind v3 directives to Tailwind v4 `@import` and CSS plugin directives.
- Aligned daisyUI with Tailwind v4 using daisyUI 5 and its CSS theme plugin.
- Registered Tailwind Typography using its Tailwind v4 CSS plugin integration.
- Preserved institutional brand palette, gradient utilities, existing component class usage, base styles, and reduced-motion rules.
- Removed the old JavaScript Tailwind config that loaded the daisyUI 4 plugin.
- Added `npm run audit:tailwind` for static checks of the migration.

## Verification

- Tailwind v4 source configuration audit: run in this archive.
- Localization audit and independent TypeScript check: run separately.
- Full Next.js production build: not verified because dependencies are not installed in this environment.
- Package lock: not regenerated because the npm registry request timed out. Do not use `npm ci` or deploy this patch until `npm install` has regenerated and committed `package-lock.json`.

## Netlify log interpretation

The no-build-cache warning is informational. The fatal error was Tailwind CSS 4 being registered as its own PostCSS plugin. The source configuration now uses the separate PostCSS plugin and the corresponding Tailwind v4 CSS setup.

## Release status

Not release-ready until lockfile refresh, clean dependency installation, lint, full TypeScript check, and `npm run build` pass in a network-enabled environment. No deployment was performed.
