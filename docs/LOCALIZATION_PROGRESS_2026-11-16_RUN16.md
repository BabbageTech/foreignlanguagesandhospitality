# IIFLHM Localization Progress — Run 16

Date: 16 November 2026  
Checkpoint: cumulative continuation from Run 15  
Scope: Academics landing-page programme cards and catalogue microcopy

## Implemented

- Added eight-locale feature lists for all five existing Academics programme tracks (four labels per track), neutral card highlights and the programme-card action label in `src/i18n/academics-catalogue.ts`.
- Localized the four Academics hero/stat category labels and both relevant image alternative texts.
- Removed unsupported promotional claims from the card feature chips, including claims about guaranteed placement, unverified facilities, class caps, employer links and visa consultation. Replaced them with neutral topic descriptions based on existing programme areas and reminders to confirm current availability with admissions.
- Corrected the language-course track link to the existing `/academics/languages` route and the Germany pathways track link to `/career-opportunities`.
- Corrected the Dutch language-course catalogue title typo.
- Preserved all five existing tracks, images, route structure, colours and section layout.
- Updated the codebase audit, i18n guide, translation inventory and QA report.

## Verification

- TypeScript syntax transpilation: PASS for `academics-catalogue.ts` and `academics/page.tsx`; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for the catalogue dictionary and locale type.
- Runtime structural validation: PASS for eight locales × five programme tracks, with four feature labels per track, three highlight labels and a non-empty action label.
- Full lint/build/project type-check: remain blocked by absent project dependencies (`eslint` and `next` not found; full TypeScript check reports missing Next.js/React/framework declarations).
- Browser, responsive, locale-prefixed link and screen-reader QA: NOT PERFORMED.

## Next priorities

1. Shared Navbar/Footer and language selector: localize accessible names and verify route/query/hash preservation on locale changes.
2. Audit remaining Academics detail routes and reusable ProgramCard/ProgramDetail/FacilitiesList for hard-coded English and missing locale propagation.
3. Finish accessible dialog focus behavior and RTL-ready shared layout patterns.
4. Complete localized metadata, canonical/hreflang, structured data, sitemap and robots only for reviewed routes; maintain noindex for unreviewed localized routes.
5. Obtain approved full Privacy and Terms source documents and qualified legal review.
6. Restore dependencies and run complete framework/browser QA.

## Release status

Run 16 is an incremental localization checkpoint, not a completed eight-locale release. Translations remain drafts pending fluent-speaker and institutional review. No deployment, publication, production-setting changes or external communications were performed.
