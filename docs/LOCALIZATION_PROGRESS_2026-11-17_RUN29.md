# IIFLHM Localization Progress — Run 29

Date: 17 November 2026  
Checkpoint: continuation from Run 28  
Scope: reduced-motion accessibility for decorative video and regression coverage

## Implemented

- Updated the faculty profile video in `src/components/about/FacultyGrid.tsx` to respect the visitor's `prefers-reduced-motion` setting using Framer Motion's `useReducedMotion` hook.
  - Autoplay is disabled when reduced motion is requested.
  - Native video controls become available in that mode.
  - The automatically looping presentation is hidden from assistive technology and removed from keyboard focus when it is purely decorative.
  - When controls are exposed, the video receives an accessible name based on the faculty member's existing name and localized role.
- Updated the homepage intake video in `src/components/home/IntakeBanner.tsx` with the same reduced-motion behavior.
  - The accessible name is based on the existing localized intake heading; no institutional facts or claims were added.
- Extended `scripts/audit-localization.mjs` to fail if either decorative video loses the reduced-motion guard, accessible controls, or decorative accessibility treatment.
- No programme details, institutional claims, translations, legal clauses, canonical URLs, sitemap entries, indexing permissions, or deployment settings were changed.

## Verification

- `node scripts/audit-localization.mjs`: PASS.
  - 20 App Router page routes; 18 English sitemap entries.
  - All 8 launch locales configured: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
  - Metadata declarations present on all 20 routes.
  - Localized `noindex, follow`, preview crawler disallow, legal-page exclusions and canonical-only alternates verified.
  - Locale switching, query/hash retention, localized selector label, cookie persistence and localized rewrites checked.
  - 30 shared interface-message keys checked across all eight locales.
  - 110 TypeScript/TSX files scanned; zero missing literal local assets and zero unmatched static internal page links.
  - Reduced-motion behavior for faculty and intake videos checked.
- `tsc -p tsconfig.i18n.json --pretty false`: PASS using the available global TypeScript compiler.
- Full app lint, type-check and production build remain unavailable because `node_modules` is absent. The package manifest and lockfile still have the known mismatch: Next.js `16.2.4` and `eslint-config-next` `15.1.0`. Registry access previously failed with `EAI_AGAIN`; no unverified dependency or lockfile changes were made.

## Release status

Not production-ready. Seven non-English locale drafts still require fluent-speaker and institutional approval. Privacy and Terms still require complete institution-approved legal text and qualified legal review. Full application lint, type-check, production build, browser/device, responsive, keyboard, screen-reader, form/dialog, media and Simplified Chinese typography QA remain outstanding. Non-English routes remain `noindex, follow`; reciprocal hreflang and localized sitemap entries remain withheld. No deployment or publication was performed.

## Next priorities

1. Restore network access or use a network-enabled build environment; align `eslint-config-next` with the Next.js 16 major and regenerate the lockfile using npm.
2. Run clean dependency installation, ESLint, full application type-check and production build; fix actual errors without suppressing rules.
3. Perform route-by-route browser, responsive, keyboard, screen-reader, form, dialog, media and CJK typography QA.
4. Obtain complete approved Privacy and Terms documents and qualified legal review.
5. Obtain fluent-speaker and institutional approval for all seven translated locales and controlled institutional claims.
6. Only after approval and QA, revisit reciprocal hreflang, localized sitemap entries and indexing policy.
