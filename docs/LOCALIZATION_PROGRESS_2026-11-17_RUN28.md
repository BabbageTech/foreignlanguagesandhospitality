# IIFLHM Localization Progress — Run 28

Date: 17 November 2026  
Checkpoint: continuation from Run 27  
Scope: stricter localization type-checking and locale-navigation regression safeguards

## Implemented

- Added `tsconfig.i18n.json` to type-check all `src/i18n/**/*.ts` resources in strict mode, independently of Next.js and React imports.
- Added `npm run typecheck:i18n` to the package scripts.
- Extended `scripts/audit-localization.mjs` to check that:
  - English internal routes remain unprefixed while non-default locales receive a locale prefix.
  - Explicit locale-switch URLs are generated for all locales, including English.
  - The language selector switches the current route and preserves query parameters and URL fragments.
  - The language selector has a localized accessible name.
  - The proxy persists the selected locale, passes the locale to rewritten requests, and applies saved non-default preferences.
  - All 30 shared interface-message keys exist for each of the eight launch locales.
- Updated README and internationalization guide with both validation commands.
- No institutional claims, programme details, translation wording, legal clauses, production settings or indexing permissions were changed.

## Verification

- `npm run typecheck:i18n`: PASS using the available global TypeScript 5.9.3 compiler. All localization resource modules passed strict type-checking.
- `npm run audit:i18n`: PASS.
  - 110 TypeScript/TSX source files scanned for literal local asset references and static internal links; zero missing assets and zero unmatched internal page links.
  - 20 App Router page routes.
  - 18 English sitemap entries; Privacy and Terms remain excluded.
  - All 8 launch locales configured: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
  - Page metadata present on all 20 routes.
  - Localized `noindex, follow`, preview crawler disallow, legal exclusions and canonical-only alternates verified.
  - Locale-switch route preservation, query/hash handling, accessible name and cookie behavior source checks passed.
  - 30 shared interface message keys checked across all 8 locales.
- Full application type-check attempted with `tsc --noEmit`: BLOCKED because `node_modules` is absent; Next.js, React, lucide-react and Node type declarations are unavailable.
- npm registry lookup for `eslint-config-next@16` failed with `EAI_AGAIN` (DNS/network unavailable). Dependency mismatch remains: Next.js `16.2.4` and `eslint-config-next` `15.1.0` in the manifest and lockfile. No fabricated lockfile or package version change was made.

## Release status

Not production-ready. Run 28 improves independent validation of localization data and locale navigation but does not certify the full site. Seven non-English locale drafts still require fluent-speaker and institutional approval. Privacy and Terms still require complete approved institutional legal text and qualified legal review. Full app build, ESLint, browser, responsive, keyboard, screen-reader, media-control and Simplified Chinese typography QA remain outstanding. Non-English routes remain `noindex, follow`; no reciprocal hreflang or localized sitemap entries were added. No deployment or publication was performed.

## Next priorities

1. Restore network access or use a network-enabled build environment; align `eslint-config-next` to the Next.js 16 major and regenerate the lockfile with npm.
2. Run a clean `npm ci`, full `npm run lint`, full TypeScript check and `npm run build`; fix real errors without suppressing rules.
3. Complete browser-based route-by-route responsive, keyboard, screen-reader, form, dialog, media and CJK typography QA.
4. Obtain complete approved Privacy and Terms documents and qualified legal review.
5. Obtain fluent-speaker and institutional approval for all seven translated locales and controlled institutional claims.
6. Only after approval and QA, revisit reciprocal hreflang, localized sitemap entries and indexing policy.
