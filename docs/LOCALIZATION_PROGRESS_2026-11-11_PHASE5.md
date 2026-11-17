# IIFLHM localization progress — Phase 5

## Scope delivered

Localized the Academics landing-page catalogue and value-proposition copy across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, and `zh`.

Changed files:
- `src/i18n/academics-catalogue.ts` — new locale resources for five track titles, subtitles and descriptions, plus six “Why Choose” headings and descriptions in each launch locale.
- `src/app/academics/page.tsx` — consumes the new localized catalogue resources while retaining the existing card order, links, imagery, accents and caveats.
- `docs/TRANSLATION_INVENTORY.md` — records coverage and explicitly lists English elements that remain.
- `docs/QA_REPORT.md` — records static checks and exact runtime blockers.

## Verification

- Static resource check: passed; all eight locale records exist and expected arrays are present.
- Integration check: passed; Academics page imports and consumes localized track and value-proposition resources.
- `npm run lint`: exit 127; `eslint: not found`.
- `npm run build`: exit 127; `next: not found`.
- Browser, responsive, accessibility and fluent-speaker QA: not performed.

## Remaining work

- Academics card feature bullets, image highlights and German feature-panel tags remain English.
- Six individual programme pages remain to be localized: German Language, Hospitality Management, ICT, Languages, Nursing Preparation and Travel & Tourism.
- Admissions and complete form states; Career Opportunities and its three subpages; Contact; Gallery; News; Student Voices; Privacy; Terms; image alt text; complete metadata and hreflang; accessibility and responsive/browser QA remain.
- Non-English routes remain `noindex` pending complete translation and review.

No deployment, production configuration changes, or external communications were performed. Translations are drafts pending fluent-speaker and institutional review.

## Next priority

Localize the six individual programme pages using their existing content and programme data, then complete Admissions and its form workflow.
