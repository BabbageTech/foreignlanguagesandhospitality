# IIFLHM Internationalization Guide

## Current architecture

The site uses a lightweight custom App Router-compatible locale layer rather than adding a translation dependency before the content model is ready.

- Locale definitions: `src/i18n/config.ts`
- Localized page metadata (Home, About, Academics, Admissions, Hospitality Management, Travel & Tourism): `src/lib/localized-page-metadata.ts`
- Shared interface translations: `src/i18n/messages.ts`
- Locale URL rewriting and persistence: `src/proxy.ts` (must sit beside `src/app/` when using the `src/` project directory)
- Language selector: `src/components/layout/LanguageSelector.tsx`
- Localized global navigation/footer/WhatsApp: `src/components/layout/`

This keeps the existing route tree and components intact. `/de/about` is rewritten internally to the existing `/about` route, while the browser retains the locale-prefixed URL. Existing English URLs such as `/about` continue to work. If a visitor has selected a non-English locale, a subsequent unprefixed internal link is redirected back to that locale prefix.

## Supported launch locales

| Code | Language | Native label | Formatting locale | Direction |
|---|---|---|---|---|
| `en` | English | English | `en-KE` | LTR |
| `de` | German | Deutsch | `de-DE` | LTR |
| `sw` | Kiswahili | Kiswahili | `sw-KE` | LTR |
| `fr` | French | Français | `fr-FR` | LTR |
| `es` | Spanish | Español | `es-ES` | LTR |
| `nl` | Dutch | Nederlands | `nl-NL` | LTR |
| `it` | Italian | Italiano | `it-IT` | LTR |
| `zh` | Mandarin / Simplified Chinese | 简体中文 | `zh-CN` | LTR |

Future locale identifiers are listed in `futureLocales`: `pt`, `ar`, `ja`, `ko`, `hi`, `tr`, `ru`. Arabic requires an explicit RTL launch review before enabling it.

## Adding a language

1. Add the locale code to `locales` in `src/i18n/config.ts`.
2. Add its `name`, `nativeName`, `dir` and BCP 47 `intl` formatting locale to `localeConfig`.
3. Add the complete shared message dictionary in `src/i18n/messages.ts`.
4. Translate page content, form labels/errors/success states, navigation, metadata, image alt text and accessibility labels. Keep official institution and registered programme names unchanged unless the institution approves an official localized form.
5. Add translated content to stable-ID programme/language data records rather than using translated display text as identifiers.
6. Test the route at narrow and wide breakpoints, keyboard-only, screen reader, long German/French/Kiswahili strings and CJK line wrapping.
7. Only after translation review and QA, remove the `X-Robots-Tag: noindex, follow` safeguard for the locale and add the page to sitemap/hreflang clusters.

## Translation lookup and fallback

`getMessage(locale, key)` reads a locale's shared dictionary and falls back to English for a missing shared key. Missing translation keys should be caught by TypeScript and translation inventory checks; avoid rendering raw keys. Page-specific copy has not yet been migrated to this resource model, so the current fallback is not a promise that all page content is translated.

## URL behaviour

- English legacy URLs remain available: `/about`.
- Non-English locale URLs are supported: `/de/about`, `/sw/about`, `/fr/about`, `/es/about`, `/nl/about`, `/it/about`, `/zh/about`. An explicit `/en/...` URL redirects to the legacy unprefixed English route to avoid duplicate English URLs.
- The selector preserves the current pathname, query string and fragment when changing locale, then performs a full document navigation so the locale cookie and server-rendered document language update together. Locale persistence is cookie-based; automatic `Accept-Language` redirection is intentionally not enabled in this first pass.
- Internal links that remain unprefixed are redirected to the selected locale when a non-English locale cookie is active.
- Localized slugs are deliberately deferred; stable route paths are retained to avoid unnecessary broken links.

## SEO policy

The sitemap lists only unprefixed English canonical routes. An explicit `/en/...` URL redirects to its unprefixed English equivalent. Non-English prefixed routes emit `X-Robots-Tag: noindex, follow` until each route has translated content, unique metadata, correct canonical and alternate-language URLs, and QA approval. Do not remove this safeguard just to increase the number of indexed URLs.

For a fully localized route, publish a localized title/description, self-referencing canonical, correct `hreflang` alternates including `x-default` where appropriate, localized OG fields and valid structured data. Add it to the sitemap only after confirming the equivalent page exists.

## Locale-aware formatting

Use the shared helpers in `src/i18n/format.ts` (`formatDate`, `formatDateTime`, `formatNumber`, `formatCurrency`, `formatPercent`) or the underlying `Intl.DateTimeFormat` / `Intl.NumberFormat` APIs. Currency is a separate business choice: keep KES where the institution charges KES; do not infer EUR/USD from a visitor's language.

## RTL and CJK readiness

`localeConfig` includes `dir`, and the root layout sets the HTML `dir` attribute. Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `border-inline`, `text-align: start`) for new components. Arabic remains future-ready, not enabled. Simplified Chinese is configured with an appropriate font fallback and normal letter spacing; test actual fonts and line heights on target devices.

## Known limitations

The current first pass translates shared global interface labels and WhatsApp messages, not every route's body copy or forms. Localized titles, descriptions and Open Graph metadata are implemented for Home, About, Academics, Admissions, Hospitality Management and Travel & Tourism. Other routes still inherit English metadata or their existing English page metadata. Complete hreflang clusters, localized structured data and full localized SEO remain outstanding. Do not market this as a fully translated eight-language website until the translation inventory is complete and reviewed by fluent language professionals.

## Homepage copy migration update (2026-11-11)

`src/i18n/home.ts` contains locale-specific content for the hero carousel, intake introduction and final CTA in all eight launch locales. The homepage server route reads `x-iiflhm-locale` and passes the validated locale to these client components. When migrating further homepage sections, add typed content to the locale resource and pass the locale from `src/app/page.tsx`; do not infer the language from the browser or duplicate route trees. The other homepage sections remain English until their full copy/data are migrated.

## Homepage section resources

The homepage's remaining section content is stored in `src/i18n/home-sections.ts`, keyed by the `Locale` union. The homepage resolves the validated locale once from `x-iiflhm-locale` and passes it to each section component. Add or revise all eight locale records together; keep array ordering aligned for the four programme cards, six benefit cards, six student quotations, and seven FAQs. Preserve the English source meaning and do not create institutional claims, qualification names, guarantees, or testimonial attributions. `FAQ` controls expose `aria-expanded` and `aria-controls`, and the image cards use locale-specific descriptive alternatives.

## About route resources

About-page copy lives in `src/i18n/about.ts`, typed against all eight launch locales. The route resolves `x-iiflhm-locale` using the same validated locale pattern as the homepage and passes it to all About section components. Keep the arrays aligned with their source records: four core values, four facilities and nine faculty/team profiles. Preserve personal names and the founder's factual biography; confirm biographies, titles, facilities and the establishment year with the institution before publication.


## Hospitality Management and Travel & Tourism detail resources (2026-11-16)

The Hospitality Management and Travel & Tourism pages use `src/i18n/hospitality-tourism.ts`. Each locale record contains shared metric and action labels plus a separate `hospitality` or `travel` resource. Resolve the locale on the server from `x-iiflhm-locale` and call `getHospitalityTourismCopy(locale, programme)`; do not use translated text as a route or course identifier. Keep official qualification names and acronyms such as `Craft Certificate`, `KNEC`, `KCSE`, `IATA`, and `Bronze Level Tour Guide` identifiable. Confirm current programme duration, entry requirements, examination details and external certificate availability with the institution before publication.

The two routes retain the existing image assets, layout and colour system. Their page metadata is registered in `src/lib/localized-page-metadata.ts`. Non-English routes remain `noindex, follow` through `proxy.ts` until every route and shared interaction has passed review.

## ICT programme route pattern

The ICT route now uses a server/client split: `src/app/academics/ict/page.tsx` reads the locale from the validated `x-iiflhm-locale` request header, generates localized metadata through `getLocalizedPageMetadata("ict", ...)`, and passes the locale to `ICTPageClient`. Page interface copy is maintained in `src/i18n/ict.ts`. When adding further ICT translations, keep technical product names (for example React, Next.js, Python, PostgreSQL, CompTIA and AWS) intact unless an approved localized technical term exists. The existing course records in `ICTPageClient.tsx` are still English and must be moved into locale-aware data before this route can be considered fully localized or indexed in non-English locales.


## Extending ICT course translations

Course-card and course-modal content is maintained separately in `src/i18n/ict-courses.ts`. Keep the array order aligned with the four source course records in `src/app/academics/ict/ICTPageClient.tsx`. Each locale must contain four records, each with `title`, `tagline`, `desc`, `duration`, `level`, `mode`, four `outcomes`, five `moduleTitles`, and four `careers`. Technical product names, programming languages, frameworks and protocols should remain recognizable; translate explanatory labels where appropriate. Do not invent course awards, accreditation, exam-provider authorization, employment outcomes, duration or delivery availability. Run the resource structure check and transpile check after edits.

## Language catalogue route migration (2026-11-16)

The `/academics/languages` route follows the server/client split used by other migrated routes: `page.tsx` reads the validated `x-iiflhm-locale` header and passes a `Locale` to `LanguageCoursesClient.tsx`. Catalogue UI strings and localized course display names are in `src/i18n/language-catalogue.ts`. Keep the eight source course records in `components/languages/Language-data.ts` as the canonical data source; add per-locale course-content resources keyed by the existing course IDs for subsequent translation work. Do not translate or alter official examination names, CEFR/HSK level codes, certificate titles or factual claims without checking the source and institutional approval. The current catalogue pass localizes UI and display names only; it does not make the detail content fully localized.

## Admissions page shell resource (2026-11-16)

`src/i18n/admissions.ts` contains the first admissions-page translation layer for `en`, `de`, `sw`, `fr`, `es`, `nl`, `it` and `zh`. The server page reads the locale set by `proxy.ts` in `x-iiflhm-locale` and calls `getAdmissionsCopy(locale, key)`. Keep course names, qualification titles, campus names and other controlled institutional terminology source-backed; do not translate these in ways that change their official meaning. The AdmissionForm is a separate client component and is not yet covered by this resource. Do not remove the localized-route `noindex` safeguard until all page copy and form states are translated and reviewed.

## Admissions application form localization (2026-11-16)

The server admissions page passes its validated `Locale` to `AdmissionForm`. Form copy and localized validation strings live in `src/i18n/admissions-form.ts`, accessed through `getAdmissionsFormCopy(locale)`. Keep all eight locale objects structurally aligned. Zod validation is created inside the component from the active locale so validation feedback changes with the interface language. Keep form values and submitted identifiers canonical (for example `Onsite`, `Online`, `Hybrid`, `Narok Campus`, `Virtual Campus`, and source programme names); translate only visible labels. The validated locale prop is submitted as `selectedLocale` and `pageLocale`, rather than deriving it from a possibly unprefixed URL. The multipart Formspree integration remains unchanged and requires `NEXT_PUBLIC_FORMSPREE_ADMISSIONS` to be configured. Never display a success state unless the remote endpoint returns an OK response.

## Admissions form resource — Run 6

`src/i18n/admissions-form.ts` defines the eight-locale form dictionary. Use `getAdmissionsFormCopy(locale)` inside `AdmissionForm`; validation is created from that dictionary so Zod errors are localized. Do not translate canonical option values or alter the submitted field names. The server page passes the validated locale, which is included in FormData metadata. The admissions page outside the form is not fully localized yet.

## Contact route and form localization (Run 7)

- `src/i18n/contact.ts` is the typed eight-locale resource for the Contact page and ContactForm.
- `src/app/contact/page.tsx` is a server route: resolve `x-iiflhm-locale` using `isLocale`, then pass the resulting `Locale` to `ContactPageClient`.
- `ContactPageClient` and `ContactForm` must receive the same validated `Locale`; do not infer it independently from a URL segment or cookie.
- Keep the contact subject values (`Admission Inquiry`, `Program Information`, `Financial Aid`, `General Enquiry`, `Other`) stable for API compatibility; translate only the displayed labels.
- Keep API property names (`name`, `email`, `phone`, `subject`, `message`, `selectedLocale`, `pageLocale`, `sourcePage`) unchanged.
- Client-side validation, request errors, submission progress and success states are localized. The server API currently returns English errors; the client intentionally maps HTTP failure states to locale-specific generic messages rather than exposing English server text.
- Do not claim a message has been delivered unless the configured Formspree endpoint returns success. The success screen means the configured endpoint accepted the request, not that an individual staff member has replied.
- Office hours and availability are not confirmed in the source materials. The UI asks visitors to contact the institute to confirm them; do not reintroduce unverified opening-time or response-time claims.

## Career Opportunities landing page (Run 8)

The `/career-opportunities` route resolves the validated `x-iiflhm-locale` header in its server component and reads `src/i18n/careers.ts` through `getCareersCopy(locale)`. The same resource supplies localized title, description and Open Graph title/description. Keep the pathway order, canonical route destinations and institutional photography unchanged. Maintain the caution that admission, visa, employment and placement outcomes depend on individual eligibility and decisions by third parties. Fees, instruction language and work rights vary; do not turn these into universal claims. The three detail routes (`apprenticeship`, `undergraduate`, `masters`) are not yet migrated and must be localized separately before Careers can be marked complete or non-English indexing enabled.

## Career Opportunities detail routes — Run 9

Use `src/i18n/career-details.ts` for all copy on the three Careers detail routes. The resource shape is `careerDetails[locale][kind]`, where `kind` is `apprenticeship`, `undergraduate` or `masters`. Route modules must resolve locale from the validated `x-iiflhm-locale` request header (falling back to `defaultLocale`) and pass the selected copy to `src/components/careers/CareerDetailPage.tsx`. Keep institutional facts and canonical course/pathway names intact. Do not convert variable university admission, tuition, proof-of-funds, visa, employer remuneration or employment conditions into guarantees. All eight translations are drafts pending fluent-speaker and institutional review; retain the non-English `noindex, follow` proxy safeguard until whole-site review is complete.

## Gallery — Run 10

`src/i18n/gallery.ts` owns gallery page metadata, headings, filter labels, category display labels, empty-state copy, image captions and lightbox labels. Keep source category IDs (`All`, `Classes`, `Facilities`, `Students`, `Events`) and image IDs stable; only localize their visible labels. `/gallery` resolves locale server-side and passes it into `GalleryPageClient`. Gallery filters use semantic buttons with `aria-pressed`; each image card is a button; the lightbox uses dialog semantics and Escape dismissal. Keep original media assets and order intact unless the institution authorizes a change.

## News and media — Run 11

`src/i18n/news.ts` owns all visible News route copy, including metadata, archive notice, four existing article summaries/titles, two video titles/subtitles, filter categories, date/reading-time labels, media controls, empty states and CTAs. Keep article IDs, canonical category IDs, publication dates, source URLs, YouTube IDs, video durations and original image assets unchanged. Format ISO dates using `Intl.DateTimeFormat` with `localeConfig[locale].intl`. The September 2026 intake card is explicitly historical; do not restore the expired deadline or suggest that the intake is currently open. Do not strengthen third-party press coverage into institutional claims. Keep non-English routes noindexed pending full review.

## Student Voices — Run 12

`src/i18n/student-voices.ts` owns the localized page metadata, hero/section labels, CTA and all six existing testimonial roles, locations and quote translations. Keep names, initials, quote meaning, testimonial IDs, media paths and order stable. Do not create additional testimonials or alter speaker attributions. The individual-experience disclaimer must remain visible because testimonials are not guarantees of admission, qualification recognition, visa approval or employment. Verify every translation and obtain speaker/institution approval before publication. Video preview and modal controls must remain keyboard accessible.

## Privacy and Terms — Run 13

`src/i18n/legal-pages.ts` contains only the existing short Privacy and Terms page statements translated into the eight launch locales. Do not expand these pages by inventing data practices, legal bases, retention periods, processors, cookies, user rights, jurisdiction, liability, governing law or other legal provisions. Obtain the approved privacy notice and terms from IIFLHM and qualified legal review before treating either page as complete or indexable. The current translations are a temporary localization of the existing short source copy only.

## Language-course detail localization (Run 14)

The eight existing language-course records use `src/i18n/language-course-details.ts` for localized `about` and `whyLearn` narratives and localized proficiency-stage labels/descriptions. The source records and stable IDs remain in `src/components/languages/Language-data.ts`; the modal resolves the localized copy by `locale` plus the stable `course.id`. Do not use translated display names as identifiers. Official level codes (CEFR A1–C1, HSK 1–4 and JLPT N5–N3), duration values, external examination names and the current IIFLHM certificate wording remain source-controlled. The latter should not be reworded as a verified award until the institution confirms the exact certificate name and scope. Learning outcomes, career-area labels and remaining course-card metadata still need locale resources; do not treat this pass as complete course localization.

## Language-course outcomes and career labels — Run 15

`src/i18n/language-course-content.ts` contains `languageCourseContent[locale][courseId]` for the eight source course IDs and all eight launch locales. Use this resource for course learning outcomes and related career-area labels in both the course modal and catalogue-card previews. `localizeCourseDuration` and `localizeCourseLevel` translate only surrounding words; do not alter the numeric ranges or official level codes. `languageCourseLegalNotes` supplies the localized certificate qualification note. Keep official external examination names and the supplied certificate title exactly as maintained in `Language-data.ts`; the accompanying notes explain that exam availability, preparation, award conditions, recognition and eligibility must be confirmed with IIFLHM. Career areas are illustrative related fields, not promises of employment or eligibility.

## Academics catalogue cards — Run 16

`getAcademicsCatalogueCopy(locale)` now returns the localized `features`, neutral `highlights` and `exploreAction` used by the five existing Academics cards and featured pathway chips. Keep card content factual and avoid unsupported claims about facilities, class sizes, placements, visa services, employer links or certification. The language-course track links to `/academics/languages`; Germany pathway information links to `/career-opportunities`. The Academics hero/stat category labels are localized in the existing `academics.ts` resource.

## Shared layout copy and locale switching — Run 17

Use `getSharedLayoutCopy(locale)` from `src/i18n/shared-layout.ts` for the localized navigation landmark and accessible names, footer mission/tagline/attribution, scroll-to-top label and WhatsApp tooltip controls. Keep the official institute name, contact values and third-party brand names unchanged. `LanguageSelector` derives the destination from the current pathname using `localePath` and retains `window.location.search` and `window.location.hash`; verify this in the browser against both prefixed and unprefixed routes when the Next.js runtime is restored.

## Academics detail metadata — Run 18

`getLocalizedPageMetadata` now supports `germanLanguage` and `nursingPreparation`. The German-language and Nursing Career Preparation routes use the shared metadata helper and locale-aware title/description copy. The nursing page's eyebrow is part of its eight-locale route dictionary. Do not enable non-English indexing solely because metadata exists: the proxy noindex policy remains until route content and translation QA are approved. Localized canonical/hreflang generation is still a separate SEO task.

## Reusable Academics UI components — Run 19

The optional `locale` prop on `ProgramGrid`, `ProgramCard`, `ProgramDetail` and `FacilitiesList` selects copy from `getAcademicsComponentCopy(locale)`. The default is `en` for compatibility with any existing callers. When mounting these components on a localized route, pass the validated route locale explicitly. Internal links use `localePath`. The source-supplied programme title, description, duration, level and facility values remain caller-owned data and must be localized at their source; the component dictionary only localizes shared UI labels and empty states. `ProgramGrid`/`ProgramDetail` currently have no route-level callers, so their integration is not yet active.

## Language-course modal accessibility — Run 20

The language-course detail modal now exposes dialog semantics and localized title/description associations, receives initial focus, contains keyboard focus, closes on Escape, locks background scrolling and restores focus/body overflow when dismissed. Its content uses `localeConfig[locale].dir`; directional icons are flipped with the Tailwind `rtl:` variant and close positioning uses logical `end`. Browser verification remains required, particularly for keyboard focus, screen readers, animation/reduced motion and future RTL locales.

## Shared accessible dialog behavior — Run 21

Use `useAccessibleDialog(open, onClose, dialogRef, initialFocusRef)` from `src/hooks/useAccessibleDialog.ts` for client-side modal surfaces. It manages focus entry, keyboard focus containment, Escape dismissal, body-scroll locking and focus restoration. Ensure each dialog also provides `role="dialog"`, `aria-modal="true"`, a meaningful localized `aria-labelledby` (and `aria-describedby` when useful), a visible close control and the current locale direction. Native media controls are included in the focusable selector. Browser and assistive-technology testing remains mandatory; this hook does not replace testing of complex nested widgets or native media-control behavior.

## Language catalogue hero and route links — Run 22

`LanguageHero` uses `heroImageAlt`, `levelsValue`, `standard`, `levels` and `offered` from `languageCatalogueCopy` for accessible image text and localized statistics. The course count reflects the eight source course records; level ranges vary by course, and CEFR is not represented as universal. Featured German tags must remain qualified and must not promise exam availability, preparation or pathway outcomes. Catalogue admissions/contact links and Academics/Student Voices links use `localePath` so users remain on the selected interface locale.

## Locale-aware internal navigation — Run 23

For components that receive a validated `Locale`, construct internal route destinations with `localePath(path, locale)`. This applies to the home sections, About, Admissions, Contact, News, ICT, Hospitality, Travel & Tourism, German-language, Careers landing and Careers detail pages. For data-driven News records, apply `localePath` only to internal records and preserve external URLs exactly. Mail, telephone, brochure-file and external WhatsApp links are not locale routes. Navbar/Footer keep canonical path strings in their data arrays and apply locale through their local `href()` helper. When adding routes, verify the target exists before linking; `/programs` was corrected to `/academics` in this pass.

## Canonical metadata and indexing policy — Run 24

Use `getLocalizedAlternates(pathname, locale)` for a self-canonical URL: English remains unprefixed; other launch locales use `/{locale}{pathname}`. The shared page metadata helper now applies this to all its routes, and custom metadata routes use the same helper. Do not emit hreflang until equivalent locale pages pass fluent-speaker and institutional review; all non-English pages currently remain `noindex, follow` via `proxy.ts`. Privacy and Terms remain noindex in every locale and are excluded from the sitemap until complete institution-approved legal text is available. The sitemap is intentionally English-only while localized routes are noindex.

## Organization structured data — Run 25

The root layout emits a single `EducationalOrganization` JSON-LD object from `getInstitutionStructuredData()`. Only use facts already present in `SITE_CONFIG`/`SOCIAL_LINKS` and verified static assets. Do not infer accreditations, partnerships, awards, programme certifications, rankings, staff/founder details, operating hours or student outcomes. JSON serialization escapes `<` before placing data in the script element. If official institutional data changes, update the source constants only after confirmation.

## Locale navigation and preview safeguards — Run 26 (2026-11-17)

`localePath(pathname, locale)` now returns canonical unprefixed paths for English and `/{locale}/...` paths for non-English locales. Use this for ordinary internal navigation. The language selector must use `localeSwitchPath(pathname, locale)` instead: it deliberately emits `/en/...` when English is selected so `proxy.ts` can set the English locale cookie before redirecting to the canonical unprefixed URL. This distinction avoids an unnecessary redirect on every English internal link while still allowing a visitor to switch back from a remembered non-English locale. Both helpers strip an existing launch-locale prefix before constructing the destination.

`src/app/robots.ts` disallows crawling on Vercel previews and Netlify deploy-preview/branch-deploy contexts. Production and local development retain the current robots policy. Confirm the hosting provider's production `CONTEXT` value before release; do not expose preview deployments to crawlers.

## Repeatable localization integrity audit — Run 27 (2026-11-17)

Run `npm run audit:i18n` from the project root before preparing a release. The dependency-free Node script at `scripts/audit-localization.mjs` checks that all eight launch locales remain configured, every App Router page is represented by the English sitemap except the intentionally excluded Privacy and Terms placeholders, every page declares route metadata, localized routes retain `noindex, follow`, preview deployments remain disallowed to crawlers, legal placeholders stay excluded, and canonical URL generation does not prematurely emit hreflang. This is a static guardrail only; it does not replace Next.js build, live HTTP/crawler, browser, accessibility, responsive, legal or human translation review.


## Automated localization checks

Run `npm run audit:i18n` to verify launch-locale configuration, route and sitemap alignment, localized-route indexing safeguards, canonical policy, locale-switching behavior, and shared interface-message key coverage, missing literal local assets, and unmatched static internal links. Run `npm run typecheck:i18n` to type-check all `src/i18n/**/*.ts` resources in strict mode independently of the Next.js/React application build. These checks do not replace fluent-speaker, institutional, accessibility, or browser review.


## Next.js Proxy placement and locale 404 prevention (Run 37)

This repository uses the `src/app/` App Router directory. Next.js discovers the Proxy convention only when `proxy.ts` is placed at the same project-directory level as `app/` or `pages/`; therefore this project must use `src/proxy.ts`, not a root-level `proxy.ts`. A root-level file alongside `src/` is not beside `src/app/` and may not be discovered, leaving `/de/...`, `/sw/...` and the other locale-prefixed paths to fall through to the filesystem router and return 404. The Proxy rewrites a locale-prefixed request internally to its existing unprefixed App Router route, injects `x-iiflhm-locale`, persists the locale cookie and retains the public prefixed URL. The matcher excludes all `/_next/`, `/api`, and `/_vercel/` internal paths. The language selector uses a full navigation after preserving pathname, query and hash so server-rendered layout locale and cookie state are refreshed consistently.
