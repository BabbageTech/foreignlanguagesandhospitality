# IIFLHM Localization Progress — Run 15

Date: 16 November 2026  
Checkpoint: continued from Run 14  
Scope: remaining language-course learning outcomes, career-area labels, card summaries and qualification notes

## Implemented

- Added `src/i18n/language-course-content.ts` for the eight existing language-course IDs across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- Localized each course's learning outcomes and related career-area labels. The 64 locale/course records preserve the original number and ordering of outcomes and career items.
- Updated `LanguageModal.tsx`, `LanguageGrid.tsx` and `FeaturedLanguage.tsx` to render localized outcomes, career areas, card summaries and the featured German-course rationale.
- Localized duration units and level-range connectors while retaining all source numeric values and official proficiency codes.
- Added a localized certificate qualification note. Official external examination names and exact IIFLHM certificate titles remain unchanged; availability, preparation, award conditions, recognition and eligibility require institutional confirmation.
- Updated `CODEBASE_AUDIT.md`, `I18N_GUIDE.md`, `TRANSLATION_INVENTORY.md` and `QA_REPORT.md`.

## Verification

- Syntax transpilation: PASS for four changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for the new resource and dependent locale definitions using a temporary external tsconfig with the repository path alias.
- Runtime structural check: PASS for 64 course/locale records; every localized outcomes/careers array matches the corresponding source array length and is non-empty.
- `npm run lint`: NOT RUN successfully; exit 127, `eslint: not found`.
- `npm run build`: NOT RUN successfully; exit 127, `next: not found`.
- `tsc --noEmit --pretty false`: exit 2 due missing Next.js, React, lucide-react, Tailwind and Node type dependencies; full project type-check remains blocked.
- Browser, responsive, keyboard/focus, screen-reader, CJK rendering and fluent-speaker QA: NOT PERFORMED.

## Remaining priorities

1. Audit and localize the rest of the Academics catalogue, including any remaining card descriptions, tags, detail content and course facts not covered by existing route dictionaries.
2. Audit shared navigation/footer, locale switching, route preservation, accessible names, focus behavior and RTL-ready layout primitives.
3. Complete route-aware metadata, canonical/hreflang, structured data, sitemap and robots policy only for pages that pass translation review. Keep unreviewed localized routes noindex.
4. Obtain institution-approved full Privacy and Terms source documents and qualified legal review; do not invent legal provisions.
5. Restore project dependencies in a supported environment and run full lint, type-check, production build and browser QA.

## Release status

Run 15 is an incremental content-localization checkpoint, not a complete release. Translations are drafts and need fluent-speaker/institutional review. No deployment, publication, production-setting changes or external communications were performed.
