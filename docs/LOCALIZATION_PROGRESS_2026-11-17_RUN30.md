# IIFLHM Localization Progress — Run 30

**Date:** 17 November 2026  
**Base:** Run 29 archive  
**Scope:** Accessibility, reduced-motion behavior, shared controls, and Chinese typography.  
**Deployment:** Not performed.

## Changes in this run

1. **Student Voices video previews respect reduced-motion preferences.** The looping preview videos in the chef spotlight and testimonial cards now use `useReducedMotion()` to disable autoplay when the visitor requests reduced motion. The preview media remains decorative (`aria-hidden`) and is removed from the keyboard focus order; the surrounding labelled buttons remain the controls that open the video dialog.
2. **Shared Button loading state is more accessible.** The loading spinner is hidden from assistive technology, and the native button announces its busy state through `aria-busy` while loading. Existing disabled-while-loading behavior is retained.
3. **Chinese locale typography fallback is corrected at the body level.** The `html[lang="zh"] body` rule explicitly includes Noto Sans SC, Microsoft YaHei, and PingFang SC after the configured Inter font, so the body-level font declaration does not discard the CJK fallback stack. No external font download or new network dependency was added.
4. **Localization integrity audit expanded.** The audit now checks the Student Voices reduced-motion behavior, decorative video semantics, shared Button loading semantics, and Chinese body-level CJK fallback stack.

## Verification

- `node scripts/audit-localization.mjs` — **PASS**.
  - 20 App Router page routes; 18 English sitemap entries.
  - Eight configured launch locales: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
  - Metadata declarations present on all 20 page routes.
  - Localized `noindex, follow`, preview crawler safeguards, legal-page exclusions, and canonical-only policy remain in place.
  - Locale route switching, query/hash retention, selector accessible name, cookie persistence, and localized rewrites remain covered.
  - 30 shared interface-message keys checked across all eight locales.
  - Reduced-motion and accessibility checks passed for Faculty Grid, Intake Banner, Student Voices, shared Button loading state, and Chinese typography.
  - 110 TS/TSX files scanned; zero missing literal local assets and zero unmatched static internal page links.
- `tsc -p tsconfig.i18n.json --pretty false` — **PASS**.
- `node --check scripts/audit-localization.mjs` — **PASS**.
- ZIP archive integrity test — to be completed after packaging.

## Outstanding release blockers

- Full application lint, typecheck, and production build have **not** been run successfully in this environment because `node_modules` is absent. The project manifest still declares Next.js `^16.2.4` alongside `eslint-config-next` `15.1.0`; dependencies must be reconciled deliberately and installed from a working package registry before a full build can be certified. Do not suppress lint or build failures to get a green result.
- The seven non-English locales still require fluent-speaker and institutional review before publication or indexing.
- Privacy and Terms need the complete approved legal source text before they can be treated as final or indexed.
- Full responsive browser QA, keyboard and screen-reader testing, video playback checks, and a final SEO/release review remain outstanding.
- Localized routes remain `noindex, follow`; only approved English routes are listed in the sitemap. This run did not change that safeguard.

## Change boundaries

No institutional facts, programme details, admissions rules, legal clauses, translation wording, route structure, canonical policy, sitemap scope, or deployment settings were changed. No deployment or publication was performed.
