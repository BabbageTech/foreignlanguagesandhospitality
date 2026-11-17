# IIFLHM QA Report — 2026-11-11

## Current iteration: homepage section localization

### Passed
- TypeScript/TSX syntax transpilation using the globally available TypeScript compiler API passed for `src/i18n/home-sections.ts`, all five migrated homepage components, and `src/app/page.tsx`.
- Eight locale records are explicitly defined in the typed resource (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`).
- Homepage section copy now covers the institutional introduction, vision/mission, four programme cards and feature lists, six Why Choose Us benefits, six student quotations/role labels, and seven FAQs.
- Existing page component props now pass the validated locale into every migrated homepage section.
- FAQ controls include `aria-expanded`, `aria-controls`, semantic buttons, visible focus styling and labelled panels.
- No deployment, publishing, production-setting changes or external communications were performed.

### Blocked / not verified
- `tsc --noEmit` — failed before project checking because the incomplete `node_modules` tree lacks type definitions for `estree`, `json-schema`, `json5`, `node`, `react`, and `react-dom`.
- `npm run lint` — not run; ESLint is not installed in the incomplete dependency tree.
- `npm run build` — not run; Next.js is not installed in the incomplete dependency tree.
- `npm ci --ignore-scripts --no-audit --no-fund` — attempted but did not complete within the available command window.
- No browser, visual regression, screen-reader, keyboard-only, responsive, CJK glyph, or human translation review has been completed.

### Release caveats
- Do not remove non-English `noindex` protection until every route has complete localized body copy, forms, metadata/alternates and QA approval.
- Translated student quotations retain their original attributions and claims; obtain institutional/individual approval and fluent-speaker review before publication.
- The translation content is a working localization draft, not certified translation.

## Additional About route checks

- Passed TypeScript/TSX syntax transpilation for `src/i18n/about.ts`, the five About components and `src/app/about/page.tsx`.
- All eight locale records provide the About-page content structure, including four values, four facilities and nine faculty/team profiles.
- About route passes the validated locale to all localized child components.
- Institution confirmation and fluent-speaker review are still required; browser and production build checks remain blocked as recorded above.

## 2026-11-11 continuation — Academics landing localization

- Added `src/i18n/academics.ts` with locale dictionaries for all eight configured locales.
- Updated `src/app/academics/page.tsx` to read the locale set by the existing request middleware/header and localize hero copy, subject stat labels, section headings, study journey steps, German feature-panel text, and closing calls to action.
- Verified TypeScript/TSX syntax transpilation for both changed source files using the installed TypeScript transpiler (`transpileModule`): passed.
- `npx tsc --noEmit`: blocked by incomplete/missing type definition packages (`estree`, `json-schema`, `json5`, `node`, `react`, `react-dom`).
- ESLint and Next.js production build remain unverified because the local dependency installation is incomplete.
- Track-card content, Why Choose card body content, German feature tags, individual programme pages, and browser QA remain outstanding.


## Phase 5 — Academics catalogue copy

- Added `src/i18n/academics-catalogue.ts` with eight-locale track titles, subtitles, descriptions, and “Why Choose” card copy.
- Updated `src/app/academics/page.tsx` to consume those localized resources while preserving the original programme catalogue order, links, images, and caveats.
- Static structural review: passed. The new resource contains all eight locale keys; each locale has five track titles, subtitles and descriptions plus six value-proposition headings and descriptions. The Academics page consumes the localized resources.
- Full TypeScript, lint, production build, browser, and responsive checks remain pending because the project dependency installation is incomplete.

- `npm run lint`: failed to start (exit 127), `eslint: not found`.
- `npm run build`: failed to start (exit 127), `next: not found`.

## Phase 6 — Nursing programme page

- Added eight-locale copy for the Nursing Career Preparation heading, description and qualification/registration caveat.
- Kept the original page structure and did not introduce unsupported course duration, awarding-body, licensing, employment or migration claims.
- Static inspection confirms the locale type and dictionary cover all eight configured locales and the page reads the existing `x-iiflhm-locale` request header.
- Full TypeScript, lint, build, browser, responsive and screen-reader checks remain blocked/not run because the project dependencies are not installed in this working environment.

## Phase 7 — German language programme page

- Replaced hard-coded English page copy with locale-aware content for `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, and `zh`.
- Localized page title/description, introduction, external examination descriptions, all six A1–C2 level cards, process steps, calls to action, and metadata.
- Preserved official examination names and CEFR level codes. Clarified that external exams and certificates are provided/issued by the relevant external organization; availability at IIFLHM is not implied.
- Static review only. Lint/build remain blocked because project dependencies are not installed in this workspace. Translation review by fluent speakers and browser QA remain outstanding.


## 2026-11-16 continuation — Hospitality Management and Travel & Tourism

### Passed
- TypeScript compiler API syntax transpilation passed for `src/i18n/hospitality-tourism.ts`, `src/lib/localized-page-metadata.ts`, `src/app/academics/hospitality-management/page.tsx` and `src/app/academics/travel-tourism/page.tsx`.
- A runtime structural check of the transpiled locale resource passed for all eight locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`) and both programme pages. Each route has all required copy fields and exactly six learning-area items.
- Static source inspection found no remaining hard-coded English visible labels in the two migrated page components.
- Both routes resolve the validated locale from the existing `x-iiflhm-locale` request header and use localized page metadata. The proxy's non-English `noindex, follow` safeguard was not changed.
- The Travel & Tourism Bronze Level certification wording now requires institutional confirmation and does not assert that IIFLHM awards an external certificate.
- No deployment, publishing, production-setting changes or external communications were performed.

### Blocked / not verified
- `npm ci --ignore-scripts --no-audit --no-fund --prefer-offline` — timed out after 120 seconds; dependencies remain incomplete.
- `npm run lint` — failed to start, exit 127: `eslint: not found`.
- `npm run build` — failed to start, exit 127: `next: not found`.
- `npx --no-install tsc --noEmit` — failed before project checking, exit 2, because type definitions for `estree`, `json-schema`, `json5`, `node`, `react` and `react-dom` are missing.
- No browser, visual regression, keyboard-only, screen-reader, responsive, CJK font rendering or fluent-speaker review was available.

### Release caveats
- The supplied qualification name, 18-month duration, KNEC reference and KCSE D+ entry threshold remain unverified source claims and require current institutional approval.
- External IATA options and the Bronze Level Tour Guide qualification require confirmation of provider, current requirements and availability.
- These translations are working drafts. Do not remove non-English `noindex` protection until all routes, forms, metadata alternates and accessibility surfaces are complete and approved.

## 2026-11-16 continuation — ICT programme interface localization

### Passed
- TypeScript compiler API syntax transpilation passed for `src/i18n/ict.ts`, `src/app/academics/ict/page.tsx`, `src/app/academics/ict/ICTPageClient.tsx` and `src/lib/localized-page-metadata.ts`.
- ICT interface dictionary explicitly provides all eight launch locales and includes hero, section, feature, modal-label and CTA fields.
- ICT route now resolves the validated `x-iiflhm-locale` request header in a server component and passes the locale into its interactive client component.
- ICT route-specific title, description and Open Graph metadata are registered for all eight locales.
- Existing programme data, images, course routes and institutional colour palette are preserved.

### Partial / outstanding
- ICT course-specific descriptions, outcomes, module titles, careers, qualification/certificate text and technical curriculum labels remain English. This route must not yet be counted as fully localized.
- No browser, keyboard, screen-reader, responsive or fluent-speaker testing was available.
- `npm run lint` — failed to start, exit 127: `eslint: not found`.
- `npm run build` — failed to start, exit 127: `next: not found`.
- `tsc --noEmit` — failed, exit 2, because project dependencies and type packages are missing, including `next`, `react`, `react-dom`, `lucide-react` and `@types/node`.
- No deployment or production changes were made.


## 2026-11-16 — ICT course-record localization continuation

### Passed
- TypeScript compiler API transpilation passed for `src/i18n/ict.ts`, `src/i18n/ict-courses.ts` and `src/app/academics/ict/ICTPageClient.tsx`.
- Runtime resource structure check passed for all eight launch locales and all four existing ICT course records: title, tagline, description, level, mode, localized duration values, four outcomes, five module headings and four career labels are present.
- Course cards and modals now select localized course records by the validated page locale; existing course ordering, durations, media, skills, curriculum topic tags and certificate source names remain unchanged.
- Course-detail action, modal close accessible name, practical-lab statistic and advantage heading now use localized labels.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found`.
- `npm run build` — exit 127: `next: not found`.
- `npx --no-install tsc --noEmit` — exit 2: project dependencies and React/Next/Node type declarations are missing; output includes unresolved `next`, `react`, `lucide-react`, JSX intrinsic-element and Node `process` types. This is an environment/dependency blocker, not a passing project type check.
- Browser interaction, visual, responsive, keyboard, screen-reader and fluent-speaker review were not run.

### Still outstanding on ICT
- Generic curriculum topic labels and any untranslated text embedded in the code-terminal illustration need a terminology/content pass. Technology/product names should remain recognizable.
- Existing certificate titles, duration, delivery modes, cohort-size claims and any external certification relationships require institutional confirmation.
- Translations remain drafts and non-English routes remain noindexed pending full-site completion and review.

## 2026-11-16 continuation — Language catalogue interface layer

### Passed
- TypeScript compiler API transpilation passed for `src/i18n/language-catalogue.ts`, `src/app/academics/languages/page.tsx`, `src/app/academics/languages/LanguageCoursesClient.tsx`, the five language catalogue UI components, and `src/lib/localized-page-metadata.ts` (9 files).
- Static inventory check confirmed all eight configured locales are present and the eight existing language-course IDs have localized display-name entries.
- The route now selects the validated locale from `x-iiflhm-locale`; localized metadata is registered for all eight launch locales.
- Existing course records, categories, imagery, source course content, route destinations and institutional palette were retained.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found`.
- `npm run build` — exit 127: `next: not found`.
- `tsc --noEmit` — exit 2: dependencies and type declarations are unavailable, including `next`, `react`, `react-dom`, `lucide-react` and Node types; the resulting project diagnostics cannot be used to distinguish application type errors from missing dependency declarations.
- Browser rendering, modal keyboard/focus behavior, responsive checks, screen-reader review, CJK font rendering and fluent-speaker review were not run.

### Remaining language-catalogue work
- Translate all eight course descriptions, why-learn copy, learning outcomes, level descriptions, careers, examination notes, certificate descriptions and localized duration/level values.
- Review course claims and external examination availability with the institution. Keep non-English routes noindexed until all content and QA are complete.

## 2026-11-16 continuation — Admissions page shell localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks passed for `src/i18n/admissions.ts`, `src/app/admissions/page.tsx` and the touched `src/app/contact/page.tsx`.
- Admissions page locale lookup is wired to the request header established by `proxy.ts`.
- Admissions static page-shell copy has entries for all eight launch locales.
- Existing programme data, intake schedule (still empty pending confirmation), photography and institutional palette were preserved.
- Removed a duplicate import in `src/app/contact/page.tsx`.

### Blocked / not verified
- `tsc --noEmit --pretty false` remains blocked by missing installed dependencies and type declarations (`next`, React, lucide-react, Node types and related packages); it emits extensive downstream JSX/type errors as a consequence.
- `npm run lint` and `npm run build` cannot be meaningfully run because `node_modules` is absent. No claim of a passing lint or production build is made.
- Browser rendering, responsive layout, form submission, accessibility and fluent-speaker review were not performed.

### Remaining on Admissions and Contact
- AdmissionForm labels, choices, validation messages, step navigation, file states and submission states are still English.
- Checklist, process descriptions, programme cards and some admissions detail copy remain English.
- Contact page and ContactForm are not yet localized. Contact metadata coverage also needs review.

## 2026-11-16 continuation — Admissions application form

- Static review: AdmissionForm now consumes a typed eight-locale dictionary; the server route passes the validated locale; Zod validation copy is locale-dependent; canonical values are preserved; the locale is included in multipart submission metadata.
- Not run: browser interaction, real multipart submission, endpoint configuration verification, screen-reader review, and full build/lint. The working tree has no `node_modules`, so project dependencies are not installed in this environment. No live application was submitted.
- Translation status: draft translations require fluent-speaker review. Remaining page-level Admissions copy is still English and remains in the inventory as outstanding.

## Run 6 — 2026-11-16 Admissions form

- Changed-file TS/TSX syntax transpilation: PASS (three files; zero syntax diagnostics).
- Standalone strict type-check for the locale configuration and Admissions form dictionary: PASS using a temporary config mapping the existing `@/*` source alias.
- `npm run lint`: BLOCKED, `eslint: not found` (exit 127).
- `npm run build`: BLOCKED, `next: not found` (exit 127).
- Full project `tsc --noEmit`: BLOCKED by missing installed project dependencies and declarations (Next.js, React JSX runtime, lucide-react and related types).
- No browser, responsive, assistive-technology or real multipart upload test could be run. The Formspree admissions endpoint was not contacted.

## Run 7 — 2026-11-16 Admissions and Contact localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for seven changed/new TS/TSX files (`src/i18n/contact.ts`, `src/i18n/admissions-details.ts`, Contact server route/client page, ContactForm, Admissions page and localized metadata helper); zero syntax diagnostics.
- Standalone strict TypeScript check: PASS for `src/i18n/config.ts`, `src/i18n/contact.ts` and `src/i18n/admissions-details.ts` using the source alias mapping; no diagnostics.
- Contact locale flow statically wired: server route validates request locale and passes it to client UI and form; contact form uses the same locale for localized validation/status messages and submission metadata.
- Existing API field names and canonical subject values preserved. No real enquiry was sent.
- Admissions process steps, checklist, Why Apply cards and category labels now resolve from the eight-locale resource.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found` (no `node_modules` directory).
- `npm run build` — exit 127: `next: not found`.
- `npx --no-install tsc --noEmit --pretty false` — exit 2; project-wide type checking cannot proceed because Next.js, React/JSX, lucide-react, Node and other installed package/type declarations are absent. The large downstream JSX diagnostics are consequences of missing dependencies and are not evidence of a clean project type-check.
- Browser rendering, responsive checks, keyboard/focus checks, screen-reader checks and real Contact/Admissions form submission were not run.
- Contact and Admissions copy are draft translations pending fluent-speaker and institutional review. Confirm the contact map/location and the retained alumni quotation/attribution. The Formspree endpoint is not verified.

No deployment, publication, production-setting changes or external communications were performed.

## Run 8 — 2026-11-16 Career Opportunities landing page

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for `src/i18n/careers.ts` and `src/app/career-opportunities/page.tsx`; zero syntax diagnostics.
- Static locale coverage and key parity inspection: PASS; all eight launch locale objects (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`) contain the same 38 resource keys.
- Standalone strict TypeScript check: PASS for `src/i18n/config.ts` and `src/i18n/careers.ts` (`tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext ...`).
- Static implementation review: landing-page hero, intro, Germany panel, pathway cards/features, career guidance, CTAs, image alt text and metadata all use the locale resource.
- Existing three pathway routes, visual structure and source images retained.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found`.
- `npm run build` — exit 127: `next: not found`.
- `./node_modules/.bin/tsc --noEmit` — exit 127: TypeScript project executable is not installed locally. Global compiler API syntax transpilation is not a substitute for full project type-checking.
- No browser rendering, responsive, keyboard/focus, screen-reader or live locale-switching tests were possible.
- Career detail routes `/career-opportunities/apprenticeship`, `/career-opportunities/undergraduate` and `/career-opportunities/masters` remain English and are still outstanding. Draft translations require fluent-speaker and institutional review.

No deployment, publication, production-setting changes or external communications were performed.

## Run 9 — 2026-11-16 Careers detail routes

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for five changed/new TS/TSX files (`src/i18n/career-details.ts`, `src/components/careers/CareerDetailPage.tsx`, and the apprenticeship, undergraduate and masters route modules); zero syntax diagnostics.
- Resource structure validation: PASS for all eight launch locales × three Careers route kinds.
- Standalone strict dictionary type-check: PASS — `tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext src/i18n/config.ts src/i18n/career-details.ts`. Required title/description/hero/CTA copy is present; apprenticeship benefit/eligibility/qualities arrays, undergraduate pathway/eligibility/CTA arrays, and masters document/language/finance content have expected structures.
- Static implementation review: all three routes read the validated locale request header, select the matching locale dictionary, render the shared page component and generate locale-specific title, description and Open Graph metadata.
- Existing route paths and contact/careers destinations are retained. Non-English noindex protection in `proxy.ts` is unchanged.

### Blocked / not verified
- `npm run lint` — not run successfully; project `node_modules` is absent and ESLint is not installed locally.
- `npm run build` — not run successfully; project `node_modules` is absent and Next.js is not installed locally.
- Full project `tsc --noEmit` — not verified; required Next.js, React, lucide-react and related package/type declarations are not installed. Compiler API transpilation validates syntax only, not full type correctness.
- No browser rendering, responsive, keyboard/focus, screen-reader, locale-switching or fluent-speaker review was performed.
- Translation drafts and variable admissions, programme, finance, immigration and employment statements require institutional review.

No deployment, publication, production-setting changes, external communications or live form submissions were performed.

## Run 10 — 2026-11-16 Gallery localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for six changed/new TS/TSX files (`src/i18n/gallery.ts`, gallery server route/client, `CategoryFilter`, `GalleryGrid`, `LightboxModal`); zero syntax diagnostics.
- Static resource inventory: PASS for all eight launch locale objects and six original image IDs.
- Static implementation review: page locale flows from the server route into the client gallery; visible filter labels, captions, empty state and lightbox labels use the locale resource. Original image paths, IDs, categories and order are retained.
- Gallery filter buttons expose `aria-pressed` and visible keyboard focus styles. Image cards use semantic buttons and accessible names. Lightbox exposes dialog semantics and Escape-key dismissal.

### Blocked / not verified
- `npm run lint` and `npm run build` remain blocked by absent `node_modules` (`eslint: not found`, `next: not found`).
- Full project `tsc --noEmit` remains blocked by missing Next.js, React, lucide-react and related type dependencies.
- No browser rendering, responsive layout, keyboard navigation/focus trap, screen-reader or real lightbox interaction test was run. Escape dismissal and scroll-lock behavior are statically reviewed only.
- Translation drafts require fluent-speaker and institutional review.

No deployment, publication, production-setting changes or external communications were performed.

## Run 11 — 2026-11-16 News and media localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for three changed/new TS/TSX files (`src/i18n/news.ts`, News server route and `NewsPageClient.tsx`); zero syntax diagnostics.
- Standalone strict dictionary type-check: PASS — `tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext src/i18n/config.ts src/i18n/news.ts`.
- Runtime dictionary coverage check: PASS for eight locales, four article records, two video records and six filter categories per locale.
- Static review: locale is resolved in the server route and passed to the client; localized metadata, article copy, category labels, dates, video titles/subtitles and UI states use the resource.
- Existing article URLs, dates, media IDs, source images and ordering are preserved. The expired September 2026 intake notice is clearly labelled historical and the past deadline/currently-open claim is removed.

### Blocked / not verified
- `npm run lint` and `npm run build` remain blocked by missing `node_modules` (`eslint: not found`, `next: not found`).
- Full project `tsc --noEmit` remains blocked by missing Next.js, React, lucide-react and related declarations.
- Browser rendering, responsive layout, video playback, external link behavior, keyboard/screen-reader and fluent-speaker QA were not run.
- The original media sources and external factual claims require institutional verification; translations are drafts.

No deployment, publication, production-setting changes or external communications were performed.

## Run 12 — 2026-11-16 Student Voices localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for three changed/new TS/TSX files (`src/i18n/student-voices.ts`, Student Voices server route and client component); zero syntax diagnostics.
- Standalone strict dictionary type-check: PASS — `tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext src/i18n/config.ts src/i18n/student-voices.ts`.
- Static media path check: PASS for `Damaris.mp4`, `Daniel.mp4`, `Zablon.mp4` and `master-chef.mp4`; corrected prior lower-case path mismatches.
- Static review: eight locale dictionaries contain six existing testimonial records; locale-aware metadata and page content are wired; names, initials, source video assets and order are preserved.
- Video preview controls are semantic buttons; video modal has dialog semantics, close label, Escape-key dismissal and body scroll locking.

### Blocked / not verified
- `npm run lint` and `npm run build` remain blocked by missing `node_modules` (`eslint: not found`, `next: not found`).
- Full project type-check remains blocked by missing Next.js, React, Framer Motion, lucide-react and related declarations.
- Browser video playback, modal focus restoration/trapping, responsive layout, keyboard and screen-reader QA were not performed.
- Translated testimonials require review and approval by the speakers/institution; translations are drafts.

No deployment, publication, production-setting changes or external communications were performed.

## Run 13 — 2026-11-16 Student Voices, Privacy and Terms

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for nine changed/new TS/TSX files (Student Voices resource/routes/client, legal resource/routes, and News files rechecked); zero syntax diagnostics.
- Standalone strict dictionary checks: PASS for `student-voices.ts`, `legal-pages.ts` and `news.ts` with `src/i18n/config.ts` using global TypeScript.
- Local video asset path check: PASS for Damaris, Daniel, Zablon and master-chef video files with case-sensitive names.
- Static route review: Student Voices, Privacy and Terms resolve the validated locale header and use localized metadata/content.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found` (no `node_modules`).
- `npm run build` — exit 127: `next: not found` (no `node_modules`).
- Full project `tsc --noEmit` remains blocked by missing Next.js, React, Framer Motion, lucide-react and related declarations.
- No browser rendering, responsive, video playback, modal focus-trap/keyboard, screen-reader or fluent-speaker review was performed.
- Privacy and Terms pages still contain only the short text from the original codebase. They are not complete legal documents; institution-approved source text and qualified legal review are required.
- Testimonial translations need speaker and institutional approval.

No deployment, publication, production-setting changes or external communications were performed.

### Exact project-level commands rechecked in Run 13
- `npm run lint` — exit 127; shell output: `eslint: not found`.
- `npm run build` — exit 127; shell output: `next: not found`.
- `tsc --noEmit --pretty false` — exit 2; project-wide diagnostics are dominated by unresolved installed packages/types, including `next`, `react`, `framer-motion`, `lucide-react` and `react/jsx-runtime`. This is not a successful project type-check.

## Run 14 — 2026-11-16 language-course detail narrative localization

### Passed
- TypeScript compiler API `transpileModule` syntax checks: PASS for `src/i18n/language-course-details.ts` and `src/components/languages/LanguageModal.tsx` (zero syntax diagnostics).
- Standalone strict type-check of the new locale resource: PASS after substituting the project alias import with the equivalent explicit eight-locale union for this isolated check. The repository's `@/` alias cannot be resolved by an isolated one-file command without the project tsconfig.
- Runtime structural validation: PASS for 64 localized course narrative records (8 existing course IDs × 8 locales) and 96 proficiency-stage label/description records (12 level codes × 8 locales).
- Static review confirms the modal reads the locale resource using stable course IDs and preserves source level codes, duration values, external exam names, certificate wording, course order and image paths.
- No project-wide dependencies were installed or changed. No deployment, live form submission or production configuration changes occurred.

### Partial / not verified
- Learning outcomes, career-area labels, card career previews and course-specific certificate/examination explanations remain English or source-controlled. The language catalogue is not yet fully localized.
- `npm run lint` and `npm run build` remain blocked by the absent/incomplete project dependency installation (`eslint` and `next` unavailable in `node_modules`).
- Full project TypeScript check, browser rendering, responsive layout, keyboard/focus, screen-reader, CJK font rendering and fluent-speaker review were not performed.
- Translation drafts require review by fluent speakers and institutional approval. Confirm certificate names/scope and availability of external examination preparation before publication.

## Run 15 — 2026-11-16 language-course outcomes and career localization

### Passed
- TypeScript compiler API syntax transpilation: PASS for `src/i18n/language-course-content.ts`, `LanguageModal.tsx`, `LanguageGrid.tsx` and `FeaturedLanguage.tsx`; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts`, `language-course-content.ts` and `language-course-details.ts` using a temporary external tsconfig with the repository `@/*` path mapping; no project files or dependency manifests were changed for this check.
- Runtime structural validation: PASS for eight existing course records × eight locales (64 entries); every localized outcome and career array is populated and exactly matches the source record's item count.
- Static review: course-card summaries, career previews, modal outcomes, career areas, duration units and level-range connectors now use locale-aware content. Source numeric ranges, official proficiency codes, external exam names, certificate titles, course IDs, order and image paths remain unchanged.
- Certificate award conditions/recognition and examination availability are explicitly qualified for institutional confirmation; career fields are presented as related areas, not guaranteed outcomes.

### Blocked / not verified
- `npm run lint` — exit 127: `eslint: not found` (the project `node_modules` directory is absent).
- `npm run build` — exit 127: `next: not found` (the project `node_modules` directory is absent).
- `tsc --noEmit --pretty false` — exit 2: project-wide check is blocked by missing Next.js, React, lucide-react, Tailwind and Node type dependencies; diagnostics include unresolved framework modules and JSX types. This is not a successful project type-check.
- Browser rendering, responsive layout, course-modal keyboard/focus behavior, screen-reader and CJK font QA were not performed.
- All eight locale translations remain drafts pending fluent-speaker and institutional review.

No dependency installation, deployment, publication, production-setting change, live submission or external communication was performed in Run 15.

## Run 16 — 2026-11-16 Academics catalogue card localization

### Passed
- TypeScript compiler API syntax transpilation: PASS for `src/i18n/academics-catalogue.ts` and `src/app/academics/page.tsx`; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `academics-catalogue.ts` with repository alias mapping.
- Runtime dictionary coverage: PASS for all eight locales; each has five track feature arrays with four entries each, three neutral highlight labels and a non-empty localized action label.
- Static route check: language-course card now points to existing `/academics/languages`; Germany pathways card points to existing `/career-opportunities`.
- Content review: removed unverified promotional card claims around placements, cohort caps, specific facilities, employer links and visa consultation; existing tracks and image assets remain unchanged.

### Blocked / not verified
- `npm run lint`, production build and full-project type check remain blocked by absent `node_modules`; see Run 15 QA results for exact current command outcomes.
- Browser rendering, responsive layout, link navigation under locale-prefixed routes and screen-reader review were not performed.
- Translation drafts require fluent-speaker and institutional review.

No deployment, publication, production-setting changes or external communications were performed.

## Run 17 — 2026-11-16 shared layout localization and locale selector

### Passed
- TypeScript compiler API syntax transpilation: PASS for `shared-layout.ts`, Navbar, Footer, WhatsAppFAB and LanguageSelector; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `shared-layout.ts` with the repository path alias.
- Static review confirms the shared copy resource covers all eight locale keys and is consumed by the corresponding shared components.
- Language selector now appends the current query string and hash to the page-aware locale destination.

### Blocked / not verified
- Full lint, production build and project-wide type check remain blocked by absent dependencies (`eslint` and `next` not found; missing React/Next.js declarations).
- Actual locale route transition, query/hash preservation, mobile menu interaction, focus handling and screen-reader behavior were not browser-tested.
- Translation drafts require fluent-speaker and institutional review.

No deployment, publication, production-setting changes or external communications were performed.

### Exact project-level commands rechecked after Run 17
- `npm run lint` — exit 127; `eslint: not found`.
- `npm run build` — exit 127; `next: not found`.
- `tsc --noEmit --pretty false` — exit 2; 3,299 diagnostic lines, led by unresolved `next`, `next/server`, `next/image`, `next/link`, `next/headers`, React JSX runtime/types, `lucide-react`, Tailwind and Node `process` declarations. This is a dependency/environment blocker, not a clean project type check.
- Combined isolated strict dictionary check — PASS for `config.ts`, `language-course-content.ts`, `language-course-details.ts`, `academics-catalogue.ts` and `shared-layout.ts`.
- Syntax transpilation — PASS for 11 changed/new TS/TSX files in Runs 15–17; zero syntax diagnostics.

## Run 18 — 2026-11-16 Academics detail metadata

### Passed
- TypeScript compiler API syntax transpilation: PASS for `localized-page-metadata.ts`, German-language route and Nursing Preparation route; zero syntax diagnostics.
- Static review confirms both new metadata keys include all eight locale entries and both routes call the shared metadata helper.
- Static asset check: `/images/academics/german-pathway.jpg` exists for Nursing Preparation metadata.
- Nursing route's previously hard-coded academic-programme eyebrow now reads from its eight-locale dictionary.

### Blocked / not verified
- Full project lint, type-check and production build remain blocked by missing `node_modules` (`eslint` and `next` not found; framework type declarations unresolved).
- Browser metadata inspection, route rendering and locale-prefixed navigation were not performed.
- Localized canonical/hreflang remains outstanding; non-English routes remain noindex under the proxy policy.

## Run 19 — 2026-11-16 reusable Academics components

### Passed
- TypeScript compiler API syntax transpilation: PASS for the new Academics component dictionary and four reusable TSX components; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `academics-components.ts` with repository alias mapping.
- Runtime key coverage: PASS for all eight locales across all 13 shared component labels; no missing or blank values.
- Static link review: internal destinations use `localePath` in ProgramCard, ProgramGrid and ProgramDetail.
- Static caller search: `ProgramGrid` and `ProgramDetail` are currently not imported by any app route; this is a component readiness update, not evidence of live route rendering.

### Blocked / not verified
- Full lint, project type-check and production build remain blocked by absent dependencies (`eslint` and `next` not found; unresolved framework types).
- No live browser rendering, keyboard, responsive, screen-reader or locale-prefixed route test was run.
- Translations remain drafts pending fluent-speaker review.

## Run 20 — 2026-11-16 language-course modal accessibility

### Passed
- TypeScript compiler API syntax transpilation: PASS for `LanguageModal.tsx`; zero syntax diagnostics.
- Static implementation review: dialog role, aria-modal, labelled/described-by IDs, initial close-button focus, Tab/Shift+Tab focus containment, Escape dismissal, body-scroll lock and focus restoration are present.
- Logical `end` positioning and `rtl:rotate-180` directional icon variants are present; dialog `dir` derives from the selected locale configuration.

### Blocked / not verified
- No browser automation/runtime available: focus entry/trap/restoration, Escape behavior, screen-reader announcements, background scroll lock, animation/reduced-motion and RTL rendering were not interactively tested.
- Full lint/build/type-check remain blocked by absent dependencies.

## Run 21 — 2026-11-16 shared accessible-dialog behavior

### Passed
- TypeScript compiler API syntax transpilation: PASS for the new shared hook, LanguageModal, Gallery LightboxModal/GalleryPageClient, ICTPageClient, StudentVoicesPageClient and student-voices resource; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `student-voices.ts`, confirming the new dialog title key is supplied for all locales.
- Isolated strict hook type-check: PASS using a temporary React `RefObject`/`useEffect` signature stub because actual React type packages are not installed.
- Static review confirms the shared dialog hook handles initial focus, focus containment, Escape, body-scroll lock and focus restoration; all four active modal implementations reference it.

### Blocked / not verified
- No browser automation or runtime: interactive focus movement, media controls, Escape, focus restoration, screen-reader announcement, scroll locking and RTL rendering were not tested.
- Full lint, project type-check and production build remain blocked by absent project dependencies.

## Run 22 — 2026-11-16 language catalogue hero and route integrity

### Passed
- TypeScript compiler API syntax transpilation: PASS for seven changed/new TS/TSX files; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts` and `language-catalogue.ts`.
- Runtime dictionary coverage: PASS for all eight locales; hero alt, course count/level labels, conditional framework label and four featured tags are present.
- Static route integrity: PASS; no `/academics/language-courses` references remain under `src`, and the target `/academics/languages` route exists.
- Static review confirms locale-aware links on language course card/modal, LanguageHero, Academics cards/CTAs and Student Voices CTA.

### Blocked / not verified
- Full lint/build/project type-check remain blocked by missing dependencies.
- Browser display, actual locale navigation, query preservation, image alt announcement and mobile layout remain untested.

## Run 23 — 2026-11-16 locale-aware internal navigation

### Passed
- TypeScript compiler API syntax transpilation: PASS for 17 changed TSX files across home, About, Admissions, Contact, News, Academics and Careers; zero syntax diagnostics.
- Static source search: no hard-coded JSX internal hrefs remain for the audited route families; Navbar/Footer retain canonical path data but apply locale via their existing helper.
- Static stale-route check: `/programs` replaced with `/academics`; `/academics/language-courses` had already been replaced by `/academics/languages` in Run 22.
- News external links remain unchanged; internal News record links are passed through `localePath`.

### Blocked / not verified
- Actual browser navigation, Next.js proxy/rewrite behavior, query/hash retention across all link types and back/forward behavior were not tested.
- Full lint, project type-check and production build remain blocked by missing dependencies.

## Run 24 — 2026-11-16 localized canonical metadata and sitemap safeguards

### Passed
- TypeScript compiler API syntax transpilation: PASS for 11 changed metadata/sitemap files; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `config.ts`, `constants.ts` and `localized-page-metadata.ts` using temporary Next Metadata/headers and process type stubs because Next/Node packages are absent.
- Static route review: shared metadata helper and all custom metadata routes now call `getLocalizedAlternates` for self-canonical URLs.
- Static indexing review: proxy still applies noindex to all non-English localized routes; Privacy and Terms now set noindex for all locales and are excluded from sitemap.
- Sitemap remains unprefixed English route set only; no localized URLs are submitted while noindex is active.

### Blocked / not verified
- Browser/production response inspection of canonical tags and X-Robots-Tag was not possible without Next.js runtime.
- Hreflang, structured data and final robots policy review remain outstanding; hreflang is deliberately withheld until translation review.
- Full lint, project type-check and production build remain blocked by missing dependencies.

## Run 25 — 2026-11-16 institutional structured data

### Passed
- TypeScript compiler API syntax transpilation: PASS for `structured-data.ts` and root `layout.tsx`; zero syntax diagnostics.
- Isolated strict TypeScript check: PASS for `constants.ts` and `structured-data.ts` with a temporary Node process declaration.
- Static content review: JSON-LD uses only existing SITE_CONFIG/SOCIAL_LINKS fields and existing logo/hero asset paths; no unverified institutional claims were introduced.
- Static safety review: serialized JSON replaces `<` with the escaped `\\u003c` sequence before insertion.

### Blocked / not verified
- Schema validation against the live rendered page, crawler inspection and production URL/image resolution were not possible without the Next.js runtime.
- Full lint/build/project type-check remain blocked by missing dependencies.

### Dependency restoration attempt after Run 25
- `npm ci --no-audit --no-fund` — timed out after 120 seconds before Next.js/ESLint became available. A partial 1.9 MB `node_modules` directory was removed; no package manifest or lockfile changes were retained. Full lint/build/type-check therefore remain blocked pending a successful dependency install in a network-enabled environment.
- JSON-LD runtime shape check: PASS; `EducationalOrganization` record contains the expected 14 grounded fields, Narok/KE address and no accreditation/founder/award claims.

## Run 26 — 2026-11-17 locale navigation and preview indexing safeguards

### Passed
- TypeScript syntax transpilation completed for all 111 `.ts`/`.tsx` source/config files with zero syntax diagnostics.
- Locale helper behavior checks passed for English canonical internal links (`/about`), explicit English selection (`/en/about`), German-prefixed links, Chinese locale switching and removal of stale locale prefixes.
- `LanguageSelector` now uses `localeSwitchPath()` to persist the selected locale; normal `localePath()` calls use canonical unprefixed English paths and locale-prefixed non-English paths.
- `robots.ts` now disallows crawling on Netlify deploy previews/branch deploys (`CONTEXT` other than `production`) and Vercel previews.
- Existing logo and hero image files referenced by structured data are present.
- All 20 current App Router page modules contain page metadata or a metadata generator.

### Blocked / not verified
- `npm ci --no-audit --no-fund` timed out; the dependency tree remains unavailable.
- `package.json` and `package-lock.json` declare Next.js `^16.2.4` alongside `eslint-config-next` `15.1.0`. Align these using a network-enabled npm install/lockfile update; do not manually fabricate lockfile dependency metadata.
- ESLint, full project type-check, production build, browser testing, crawler response inspection, responsive testing, keyboard/screen-reader testing and Simplified Chinese typography testing remain outstanding.
- Translation quality and institutional factual claims have not received fluent-speaker/institutional approval.

### Release caveats
- Privacy and Terms remain incomplete placeholders and must stay noindex and excluded from the sitemap until complete approved legal documents are supplied and reviewed.
- All non-English routes remain `noindex, follow`; hreflang and localized sitemap entries remain deferred pending complete translations, approval and QA.

## Run 33 — Netlify admissions-form TypeScript blocker correction (2026-11-17)

### Passed
- Corrected `StepIndicator` in `src/components/admissions/AdmissionForm.tsx`: its connector condition now uses the `labels` prop length instead of the undeclared `STEPS` identifier reported by Netlify at line 161.
- Preserved the existing admissions form flow and behavior; no type-check suppression or build bypass was introduced.
- `npm run audit:i18n`: PASS.
- `npm run typecheck:i18n -- --pretty false`: PASS.
- `npm run audit:tooling`: PASS, with the existing note that Next.js-specific ESLint core-web-vitals rules are not loaded.
- TypeScript compiler API syntax transpilation: PASS for 109 TS/TSX files, zero syntax diagnostics.
- `node --check` for both project audit scripts: PASS.
- Static check: no remaining `STEPS` references under `src`; step connector uses `labels.length`.

### Blocked / not verified
- `npm ci --ignore-scripts --no-audit --no-fund` timed out before completing dependency installation.
- Full `tsc --noEmit` remains blocked by missing `estree`, `json-schema`, `node`, `react` and `react-dom` type packages.
- Runtime `npm run lint` and a fresh `npm run build` could not be run because the Next.js/ESLint executables are unavailable in the incomplete dependency tree.
- The supplied Netlify log showed that Next.js compilation passed before the original TypeScript error, but a complete post-fix Netlify build has not yet been observed.

### Release handover
- In a network-enabled environment, install from the lockfile with `npm ci`, then run `npm run audit:i18n`, `npm run typecheck:i18n`, `npm run audit:tooling`, `npm run lint`, `npx tsc --noEmit` and `npm run build`.
- Do not bypass TypeScript or lint failures. Existing Run 32 release caveats remain applicable.
