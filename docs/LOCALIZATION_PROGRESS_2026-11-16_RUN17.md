# IIFLHM Localization Progress — Run 17

Date: 16 November 2026  
Checkpoint: cumulative continuation from Run 16  
Scope: shared Navbar/Footer/WhatsApp copy and locale-selector navigation behavior

## Implemented

- Added `src/i18n/shared-layout.ts` with localized shared-layout strings for all eight launch locales.
- Localized the Navbar landmark and home-link accessible names, Footer tagline and institutional mission, location/technology attribution, scroll-to-top control and WhatsApp tooltip/dismissal text.
- Updated `LanguageSelector` to preserve the active pathname, query string and URL hash when switching locale. Existing `localePath` handling continues to remove a previous locale prefix and apply the selected locale to the same page.
- Preserved the official institute name, contact values, social brand names, Babbage Technologies name, logo and institutional design.
- Updated the audit, i18n guide, translation inventory and QA report.

## Verification

- Syntax transpilation: PASS for five changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `shared-layout.ts` with repository alias mapping.
- Static review: shared layout keys cover all eight launch locales; selector code includes pathname, query and hash in the destination.
- `npm run lint`: remains blocked (`eslint: not found`).
- `npm run build`: remains blocked (`next: not found`).
- Full project type-check: remains blocked by absent Next.js/React/framework type dependencies.
- Browser route transitions, query/hash retention, mobile menu, keyboard/focus and screen-reader QA: NOT PERFORMED.

## Next priorities

1. Audit and migrate remaining Academics detail routes and reusable ProgramCard/ProgramDetail/FacilitiesList components.
2. Finish modal focus management, Escape handling, focus restoration and RTL-ready layout primitives.
3. Complete localized metadata, canonical/hreflang, structured data, sitemap and robots policy only for reviewed routes; retain noindex for unreviewed locales.
4. Obtain approved full Privacy and Terms source documents and qualified legal review.
5. Restore dependencies and run full lint, type-check, production build and browser QA.

## Release status

Run 17 is an incremental checkpoint, not a complete release. Translations remain drafts pending fluent-speaker and institutional review. No deployment, publication, production-setting changes or external communications were performed.
