# IIFLHM Localization Progress — Run 22

Date: 16 November 2026  
Checkpoint: cumulative continuation from Run 21  
Scope: language catalogue hero accuracy, translated labels and locale-aware internal CTAs

## Implemented

- Fixed literal `{t.offered}`/`{t.standard}`/`{t.levels}` rendering in the LanguageHero statistic labels.
- Added localized language hero image alt text for all eight locales.
- Corrected the displayed catalogue count from `8+` to `8` (the exact existing course-record count); replaced the misleading universal A1–C1 level statistic with localized course-dependent wording and qualified CEFR as applicable.
- Replaced potentially overstated featured German tags with neutral course-context wording and a reminder to confirm external exam options.
- Updated locale-aware CTA destinations in LanguageHero, LanguageGrid, LanguageModal, Academics landing cards/CTAs and Student Voices.
- Fixed the remaining stale Academics link to `/academics/languages`.
- Updated audit, guide, inventory and QA report.

## Verification

- Syntax transpilation: PASS for seven changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for the language catalogue dictionary and locale config.
- Runtime locale coverage: PASS for all eight locales and required hero/featured fields.
- Static route check: PASS; no stale `/academics/language-courses` reference remains in `src`, and `/academics/languages` exists.
- Full lint, project type-check and production build remain blocked by absent dependencies (`eslint` and `next` not found).
- Browser, responsive, screen-reader and real locale-navigation tests: NOT PERFORMED.

## Next priorities

1. Continue locale-aware internal link migration across remaining live routes (ICT, hospitality, travel, careers, contact, admissions, about, news).
2. Complete route-level metadata, canonical/hreflang, structured data, sitemap and robots policy only after translation review; keep unreviewed locales noindex.
3. Obtain approved full Privacy and Terms documents and qualified legal review.
4. Restore dependencies and run full lint, project type-check, production build and browser QA.

## Release status

Run 22 is an incremental checkpoint, not a complete release. Translations remain drafts pending fluent-speaker and institutional review. No deployment, publication, production-setting changes or external communications were performed.
