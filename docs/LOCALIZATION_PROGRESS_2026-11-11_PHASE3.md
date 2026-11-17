# IIFLHM Localization Progress — Phase 3

Date: 2026-11-11

## Completed in this iteration

Completed the remaining authored homepage section-copy migration for all eight configured locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`):

- Institutional introduction, vision and mission.
- Image-card labels and descriptions.
- Four programme highlight cards, descriptions, categories and feature lists.
- Six Why Choose Us benefit cards and section introduction.
- Six student-voice quotations and role labels, retaining names and locations.
- Seven admissions FAQ questions and answers.
- FAQ interaction semantics (`aria-expanded`, `aria-controls`, semantic buttons and visible keyboard focus).

The existing visual identity, photography, section order, programme destinations, student names and testimonial attribution have been retained. Programme copy continues to avoid unverified guarantees and recognition claims.

## Files changed

- `src/i18n/home-sections.ts` — new typed content resources for all eight locales.
- `src/app/page.tsx` — passes the validated locale into every homepage section.
- `src/components/home/EmpoweringSection.tsx`
- `src/components/home/ProgramsHighlight.tsx`
- `src/components/home/WhyChooseUs.tsx`
- `src/components/home/Testimonials.tsx`
- `src/components/home/FAQ.tsx`
- `docs/TRANSLATION_INVENTORY.md`
- `docs/I18N_GUIDE.md`
- `docs/CODEBASE_AUDIT.md`
- `docs/QA_REPORT.md`

## Verification

Passed: TypeScript/TSX syntax transpilation via the global TypeScript compiler API for the new resource, five migrated components and homepage route.

Blocked: `tsc --noEmit` fails before project checking because `node_modules` is incomplete and lacks type definitions for `estree`, `json-schema`, `json5`, `node`, `react` and `react-dom`. ESLint and Next.js are unavailable, so `npm run lint` and `npm run build` could not be completed. `npm ci --ignore-scripts --no-audit --no-fund` was attempted but did not complete within the available command window.

Browser, responsive, keyboard/screen-reader, CJK rendering and fluent-speaker review remain outstanding. The localized student quotations require confirmation before publication. The non-English `noindex` safeguard remains in place.

## Remaining whole-site work

The homepage section-copy migration is complete as a code change, but the website is not fully localized. Remaining routes include About, all Academic pages and programme details, Admissions and form states, Career Opportunities and subpages, Contact, Gallery, News, Student Voices, Privacy and Terms. Image alt text outside the homepage, ARIA labels across shared/navigation/forms, full route metadata and hreflang/canonical/structured data, sitemap/robots validation, and browser/accessibility QA remain outstanding.

## Next priority

Migrate the About route and its shared components as one complete unit, then proceed through Academics and programme detail pages. Continue to keep non-English routes out of search indexing until page-level translation and QA are complete. Do not deploy or publish without explicit authorization.

## Additional bounded implementation: About route

Also completed the About route's content migration for all eight locales: hero and CTA, mission/vision, four core values, four facility descriptions, founder profile and focus areas, nine staff/faculty roles and biographies, image alternatives, and closing CTA. The copy uses neutral intake wording rather than asserting that a future intake is open. Personal names, role meaning, images, page composition and the displayed 2024 establishment year are retained.

Additional files changed:

- `src/i18n/about.ts`
- `src/app/about/page.tsx`
- `src/components/about/CoreValues.tsx`
- `src/components/about/Facilities.tsx`
- `src/components/about/FacultyGrid.tsx`
- `src/components/about/FounderBio.tsx`
- `src/components/about/MissionVision.tsx`

The About route files also passed TypeScript/TSX syntax transpilation. Institutional confirmation of staff roles, founder biography, facility descriptions and the establishment year, plus fluent-speaker review, is still required.
