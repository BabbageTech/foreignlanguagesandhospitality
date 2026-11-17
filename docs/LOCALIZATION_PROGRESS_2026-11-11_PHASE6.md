# IIFLHM Localization — Phase 6

Date: 2026-11-11

## Completed in this phase

- Localized the Nursing Career Preparation route in all eight configured launch locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`).
- Added an explicit caveat that programme specifics, entry requirements, recognition and professional registration depend on the receiving institution and destination country.
- Preserved the existing page's minimal structure and institutional color identity.
- Updated the translation inventory and QA report.

## Not completed by this phase

This is not a full-site localization release. The other five individual academic programme pages, language-course components and catalogue data, admissions and forms, career pathways, contact, gallery, news, student voices, privacy, terms, metadata/SEO and accessibility copy still require a route-by-route audit and translation. The Academics landing page also retains English feature bullets/highlights noted in the inventory.

## Verification

Static source inspection only. `npm run lint` and `npm run build` cannot execute until dependencies are installed (`eslint` and `next` are absent). No browser or fluent-speaker QA was possible. Non-English indexing safeguards remain in place; no deployment was performed.
