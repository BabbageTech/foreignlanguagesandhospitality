# IIFLHM Localization Progress — Run 31

**Date:** 17 November 2026  
**Base:** Run 30 archive  
**Scope:** ESLint / Next.js tooling compatibility and verification of localization safeguards.  
**Deployment:** Not performed.

## Main issue addressed

The project declared Next.js `^16.2.4` but pinned `eslint-config-next` to `15.1.0`. That cross-major preset pairing was an avoidable source of lint-tooling incompatibility. The project also used an ESLint 9 flat-config entry point with `FlatCompat` solely to load that older preset.

## Changes implemented

1. Replaced the compatibility-wrapper ESLint setup with a native ESLint 9 flat configuration in `eslint.config.mjs`.
2. Removed the direct `eslint-config-next@15.1.0` dependency rather than downgrading Next.js or guessing at an unverified Next 16 preset release.
3. Declared the TypeScript ESLint parser/plugin, React, React Hooks, JSX accessibility, and `globals` packages directly. Their exact package versions were already present in the Run 30 lockfile dependency graph; the root lockfile dependency declarations were synchronized with `package.json` without inventing package tarball URLs, integrity hashes, or dependency metadata.
4. Configured TypeScript-aware unused-variable checks, React recommended rules, JSX accessibility recommended rules, React Hooks rules-of-hooks (error), and exhaustive-deps (warning).
5. Updated `npm run lint` to use `eslint . --max-warnings=0` so warnings cannot silently pass CI.
6. Added `npm run audit:tooling`, backed by `scripts/audit-eslint-tooling.mjs`, to check the ESLint major, absence of the mismatched preset, plugin declarations, flat-config coverage, and exact root manifest/lockfile agreement.

## Verification

- `node scripts/audit-eslint-tooling.mjs` — **PASS**.
- `node --check eslint.config.mjs` — **PASS**.
- `node --check scripts/audit-eslint-tooling.mjs` — **PASS**.
- `tsc -p tsconfig.i18n.json --pretty false` — **PASS**.
- `node scripts/audit-localization.mjs` — **PASS**.
  - 20 App Router page routes; 18 English sitemap entries.
  - Eight launch locales: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
  - Metadata declarations on all 20 routes.
  - Localized `noindex, follow`, preview crawler safeguards, legal-page exclusions, and canonical-only policy retained.
  - Locale switching, query/hash retention, selector accessible name, cookie persistence, and localized rewrites checked.
  - 30 shared interface-message keys checked across all eight locales.
  - 110 TS/TSX files scanned; zero missing literal local assets and zero unmatched static internal page links.
- Direct devDependency versions declared in `package.json` all have corresponding package entries in `package-lock.json`; root devDependency declarations match exactly.
- Archive integrity test — **PASS** after packaging.

## Important limitation — runtime lint/build not certified

The environment has no installed `node_modules` and no global `eslint` executable. A clean offline `npm ci` could not complete because required package tarballs (first missing cache entry: `zod@3.25.76`) are not cached. A live npm registry request failed with DNS `EAI_AGAIN`. Therefore the ESLint configuration was syntax-checked and its dependency/manifest structure audited, but `npm run lint`, the full application TypeScript check, and `next build` were **not** executed. The new flat config has not yet been runtime-tested against the full source tree. Run `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` in a network-enabled environment before treating the toolchain as release-verified.

## Preservation and release safeguards

- Next.js remains on its existing `^16.2.4` dependency line; no framework downgrade was made.
- No ESLint rule suppression, `ignoreDuringBuilds`, or TypeScript build-error bypass was introduced.
- Existing routes, institutional content, translations, legal text, media, sitemap scope, canonical policy, and deployment settings were not changed.
- Translated locales remain `noindex, follow`; only approved English routes remain in the sitemap.
- Fluent-speaker and institutional review of the seven non-English locales, approved Privacy/Terms source text, full browser/device/accessibility QA, and final release review remain outstanding.
- No deployment or publication was performed.
