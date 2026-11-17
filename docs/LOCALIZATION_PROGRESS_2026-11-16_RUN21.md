# IIFLHM Localization Progress — Run 21

Date: 16 November 2026  
Checkpoint: cumulative continuation from Run 20  
Scope: consistent accessibility behavior for active modal/dialog components

## Implemented

- Added `src/hooks/useAccessibleDialog.ts` for initial focus, keyboard focus containment, Escape dismissal, body-scroll locking and focus restoration.
- Migrated the LanguageModal to the shared hook.
- Upgraded Gallery LightboxModal and ICT CourseModal with dialog semantics and the shared focus behavior.
- Upgraded the Student Voices video modal with a localized dialog title in all eight locales and the shared focus behavior.
- Added locale-derived `dir` to Gallery, ICT and Student Voices dialog containers; changed close-button positioning to logical `end`.
- Preserved existing course, gallery and video content/assets and existing video loading behavior.
- Updated audit, guide, inventory and QA documentation.

## Verification

- TypeScript syntax transpilation: PASS for seven changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict dictionary check: PASS for the Student Voices locale resource.
- Isolated strict hook check: PASS using a temporary React type-signature stub; actual React type packages are absent.
- Browser keyboard, focus restoration, screen-reader, native video controls, scroll-lock and RTL tests: NOT PERFORMED.
- Full lint, project type-check and production build remain blocked (`eslint` and `next` unavailable; framework declarations missing).

## Next priorities

1. Audit every active route and component for English-only copy, unlocalized internal links and metadata gaps.
2. Complete localized canonical/hreflang, structured data, sitemap and robots rules only for approved/reviewed routes; retain noindex for unreviewed locales.
3. Obtain institution-approved full Privacy and Terms source documents and qualified legal review.
4. Restore dependencies and run complete lint, project type-check, production build and browser QA.

## Release status

Run 21 is an incremental checkpoint, not a completed release. Translations remain drafts pending fluent-speaker and institutional review. No deployment, publication, production-setting changes or external communications were performed.
