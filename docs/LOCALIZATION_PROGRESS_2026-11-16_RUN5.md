# IIFLHM Localization Progress — Run 5 (16 November 2026)

## Scope completed

- Added `src/i18n/admissions.ts`, containing admissions page-shell copy in all eight launch locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`).
- Wired the server-rendered Admissions route to `x-iiflhm-locale`, with English fallback, and localized the hero, introduction, admissions prompts, form section headings, intake schedule notice, prospectus panel, support panel, programme overview headings and closing CTA.
- Kept programme records, intake data, photos, routes and the institutional colour palette unchanged. The intake schedule remains empty because no confirmed dates were supplied.
- Removed a duplicate `SITE_CONFIG` import from `src/app/contact/page.tsx`.
- Updated `CODEBASE_AUDIT.md`, `I18N_GUIDE.md`, `TRANSLATION_INVENTORY.md` and `QA_REPORT.md`.

## Files changed

- `src/i18n/admissions.ts` (new)
- `src/app/admissions/page.tsx`
- `src/app/contact/page.tsx` (duplicate import cleanup)
- `docs/CODEBASE_AUDIT.md`
- `docs/I18N_GUIDE.md`
- `docs/TRANSLATION_INVENTORY.md`
- `docs/QA_REPORT.md`
- `docs/LOCALIZATION_PROGRESS_2026-11-16_RUN5.md` (new)

## Verification

- Passed TypeScript compiler API syntax transpilation for the new resource, Admissions page and touched Contact page.
- `tsc --noEmit --pretty false`: blocked by absent `node_modules` and missing framework/React/Node type packages. This does not establish a clean project type check.
- ESLint and Next.js production build: not run successfully because dependencies are not installed in this working copy.
- No browser, responsive, screen-reader, live-form or fluent-speaker QA has been performed.

## Remaining work

Admissions is not fully localized: the interactive AdmissionForm, validation copy, step labels, upload/submission states, required-document checklist, process-step descriptions, programme cards and some detailed content remain English. Contact and ContactForm remain untranslated. Other outstanding routes include Careers and its subroutes, Gallery, News, Student Voices, Privacy and Terms. Shared locale switching, complete localized metadata/canonical/hreflang/structured data, sitemap/robots review, RTL-ready verification and comprehensive QA remain outstanding.

## Next priority

Complete the AdmissionForm across all eight locales, including validation and submission states, then complete the remaining Admissions sections before moving to Contact and ContactForm. Keep non-English routes `noindex, follow` until the full route and all user-facing states are translated and reviewed. No deployment or production changes were made.
