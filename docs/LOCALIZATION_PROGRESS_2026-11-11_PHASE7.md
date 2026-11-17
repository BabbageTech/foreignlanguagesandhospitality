# IIFLHM Localization — Phase 7

Date: 2026-11-11

## Completed

Localized the German Language Courses detail page across all eight configured launch locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`). The work covers page title and description metadata, hero copy, learning and exam-preparation introduction, TestDaF and Goethe-Test PRO descriptions, A1–C2 level cards, the four-step examination journey, and calls to action.

Official examination names and CEFR level codes were retained. Copy explicitly distinguishes institute preparation from external examination registration, examination delivery, and certification decisions. It does not claim that IIFLHM hosts every listed examination.

## Not completed

The hospitality-management, ICT, languages, and travel-tourism programme pages still need localization, as do the broader admissions, careers, contact, gallery, news, student voices, privacy, terms, and interaction/form surfaces. Full-site metadata, accessibility, responsive and browser QA also remain.

## Verification

Static source inspection only. `npm run lint` and `npm run build` remain blocked because `eslint` and `next` are not installed in the workspace. No deployment was performed. Non-English indexing safeguards remain in place; fluent-speaker review is still required.
