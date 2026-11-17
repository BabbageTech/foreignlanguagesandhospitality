# IIFLHM Localization Progress — Phase 2

Date: 2026-11-11

## Completed in this iteration

Translated the homepage's primary visitor-conversion areas for all eight configured launch locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`):

- Eight hero slide headings and descriptions per locale.
- Hero actions: application, brochure download and programme exploration.
- Intake heading, supporting copy, video fallback and application action.
- Closing CTA eyebrow, heading, supporting copy and enquiry action.
- Locale is read from the validated `x-iiflhm-locale` request header in the homepage route and passed to the migrated components.

Existing photography, video, route destinations, brand colours, institution name and programme catalogue were preserved.

## Files changed

- `src/i18n/home.ts` — new typed homepage content resource for eight locales.
- `src/app/page.tsx` — resolves locale and passes it to migrated homepage sections.
- `src/components/home/Hero.tsx` — locale-aware hero slides and actions; added accessible slide indicator labels/state.
- `src/components/home/IntakeBanner.tsx` — localized intake content and video fallback.
- `src/components/home/FinalCTA.tsx` — localized closing CTA.
- `docs/TRANSLATION_INVENTORY.md` — updated coverage matrix and gaps.
- `docs/I18N_GUIDE.md` — documented homepage migration pattern.
- `docs/CODEBASE_AUDIT.md` — recorded implementation.
- `docs/QA_REPORT.md` — recorded static checks and blocked runtime checks.

## Verification

Static validation passed: all eight locale records contain eight hero slide pairs and all ten expected shared homepage content fields. Locale propagation source files exist.

Runtime verification is blocked by the incomplete `node_modules` directory:

- `npx tsc --noEmit` failed because TypeScript type definitions (`estree`, `json-schema`, `json5`, `node`, `react`, `react-dom`) are missing.
- `npm run lint` could not start because `eslint` is not installed.
- `npm run build` could not start because `next` is not installed.

A clean `npm ci` is required, followed by rerunning all three commands. Browser and accessibility QA are still outstanding.

## Remaining work — not yet a fully translated website

The homepage's Empowering/Vision/Mission section, programme highlight cards and feature lists, Why Choose Us, testimonials and FAQ are still English. All other route bodies remain to be migrated, including About, Academics and programme detail pages, Admissions, Career Opportunities, Contact, Gallery, News, Student Voices, Privacy and Terms. Forms, validation, upload states, image alt text, accessibility labels, localized SEO alternates and structured data also remain incomplete.

Non-English routes remain `noindex, follow`. This safeguard must not be removed until each localized page has complete translated content, accurate metadata/alternates, and QA approval. Fluent-speaker review is required before publication claims.

## Next priority

Finish the remaining homepage sections and their data-driven copy across all eight locales, then migrate About and shared form resources. Do not deploy or publish without explicit authorization.
