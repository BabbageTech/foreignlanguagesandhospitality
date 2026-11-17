# IIFLHM Localization Progress — Run 9 (16 November 2026)

## Scope
Continued from Run 8. Completed the three Career Opportunities detail routes for the eight launch locales: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.

## Files changed
- `src/i18n/career-details.ts` — complete route-specific draft resources for three Careers pathways and eight locales.
- `src/components/careers/CareerDetailPage.tsx` — shared localized page renderer preserving the existing institutional design direction and route-specific information architecture.
- `src/app/career-opportunities/apprenticeship/page.tsx` — locale-aware route and metadata.
- `src/app/career-opportunities/undergraduate/page.tsx` — locale-aware route and metadata.
- `src/app/career-opportunities/masters/page.tsx` — locale-aware route and metadata.
- `docs/CODEBASE_AUDIT.md`
- `docs/I18N_GUIDE.md`
- `docs/TRANSLATION_INVENTORY.md`
- `docs/QA_REPORT.md`

## Implemented
- Apprenticeship route: hero, status notice, overview, three benefit cards, academic eligibility, personal qualities and contact CTA.
- Undergraduate route: hero, direct/preparatory admission pathways, academic/language/financial eligibility, application considerations and consultation CTA.
- Master's route: hero, seven-item document checklist, English/German programme language guidance, financial and visa cautions, and consultation CTA.
- All visible page copy and route metadata now resolve from the selected locale.
- All three server routes resolve the validated `x-iiflhm-locale` request header and fall back to English.
- Preserved the three existing route paths and the `/contact` and `/career-opportunities` destinations.
- No promises of admission, remuneration, visa approval, employment or placement are made. Variable requirements are referred to the responsible provider, employer, university or authority.
- Non-English routes remain `noindex, follow`; hreflang/indexing was not enabled.

## Verification
- TypeScript compiler API `transpileModule`: PASS for five changed/new TS/TSX files, zero syntax diagnostics.
- Locale/data structure validation: PASS for 8 locales × 3 routes, including expected content arrays.
- Standalone strict dictionary type-check: PASS — `tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext src/i18n/config.ts src/i18n/career-details.ts`.
- Static review of route locale resolution, dictionary usage and localized metadata: PASS.
- `npm run lint`: BLOCKED — `node_modules` is absent; local ESLint is unavailable.
- `npm run build`: BLOCKED — `node_modules` is absent; local Next.js is unavailable.
- Full project type-check: NOT VERIFIED — required framework and type dependencies are unavailable. Syntax transpilation is not a substitute for full type-checking.
- Browser, responsive, keyboard, screen-reader, locale-switching and fluent-speaker tests were not performed.

## Remaining work
- Gallery and its filters/lightbox interactions.
- News listing and individual article content.
- Student Voices content and testimonial controls.
- Privacy and Terms pages; obtain institutional/legal review rather than inventing legal claims.
- Complete remaining language-course detail descriptions, outcomes, levels, careers and exam information.
- Audit shared components and page-aware locale switching.
- Complete localized canonical/alternate/hreflang/structured-data strategy, sitemap and robots only after all localized routes are reviewed.
- Run full dependency-backed lint, type-check, production build and browser/accessibility QA.

## Release constraints
All non-English translations remain drafts. Institutional facts and external qualifications must be confirmed. Non-English URLs remain noindex. No deployment, publication, production configuration change, external communication or irreversible change was made.

## Next priority
Proceed to Gallery localization, preserving existing photography, ordering, filtering and lightbox behavior. Then News, Student Voices, Privacy and Terms.
