# IIFLHM Localization Progress — Run 14

Date: 16 November 2026  
Checkpoint: continued from Run 13  
Scope: language-course detail narratives and proficiency-stage labels

## Implemented

- Added `src/i18n/language-course-details.ts` with localized `about` and `whyLearn` narratives for the eight existing language-course records across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- Added localized labels and explanatory descriptions for the existing CEFR, HSK and JLPT proficiency-stage codes.
- Updated `src/components/languages/LanguageModal.tsx` to render locale-aware course narratives and level descriptions using stable course IDs. The category label in the modal is now localized too.
- Preserved existing course IDs, course order, source category IDs, images, official level codes, duration values, external examination names and certificate wording.
- Updated `CODEBASE_AUDIT.md`, `I18N_GUIDE.md`, `TRANSLATION_INVENTORY.md` and `QA_REPORT.md`.

## Verification

- Syntax transpilation: PASS for both changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict type-check of the new locale resource: PASS using the exact eight-locale union. The project alias import is not resolvable in an isolated CLI invocation without the repository tsconfig.
- Runtime structural check: PASS — 64 course narrative records and 96 level label/description records are present.
- Full lint, production build and project type-check: NOT VERIFIED; dependencies remain absent/incomplete. `npm run lint` / `npm run build` cannot run until `npm ci` succeeds in a supported environment.
- Browser, responsive, accessibility and fluent-speaker testing: NOT PERFORMED.

## Remaining language-catalogue gaps

- Learning outcomes are still source English.
- Career-area labels and card career previews are still source English.
- Full course-card summaries and all related microcopy need a final audit.
- Official certificate wording and examination availability require institutional confirmation; proper exam names remain unchanged.

## Remaining site-wide priorities

1. Finish the language-course outcomes, career labels, card content and remaining modal strings.
2. Complete the Academics catalogue and any outstanding programme-card features/tags.
3. Obtain approved full Privacy and Terms source documents and legal review; current two-paragraph pages are not complete legal notices.
4. Audit shared navigation, locale switching, forms, focus management, RTL readiness and responsive translated layouts.
5. Complete localized metadata, canonical/hreflang alternates, structured data, sitemap and robots policy only for reviewed routes.
6. Restore dependencies and run full lint, type-check, production build and browser QA.

## Release status

This is an incremental localization checkpoint, not a completed eight-language release. Translation drafts need fluent-speaker and institutional review. Non-English routes remain `noindex, follow`. No deployment, publication, production-setting changes or external communications were performed.

Next priority: translate the language-course learning outcomes and career-area labels, then complete remaining language-card copy.
