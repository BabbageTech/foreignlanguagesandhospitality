# IIFLHM Localization Progress — Run 12 (16 November 2026)

## Scope
Continued from Run 11. Localized Student Voices across all eight launch locales.

## Files changed
- `src/i18n/student-voices.ts`
- `src/app/student-voices/page.tsx`
- `src/app/student-voices/StudentVoicesPageClient.tsx`
- `docs/CODEBASE_AUDIT.md`
- `docs/I18N_GUIDE.md`
- `docs/TRANSLATION_INVENTORY.md`
- `docs/QA_REPORT.md`

## Implemented
- Locale-aware server route and localized title, description and Open Graph metadata.
- Localized hero, alumni/student sections, chef spotlight, video labels, CTA and individual-experience disclaimer.
- Translated all six existing testimonial roles, locations and statements across `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
- Preserved speaker names, initials, source quote meaning, ordering, colours and existing media assets.
- Added explicit disclaimer that individual experiences do not guarantee admission, qualification recognition, visa approval or employment.
- Converted video preview surfaces to semantic buttons with accessible names. Video modal uses dialog semantics, an accessible close button, Escape-key dismissal, focus on open and body-scroll locking.
- Corrected case-sensitive video paths to match the actual `public/videos` filenames (`Damaris.mp4`, `Daniel.mp4`, `Zablon.mp4`).

## Verification
- TypeScript compiler API `transpileModule`: PASS for three changed/new TS/TSX files, zero syntax diagnostics.
- Standalone strict dictionary type-check: PASS — `tsc --noEmit --strict --target ES2022 --moduleResolution bundler --module ESNext src/i18n/config.ts src/i18n/student-voices.ts`.
- Static check of all four referenced local video assets: PASS.
- `npm run lint`: BLOCKED — exit 127 (`eslint: not found`; no `node_modules`).
- `npm run build`: BLOCKED — exit 127 (`next: not found`; no `node_modules`).
- Full project type-check: BLOCKED by missing Next.js, React, Framer Motion, lucide-react and related declarations.
- Browser, responsive, playback, keyboard, screen-reader and fluent-speaker tests were not performed.

## Remaining work
- Privacy and Terms pages: localize current copy, but complete legally meaningful policy/terms content requires authoritative text and institutional/legal review.
- Complete remaining language-course detail descriptions, outcomes, proficiency levels, career pathways and examination information.
- Audit shared components, page-aware locale switching and accessibility labels.
- Complete localized canonical/alternate/hreflang/structured-data strategy, sitemap and robots only after all routes are translated and approved.
- Install dependencies in a supported environment and run full lint, type-check, production build and browser QA.

## Release constraints
Testimonial translations require speaker/institution approval. Non-English URLs remain `noindex, follow`. No deployment, publication, production-setting changes or external communications were performed.

## Next priority
Localize the current Privacy and Terms page copy, then obtain the institution’s approved full legal texts before treating either page as complete.
