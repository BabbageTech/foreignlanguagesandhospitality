# IIFLHM Codebase Audit

Audit baseline: supplied `foreignlanguagesandhospitality-main` archive. This report distinguishes observed code from items that require institutional confirmation.

## 1. Architecture

- Next.js App Router with route modules under `src/app` and reusable React components under `src/components`.
- TypeScript strict mode is enabled in `tsconfig.json`, but the original `next.config.ts` disabled build-time ESLint and TypeScript checks. Those bypasses have been removed.
- Styling uses Tailwind CSS 3, DaisyUI, custom institutional colour tokens, and global CSS. Motion uses Framer Motion; icons use lucide-react; forms use React Hook Form and Zod.
- Existing server/client component boundaries are mixed. Navbar, Footer, WhatsApp CTA, forms, gallery interactions and several page sections are client components. The global layout remains a server component.
- The original app uses unprefixed routes. Locale-prefixed URLs are now rewritten by `proxy.ts` to the existing route tree, preserving existing English URLs and avoiding a wholesale move of every page.

## 2. Route inventory

- `/`
- `/about`
- `/academics` and `/academics/{german-language,hospitality-management,ict,languages,nursing-preparation,travel-tourism}`
- `/admissions`
- `/career-opportunities` and `/career-opportunities/{apprenticeship,masters,undergraduate}`
- `/contact`
- `/gallery`
- `/news`
- `/student-voices`
- `/privacy`, `/terms`
- `/api/submit-form`

The original route tree is preserved. The locale middleware supports `/en/...`, `/de/...`, `/sw/...`, `/fr/...`, `/es/...`, `/nl/...`, `/it/...` and `/zh/...` URL prefixes.

## 3. Existing visual identity

Observed design system: institutional navy `#0A2540`, red `#E30613`, gold `#F2C12C`, white/light-neutral surfaces, strong headings, rounded cards, photography-led sections and prominent calls to action. The implementation preserves these foundations. Existing media assets and the programme catalogue were retained.

## 4. Changes implemented in this pass

- Added typed locale configuration, native language names, locale display metadata, a modular shared-message resource for eight launch locales and locale-aware `Intl` formatting helpers.
- Added locale-prefixed URL rewriting, a language selector, query-string preservation when switching language, locale-aware primary navigation/footer links, locale-specific `<html lang>` and direction metadata, and locale-specific WhatsApp enquiry copy.
- Kept the original unprefixed English routes working. Locale-prefixed non-English routes are marked `noindex, follow` until their full page content is professionally translated and QA-certified. This prevents incomplete mixed-language pages from being indexed as complete localized experiences.
- Centralized public contact, site and social configuration in `src/lib/constants.ts`. Removed unverified Instagram/YouTube placeholder links. Retained the Facebook URL already present in the footer.
- Made production site origin configurable with `NEXT_PUBLIC_SITE_URL`; removed the Vercel preview hostname from global metadata.
- Removed build settings that ignored TypeScript and ESLint errors. Updated the lint script to `eslint .` for the current Next.js toolchain.
- Removed simulated newsletter subscription success from `FinalCTA` and the News page; both now direct visitors to real admissions/contact routes.
- Corrected case-sensitive intake-video and prospectus asset references.
- Removed unsupported visa-success/legal-compliance percentages, placement guarantees and response-time promises from prominent conversion areas. Other pathway and historical news claims still require institutional review.
- Hardened `/api/submit-form`: validates request size and fields, applies the existing honeypot, requires a configured provider, returns a service-unavailable response rather than pretending a submission succeeded, and forwards locale/source metadata.
- Replaced expired September 2026 intake promises and unverified fixed intake deadlines in admissions/contact UI with a clear request to confirm current dates with admissions. The form's intake option no longer presumes unconfirmed dates.
- Improved skip navigation, focus visibility, long-text wrapping, CJK fallback handling and reduced-motion CSS.
- Added `robots.ts`, `sitemap.ts`, `.env.example`, this audit, the i18n guide, translation inventory and QA report.

## 5. Findings still requiring work or business confirmation

### Contact and identity conflicts

- `SITE_CONFIG` originally listed two phone numbers and two `foreignlanguagesandhospitality.com` email addresses. Other files used `info@ifl.ac.ke`, `info@iiflhm.ac.ke`, a different tel link target, and multiple WhatsApp numbers. The code now reads the central values where updated, but the institution must confirm which number is the official WhatsApp line and whether both email domains remain active.
- The footer previously used a Narok Road address while the central config said Newline Building, Narok. The implementation uses the central location string. Confirm the exact postal/physical address before publication.
- `foreignlanguagesandhospitality.com` is the current fallback origin because it was already present in the central config and metadata helper. Confirm domain ownership, canonical host and HTTPS before setting `NEXT_PUBLIC_SITE_URL` in production.
- The existing Facebook profile URL was preserved. Instagram and YouTube were omitted because their URLs were placeholders or unavailable. Supply official profile URLs if those accounts should appear.
- Some source content describes Nairobi and Narok campuses/locations inconsistently. The codebase does not establish which are current teaching locations; verify before making location claims. The German-language metadata previously claimed examination delivery in Nairobi while the central site configuration identified Narok; the metadata has been made location-neutral.

### Programme and marketing claims

- Unsupported or time-sensitive marketing claims were found in the original source: `94%` graduate employment, `98%` visa success, `100%` legal compliance, `100+` alumni/placements, `15+` accredited programmes, `25+` industry partners, `600+` training hours, fixed 48-hour/24-hour response promises, scholarship/fully funded placement statements, employer-partnership guarantees, fixed visa-finance amounts and fixed intake dates. Prominent unsupported percentages, guarantees, response times and expired dates were removed or qualified. A full institutional/legal review remains required.
- Other claims still require evidence or written institutional approval before publication: course durations and exact fees; IIFLHM-issued certificates and their recognition; Goethe/TestDaF/IELTS/DELF/HSK exam availability and authorized examination locations; instructor credentials; IATA short-course availability; CompTIA alignment; named employer/university/association partnerships; Narok County recognition; alumni outcomes and quotations; visa/blocked-account advice; course entry requirements; and any job-placement service scope.
- The admissions prospectus contains fees and visa-related information. Its currentness has not been verified. The undergraduate and postgraduate pages have been qualified to avoid fixed financial/visa claims, but their specific eligibility guidance still needs professional review.
- The September 2026 news item is now explicitly framed as a historical announcement; the institution should verify the underlying announcement before keeping it published. News stories describing employer/association partnerships and government recognition should be supported by current source documents and approved wording.
- The prospectus PDF is present at `public/docs/bronchure.pdf`; its spelling is preserved in the existing route. Verify its content and update date before describing its fees, visa requirements or programme details as current.
- Alumni/student stories are retained as supplied. Obtain consent and verify names, roles and quotations before republishing or translating them.

### Functionality

- `ContactForm` now submits through the hardened same-origin API endpoint. `AdmissionForm` still submits directly to its separate Formspree endpoint because it supports file uploads; it needs a deliberate multipart/file-storage design before migration.
- Honeypot protection is not a complete abuse/rate-limiting strategy. Add provider-side spam controls and/or edge rate limiting before high-volume production use.
- The API route does not currently accept file uploads; admission documents are submitted through the configured Formspree admissions endpoint.
- The former newsletter UI was simulated and has been removed rather than pretending to subscribe users.

## 6. Localization coverage boundary

The first implementation establishes locale routing and shared interface resources, and localizes the primary navigation, language selector, footer headings/utility links and WhatsApp message. It does **not** yet translate every page, form, validation message, programme description, FAQ, legal page, testimonial, image caption, aria-label or metadata field into all eight languages. Non-English prefixed pages are therefore noindexed until the content migration and QA phase is complete. See `I18N_GUIDE.md` and `TRANSLATION_INVENTORY.md`.

## 7. SEO and accessibility gaps

- Global metadata now derives from one site origin and a sitemap/robots endpoint exists. Full page-by-page localized titles/descriptions, canonical/hreflang alternates, localized OG metadata and localized JSON-LD remain outstanding.
- Sitemap currently lists only the existing English canonical routes; it intentionally does not list incomplete translated routes.
- Structured data needs a verified institutional identity/address/phone and page-specific course data before safe publication.
- Existing modal components need a dedicated keyboard/focus-trap audit. Some forms and page-specific components need translated validation and server response messages.
- Responsive testing at 320–1440 px and assistive-technology testing require browser/device QA; they cannot be certified from static inspection alone.

## 8. Technical debt / next steps

1. Confirm canonical domain, phone/WhatsApp ownership, official emails, physical locations and social URLs.
2. Migrate every page to locale-aware messages and localized content models; then remove temporary `noindex` for fully translated routes.
3. Add route-specific metadata and complete `hreflang` clusters only for genuinely translated page equivalents.
4. Consolidate admissions and contact forms, including a secure file-upload strategy and rate limiting.
5. Audit all business/credential/employment/visa/placement claims and update outdated news/intake content.
6. Run lint, typecheck, production build, browser functional tests, accessibility checks and responsive screenshot tests in a supported Node environment.


## Iteration update — localized metadata

Localized title, description and Open Graph metadata are now implemented for the homepage, About, Academics, Admissions, Hospitality Management and Travel & Tourism routes in all eight launch locales. Metadata is generated from the locale header supplied by the proxy. Other routes retain their existing metadata and require a separate migration. Non-English routes remain `noindex, follow`; hreflang clusters and localized structured data are not yet complete. Runtime build verification remains outstanding.

## Iteration update — homepage translation phase 1 (2026-11-11)

- Added `src/i18n/home.ts` with translated homepage hero slide copy, intake banner copy, and closing CTA copy for `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, and `zh`.
- Updated `src/app/page.tsx` to resolve the validated locale from the proxy request header and pass it into the three migrated components.
- Updated `Hero`, `IntakeBanner`, and `FinalCTA` to render the selected locale while preserving existing imagery and navigation destinations.
- Remaining homepage sections are not translated yet. No locale indexing safeguards were changed.

## 2026-11-11 homepage localization follow-up

The homepage section components now consume a typed eight-locale resource (`src/i18n/home-sections.ts`). This migrates the previously English-only institutional introduction/vision/mission, programme highlight cards and feature lists, Why Choose Us content, student-voice quotations/role labels, and FAQ copy. Locale is passed from the homepage route into each component. FAQ buttons expose expanded state and controlled-panel relationships. Existing brand palette, images, section layout, navigation destinations, testimonial names/locations, and programme categories are retained. This is a homepage-only completion; other route bodies and forms remain outstanding.

## 2026-11-11 About route localization follow-up

The About page and its five section components now consume `src/i18n/about.ts` for all eight configured locales. Localized areas include the hero, mission/vision, core values, facilities, founder profile, faculty/team titles and biographies, image alternatives and closing CTA. Locale is resolved through the validated request header. Existing image assets, people names, role meaning, page composition and brand palette remain intact. This migration is not yet independently browser-tested and the institution should validate staff/founder/facility facts before publication.


## 2026-11-16 continuation — Hospitality Management and Travel & Tourism

- Added `src/i18n/hospitality-tourism.ts` with complete route-specific copy for the Hospitality Management and Travel & Tourism detail pages in all eight launch locales. The resources include hero text, metadata descriptions, programme introductions, qualification/metric labels, six learning-area bullets per route, sidebar information, calls to action and descriptive image alternatives.
- Migrated `src/app/academics/hospitality-management/page.tsx` and `src/app/academics/travel-tourism/page.tsx` from static client components to locale-aware server components using the existing validated `x-iiflhm-locale` request header. Existing page composition, colours, image assets and route targets are retained.
- Added localized metadata records for both routes in `src/lib/localized-page-metadata.ts`; the helper supplies canonical and Open Graph metadata using the existing site-origin configuration. The proxy continues to emit `X-Robots-Tag: noindex, follow` on non-English routes.
- Qualified the Travel & Tourism Bronze Level Tour Guide certification wording: the current awarding body, requirements and availability must be confirmed, and the page no longer implies that IIFLHM issues an external certificate.
- Existing qualification, duration, KNEC and KCSE information remains as supplied in the source and still requires institutional confirmation before publication.
- Static syntax and eight-locale resource coverage checks passed. Full project type-check, lint and build remain blocked by the incomplete dependency installation; browser and fluent-speaker review have not been performed.

## 2026-11-16 continuation — ICT programme localization (interface layer)

- Added an eight-locale ICT interface resource at `src/i18n/ict.ts` and separated the interactive ICT page into `src/app/academics/ict/ICTPageClient.tsx` so the route can resolve the validated locale on the server and pass it into the client UI.
- Added route metadata for ICT in `src/lib/localized-page-metadata.ts` and connected it through the new server route entry point.
- Localized the ICT page hero, section headings, summary copy, feature-card headings/descriptions, statistics labels, course-detail modal headings, metadata labels, calls to action and final admissions prompt in `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- Preserved the four existing ICT course records, technical names, images, curriculum modules, career labels and certification wording. These course-specific records remain English and have not been represented as fully localized. Non-English routes remain protected by the existing `noindex, follow` safeguard.
- TypeScript compiler API syntax transpilation passed for the ICT resource, server route, client page and metadata helper. Full project checks remain blocked by absent installed dependencies (`next`, `eslint`, React and related type packages).
- Next priority: complete localized ICT course data and modal content, then migrate the language-course catalogue and modal data for all eight interface locales.


## ICT course records and modal content — 2026-11-16 continuation

- Added `src/i18n/ict-courses.ts`, providing locale-specific copy for all four existing ICT course records in `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- The course cards and detail modal now use localized course titles, taglines, descriptions, duration values, levels, delivery modes, learning outcomes, curriculum module headings and career-path labels. The existing course order, images, skill tags, module topic tags, technical product names, course records and source certificate titles are retained. Duration units are localized.
- Localized the course-detail action, the modal close accessible name, the practical-lab statistic and the IIFLHM advantage section heading.
- Cybersecurity copy was adjusted to describe preparation pathways rather than imply that the programme itself awards CompTIA/CEH credentials.
- Course translations are working drafts. Module topic tags and technology/product labels remain in their supplied technical form; the certificate titles, durations, delivery availability, cohort-size claim and other programme facts require institutional confirmation.
- Static TypeScript/TSX transpilation passed for `ict.ts`, `ict-courses.ts` and `ICTPageClient.tsx`. Runtime structural validation passed for eight locales × four courses, with required copy and expected outcome/module/career array lengths.
- Full lint/build/type checking remains blocked by absent installed dependencies; see QA report.

## 2026-11-16 continuation — Language catalogue interface localization

- Converted `src/app/academics/languages/page.tsx` into a locale-aware server entry point using the validated `x-iiflhm-locale` request header and introduced `LanguageCoursesClient.tsx` for the interactive catalogue.
- Added `src/i18n/language-catalogue.ts` with localized catalogue UI copy for all eight launch locales and localized display names for all eight existing language course records.
- Updated the language hero, category filter, featured programme panel, course grid and course detail modal to consume the selected locale. Preserved course record IDs/order, categories, original native names, existing images, levels, durations, career/exam data, and admissions/contact destinations.
- Added localized route metadata in `src/lib/localized-page-metadata.ts` for `/academics/languages`.
- Course descriptions, outcomes, proficiency-level descriptions, career/examination text, certification wording, and duration/level values remain largely English. The route must not be reported as fully localized. Existing qualification and external-exam statements require institutional confirmation. Keep non-English noindex protection in place.
- Static TypeScript compiler API transpilation passed for all nine modified/new TS/TSX files. This checks TS/TSX syntax only; it is not a full project type check or runtime build.

## 2026-11-16 continuation — Admissions page shell localization

- Added `src/i18n/admissions.ts` with page-level admissions copy for all eight launch locales.
- The server-rendered Admissions route now resolves the request locale from `x-iiflhm-locale` and uses the resource for its hero, introductory copy, application section headings, intake status notice, prospectus panel, support panel and lower call to action.
- The programme catalogue data, contact values, existing visual identity and route structure were not changed.
- This is a bounded page-shell migration, not completion of Admissions: the interactive `AdmissionForm`, document checklist, application-process step descriptions, programme-card descriptions and some detailed content remain English and require their own translation pass.
- Removed a duplicate `SITE_CONFIG` import from the Contact page discovered during review. Contact page copy and its form remain outstanding.

## 2026-11-16 continuation — Admissions application form

- Migrated the three-step AdmissionForm interface to a dedicated eight-locale dictionary, including field labels, step labels, help text, upload states, review summary, consent, validation feedback, processing/error/success states and action labels.
- Zod validation messages now use the active locale. The Admissions server page passes its validated locale to the client form.
- The form submits that validated locale as metadata, avoiding incorrect `en` attribution when a locale cookie is active on an unprefixed legacy route.
- Canonical form values, programme names, campus identifiers, intake values and backend field keys remain unchanged. The multipart Formspree workflow remains in place.
- Remaining Admissions gaps: page-level process-step descriptions, required-document checklist, Why Apply card content, qualification option display labels, and programme grouping labels require translation; the source programme names must remain canonical. The form's external endpoint and file handling require environment configuration and live test submission before operational verification.

## Run 7 — 2026-11-16 Admissions and Contact continuation

- Admissions page: required-document checklist, application-process steps, Why Apply cards, alumni quote labels/role and programme category labels now use locale-specific copy from `src/i18n/admissions-details.ts` across all eight launch locales. Canonical programme names remain source-controlled. Existing testimonial content/attribution is preserved but still needs institutional approval.
- Contact route: split into a server locale-resolving route (`src/app/contact/page.tsx`) and client UI (`ContactPageClient.tsx`). Contact page content, contact-card labels, quick links, intake reminder, map labels and bottom CTA now use `src/i18n/contact.ts`.
- Contact form: all visible labels, placeholders, subject display labels, client validation, pending, error and success states are localized. The validated locale is passed to the form and included in API metadata. API payload field names and canonical subject values are unchanged.
- Removed unverified Contact page claims about average response time, number of campuses and opening hours. Office availability/hours are presented as items to confirm with the institute.
- Remaining: source programme-item strings remain canonical English titles; language-catalogue course-detail prose, Careers, Gallery, News, Student Voices, Privacy and Terms are still outstanding. SEO alternates/hreflang, structured data, sitemap coverage and non-English indexability remain gated. Contact/Admissions form delivery, file handling, responsive/browser and accessibility testing need a configured runtime and institutional endpoints.

## Run 8 update — Career Opportunities landing page

- `src/i18n/careers.ts` now provides draft page copy for all eight launch locales.
- `src/app/career-opportunities/page.tsx` resolves the locale from the request header, uses the localized resource throughout the landing page, and generates localized title/description/Open Graph metadata.
- The existing design structure, images, pathway destinations and three pathway categories are preserved. Variable requirements, fees, work rights and outcomes are explicitly qualified; job placement is not promised.
- The apprenticeship, undergraduate and masters detail routes remain English and are not complete. Do not remove the locale-prefix `noindex` safeguard on this basis.

## Run 9 — 2026-11-16 Career Opportunities detail routes

- Added `src/i18n/career-details.ts` with locale-specific content for all three existing Careers detail routes across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`.
- Added `src/components/careers/CareerDetailPage.tsx`, a shared server-rendered page presentation that retains the institutional navy/red/gold palette and the information architecture of each route while removing duplicated static English page copy.
- Converted `/career-opportunities/apprenticeship`, `/career-opportunities/undergraduate` and `/career-opportunities/masters` to locale-aware server routes. Each resolves the validated `x-iiflhm-locale` request header and generates localized title, description and Open Graph metadata.
- Localized benefit cards, eligibility guidance, personal qualities, admission pathways, eligibility overview, document checklist, language-proficiency information, financial/visa cautions, CTA copy and back-navigation labels.
- Preserved source programme/pathway concepts and existing destinations. Variable admission, funding, visa, remuneration and employment outcomes are described as dependent on the relevant provider, employer, university or authority; no placement or visa outcome is promised.
- The routes continue to use the proxy's `noindex, follow` safeguard for non-English locale paths. No hreflang or indexability changes were made.
- Translation content is a working draft and needs fluent-speaker and institutional review before publication.

## Run 10 — 2026-11-16 Gallery localization and accessibility

- Added `src/i18n/gallery.ts` with localized gallery metadata, page headings, category labels, empty-state copy, image captions and lightbox labels for all eight launch locales.
- Split `/gallery` into a locale-resolving server route (`src/app/gallery/page.tsx`) and `GalleryPageClient.tsx`; page title, description and Open Graph metadata now follow the validated `x-iiflhm-locale` request header.
- Preserved all six existing image records, source assets, category IDs, image order and filtering behavior. Category IDs remain stable while visible labels and captions are localized.
- Updated `CategoryFilter` with localized accessible group labeling, button semantics, `aria-pressed` state and visible keyboard focus styling.
- Updated `GalleryGrid` so each image is activated by a semantic button with an accessible name, and localized empty-state and category captions.
- Updated `LightboxModal` with dialog semantics (`role=dialog`, `aria-modal`, labelled heading), localized close/category labels, Escape-key dismissal and background scroll locking.
- No image assets were replaced or invented. Gallery translations are drafts pending fluent-speaker and institutional review. Browser, keyboard/focus-trap, screen-reader and responsive visual testing remain outstanding.

## Run 11 — 2026-11-16 News and media localization

- Added `src/i18n/news.ts` with localized page metadata, hero, archive notice, media/video labels, filter labels, empty state, contact CTA, all four existing news records and both existing video titles/subtitles for the eight launch locales.
- Converted `/news` into a locale-aware server route (`src/app/news/page.tsx`) and a client presentation (`NewsPageClient.tsx`) that receives the validated locale.
- Localized article dates through `Intl.DateTimeFormat` using each locale's configured regional format. Existing source dates, image assets, article URLs, YouTube video IDs, video durations and article ordering are retained.
- Reclassified the September 2026 intake announcement as an archived notice and removed the expired August 2026 deadline and time-sensitive "apply now" claim. Current availability is referred to the institute for confirmation.
- Reworded article summaries to describe the referenced media coverage without converting third-party reporting into independently verified institutional claims or asserting unverified migration/employment outcomes.
- Localized news category filters, video controls, play-button accessible names, reading-time labels, article links, featured story and empty-result copy. Video embeds use the privacy-enhanced YouTube host.
- Non-English routes remain `noindex, follow`. External media and partner references have not been independently authenticated; institutional review is required before publication.

## Run 12 — 2026-11-16 Student Voices localization

- Added `src/i18n/student-voices.ts` with localized page metadata, hero copy, section labels, video controls, CTA, testimonial roles/locations and all six existing testimonial statements across the eight launch locales.
- Converted `/student-voices` into a locale-aware server route and added `StudentVoicesPageClient.tsx` for the existing interactive video and testimonial presentation.
- Preserved testimonial names, initials, order, quote meaning, video assets, palette and original page sections. Individual-experience disclaimer now makes clear that testimonials do not guarantee admission, recognition, visa approval or employment; variable requirements/outcomes remain individual.
- Corrected case-sensitive video paths to match the actual filenames in `public/videos`: `Damaris.mp4`, `Daniel.mp4`, and `Zablon.mp4`. This fixes paths that would fail on case-sensitive deployment filesystems.
- Made video preview cards keyboard-operable buttons and added accessible labels. The video modal now exposes dialog semantics, an accessible close control, Escape-key dismissal, initial focus and body-scroll locking.
- The testimonials are translations of existing source statements, not new testimonials. All wording and attributions require review/approval by the named speakers and institution before publication.

## Run 13 — 2026-11-16 Student Voices and legal-page continuation

- Student Voices: added `src/i18n/student-voices.ts`, locale-aware server metadata/route and `StudentVoicesPageClient.tsx`; translated all six existing testimonial statements, roles, locations and page UI across eight locales. Preserved names, initials, quote meaning and media order. Added an individual-experience disclaimer and accessible video buttons/modal behavior. Corrected three case-sensitive local video filenames.
- Privacy and Terms: added `src/i18n/legal-pages.ts`; converted `/privacy` and `/terms` to locale-aware server routes with localized titles, descriptions and existing page text across all eight launch locales.
- Legal-content limitation: only the two short paragraphs already present in the supplied codebase have been translated. No collection categories, purposes, legal bases, retention periods, processors, cookies, user rights, jurisdiction, liability, governing law or other legal provisions have been invented. These pages are not complete legal documents and require authoritative institution-provided text plus qualified legal review before publication.
- Non-English route indexing remains disabled pending full translation and review.

## Run 14 — Language-course narrative migration

- Added `src/i18n/language-course-details.ts` with `about` and `whyLearn` copy for all eight existing detailed language-course IDs in all eight launch locales, plus localized proficiency-stage labels/descriptions for the source CEFR, HSK and JLPT level codes.
- Updated `src/components/languages/LanguageModal.tsx` to resolve the course narrative and level copy from the validated page locale and stable course ID. The modal now localizes the visible category name as well.
- Preserved the eight source course records, IDs, order, images, category identifiers, official exam names, level codes, duration values and existing certificate wording. No course, qualification or external partnership was invented.
- Remaining in the language catalogue: course learning outcomes, career-area labels, card career previews, full card descriptions and localized certificate/examination explanations. Existing certificate and exam statements need institutional confirmation; external exam names remain proper names.

## Run 15 — Language-course content completion pass (2026-11-16)

- Added `src/i18n/language-course-content.ts` with localized learning outcomes and related career-area labels for all eight existing language-course records in all eight launch locales. The 64 locale/course records preserve the source course IDs and the number/order of each course's outcome and career entries.
- Updated `LanguageModal.tsx` to render localized outcomes and career areas. External examination names remain exact source labels; the existing locale-specific exam availability note remains visible. The source certificate title remains unchanged and is accompanied by a localized clarification that award conditions, level mapping, recognition and eligibility require direct institutional confirmation.
- Updated `LanguageGrid.tsx` to show a localized course summary, translated career previews, and localized duration/level range words. Updated `FeaturedLanguage.tsx` to use the localized German-course rationale instead of the English source field.
- Added `localizeCourseDuration` and `localizeCourseLevel`; numeric duration and proficiency values remain unchanged while only their surrounding words are localized.
- The catalogue now has localized course narratives, learning outcomes, career-area labels, proficiency descriptions, summaries, and visible examination/certificate caveats. Official exam names and IIFLHM certificate titles remain source-controlled and intentionally unchanged pending institutional confirmation.
- All translation text remains draft copy and requires fluent-speaker review. Career labels describe related fields, not guaranteed job outcomes or professional eligibility.

## Run 16 — Academics catalogue card completion (2026-11-16)

- Completed the remaining Academics landing-page card microcopy across all eight launch locales: four programme-specific feature labels for each of five existing tracks, three neutral highlight chips, and the track-card action label.
- Replaced unsupported or unverified promotional claims in the card chips/features (for example, guaranteed placements, specific facilities, maximum cohort size, employer links and visa consultation) with neutral descriptions grounded in the existing programme categories and a direction to confirm availability with admissions.
- Localized the four hero/stat category labels and image alternative text. Corrected two stale Academics card destinations: the language track now links to the existing `/academics/languages` route, and the Germany pathways card links to `/career-opportunities`.
- Corrected the Dutch catalogue label typo `Ta cursussen` to `Taalcursussen`.
- Preserved the five programme tracks, imagery, colour accents, page sections and institutional identity.

## Run 17 — Shared navigation, footer and locale selector (2026-11-16)

- Added `src/i18n/shared-layout.ts` with eight-locale copy for navigation landmark names, home-link accessible name, institutional footer tagline/mission, location attribution, Babbage Technologies credit, scroll-to-top control and WhatsApp tooltip/dismissal text.
- Updated Navbar, Footer and WhatsAppFAB to consume the shared layout resource. The official institute name, contact details, social platform names, Babbage Technologies brand name and institutional design remain unchanged.
- Updated LanguageSelector to retain the current query string and URL hash when changing locale, while continuing to use `localePath` to preserve the current page path.
- The selector remains page-aware at the route-construction level. End-to-end verification through Next.js routing and the locale proxy remains outstanding because dependencies/browser runtime are unavailable.

## Run 18 — remaining Academics detail metadata (2026-11-16)

- Added eight-locale page metadata entries for the German-language route and Nursing Career Preparation route in `src/lib/localized-page-metadata.ts`.
- Migrated `/academics/german-language` metadata to the shared localized metadata helper, preserving its existing translated body content and correct hero image.
- Added shared localized metadata to `/academics/nursing-preparation` and translated its previously hard-coded `IIFLHM · Academic programme` eyebrow in all eight locales.
- Verified the referenced Nursing route metadata image exists in `public/images/academics/german-pathway.jpg`.
- Both routes remain under the existing non-English noindex proxy policy until all locale content receives review. The shared metadata helper currently only emits canonical URLs for the default English route; full localized canonical/hreflang work remains outstanding.

## Run 19 — reusable Academics component localization (2026-11-16)

- Added `src/i18n/academics-components.ts` with eight-locale copy for the reusable `ProgramGrid`, `ProgramCard`, `ProgramDetail` and `FacilitiesList` components.
- Added optional locale props (defaulting to English for backward compatibility), localized empty states, card actions, category fallback, detail-page labels, duration fallback, WhatsApp support prompt and facilities heading.
- Updated internal Academics links in these components to use `localePath`, including the empty-grid admissions/contact destination, breadcrumb, admissions and contact actions.
- Static source search shows `ProgramGrid` and `ProgramDetail` are not currently mounted by an app route; this change prepares the reusable components for locale-aware use but does not claim an active page migration.

## Run 20 — language-course modal accessibility and RTL preparation (2026-11-16)

- Upgraded `LanguageModal.tsx` with `role="dialog"`, `aria-modal`, title/description associations, a programmatic dialog focus target and localized `dir` from the locale configuration.
- Added initial focus on the close control, Tab/Shift+Tab focus containment, Escape-key dismissal, body-scroll locking and restoration of the previously focused element/body overflow on cleanup.
- Replaced the close control's physical right positioning with logical `end` positioning and added RTL direction transforms to directional icons.
- These are static implementation changes. Actual focus behavior, screen-reader announcements, reduced-motion behavior and RTL rendering still require browser QA.

## Run 21 — shared accessible-dialog behavior across active modals (2026-11-16)

- Added `src/hooks/useAccessibleDialog.ts` as a shared focus-management utility with initial focus, Tab/Shift+Tab containment, Escape dismissal, body-scroll locking and focus restoration. Its focusable selector includes links, buttons, form controls, media controls, iframes and editable elements.
- Migrated the language-course modal to the shared hook.
- Upgraded the Gallery lightbox with initial/contained focus, Escape handling and focus restoration in addition to its existing scroll lock; added locale-derived `dir` and logical close-button positioning.
- Upgraded the ICT course modal with dialog role, modal semantics, title/description associations, locale-derived direction and shared keyboard/focus behavior.
- Upgraded the Student Voices video modal with a translated dialog title, title association, locale-derived direction, shared focus/keyboard behavior and logical close-button positioning. Existing video loading/playback behavior is retained.
- These changes are statically checked only; browser keyboard, screen-reader, video-control focus and focus-restoration behavior remains unverified.

## Run 22 — language catalogue hero and route integrity (2026-11-16)

- Fixed a visible translation interpolation bug in `LanguageHero`: the three statistic labels now render actual locale dictionary values instead of literal `{t.*}` strings.
- Added localized hero image alternative text for all eight locales and made the admissions CTA use `localePath`.
- Corrected the catalogue statistic from `8+` to the exact eight existing language-course records; replaced the misleading universal `A1–C1` display with localized “levels vary by course” wording and qualified CEFR as applicable rather than universal.
- Replaced featured German-card claims about guaranteed/available exam or Ausbildung preparation with neutral German-learning/study/work context labels and explicit confirmation of external exam options.
- Updated language-course card and modal admissions links, modal contact link, Academics card/CTA links and Student Voices admissions CTA to preserve the selected locale.
- Corrected the remaining stale `/academics/language-courses` featured Academics link to the existing `/academics/languages` route.

## Run 23 — locale-aware internal navigation across live routes (2026-11-16)

- Migrated internal CTA destinations to `localePath` in homepage Hero/IntakeBanner/Testimonials/FinalCTA, About, Admissions, Contact, News, ICT, Hospitality, Travel & Tourism, German-language, Careers landing and all three Careers detail pages.
- Updated `CareerDetailPage` to receive the validated locale and use it for its back/contact destinations. Career pathway cards now construct locale-prefixed destinations directly.
- News internal article destinations are localized while external news sources remain unchanged. Mail, telephone, brochure and WhatsApp destinations remain untouched.
- Corrected the stale `/programs` Admissions CTA to the existing `/academics` route.
- Footer and Navbar data arrays still contain canonical unprefixed path values by design; their existing `href()` helper applies the current locale at render time.
- Static JSX transpilation passed for 17 changed files. Runtime navigation through Next.js rewrites/proxy remains untested.

## Run 24 — localized self-canonical metadata and sitemap safeguards (2026-11-16)

- Added `getLocalizedAlternates(pathname, locale)` and changed the shared metadata helper to emit a self-referencing canonical URL for both unprefixed English routes and locale-prefixed non-English routes.
- Applied localized self-canonical metadata to Careers landing/detail, Gallery, News, Student Voices, Privacy and Terms pages that use custom metadata functions.
- Kept `hreflang` intentionally absent while translations remain drafts and mixed-language/partially translated routes remain `noindex, follow` through `proxy.ts`. Reciprocal hreflang should only be enabled after equivalent routes are reviewed and approved.
- Marked Privacy and Terms `noindex, follow` for every locale because their current body copy is only a short placeholder and is not an institution-approved complete legal policy.
- Removed Privacy and Terms from the English sitemap until authoritative legal documents are supplied and reviewed. Sitemap continues to list only unprefixed English routes while all non-English routes are noindex.

## Run 25 — conservative EducationalOrganization structured data (2026-11-16)

- Added `src/lib/structured-data.ts` and rendered JSON-LD from the root layout for the institute as an `EducationalOrganization`.
- Schema fields are limited to existing `SITE_CONFIG`/`SOCIAL_LINKS` values: official name/short name, website, current site description, logo/hero image assets, Newline Building/Narok/Kenya address, published contact numbers/emails and the existing Facebook profile.
- No accreditations, awards, partner organizations, course-specific certification, rankings, founding date, founding persons, outcomes or opening hours were added.
- JSON-LD serialization escapes `<` before insertion to avoid script-context injection.
