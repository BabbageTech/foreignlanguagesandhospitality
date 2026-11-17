# IIFLHM localization progress — continuation run 3

## Completed in this run

- Localized all four existing ICT course records across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- Course title, tagline, description, duration value, level, delivery mode, four learning outcomes, five curriculum module headings and four career-path labels now use the selected locale.
- Localized the course-detail action, modal close accessible name, practical-lab statistic, advantage heading, and the “more” suffix.
- Changed the certificate heading to neutral “Certificate information” wording so it does not imply that the unverified source certificate has been awarded. Existing source certificate names remain unchanged pending institutional confirmation.
- Preserved the four course records, their order, existing images, technical skills, topic tags, product/framework names, and source programme information. Cybersecurity wording describes exam preparation pathways rather than implying external certification awards.

## Verification

- TypeScript compiler API syntax transpilation: PASS for `src/i18n/ict.ts`, `src/i18n/ict-courses.ts`, and `src/app/academics/ict/ICTPageClient.tsx`.
- Runtime structure validation: PASS for 8 locales × 4 course records; required text fields and outcome/module/career array lengths validated.
- `npm run lint`: BLOCKED, exit 127 — `eslint: not found`.
- `npm run build`: BLOCKED, exit 127 — `next: not found`.
- `npx --no-install tsc --noEmit`: BLOCKED, exit 2 — missing Next.js, React, Lucide and Node type dependencies cause project-wide module and JSX type errors.
- Browser, responsive, keyboard, screen-reader and fluent-speaker review: NOT RUN.

## Remaining gaps

- Generic curriculum topic tags and English text inside the code-terminal illustration remain to be reviewed/localized; recognized technology names should remain recognizable.
- Institutional confirmation is still required for certificate names/awards, durations, delivery availability, cohort-size claims and external examination relationships.
- The language-course catalogue still needs page-aware localization across all eight locales, including filters, featured content, eight existing course records and modal content.
- Other remaining routes and form/SEO/accessibility tasks are listed in `TRANSLATION_INVENTORY.md`.

## Next priority

Localize the language-course catalogue and its eight existing course records/modals. Do not invent additional language-course records to fill the difference between the catalogue and the thirteen languages named elsewhere.

No deployment, publication, production configuration changes or external communications were performed. Translations remain drafts pending fluent-speaker and institutional review.
