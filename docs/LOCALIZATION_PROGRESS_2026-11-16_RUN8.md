# IIFLHM Localization Progress — Run 8 (16 November 2026)

## Scope
Continued from the Run 7 archive. This run localizes the Career Opportunities landing page at `/career-opportunities` for all eight launch locales: English (`en`), German (`de`), Kiswahili (`sw`), French (`fr`), Spanish (`es`), Dutch (`nl`), Italian (`it`) and Simplified Chinese (`zh`).

## Files changed
- `src/i18n/careers.ts` — new eight-locale resource for the landing page.
- `src/app/career-opportunities/page.tsx` — server-side locale resolution, localized page content and locale-aware title, description and Open Graph metadata.
- `docs/CODEBASE_AUDIT.md`
- `docs/I18N_GUIDE.md`
- `docs/TRANSLATION_INVENTORY.md`
- `docs/QA_REPORT.md`

## Implemented
- Hero eyebrow, headline, supporting copy, image alternative text and CTAs.
- Opportunity Hub introduction and Germany information panel.
- Three existing pathways (Ausbildung, undergraduate, master's), descriptions and feature lists.
- Career guidance panel, support labels and closing CTA.
- Locale-aware metadata for the landing page.
- Existing photography, page structure, pathway ordering and destination routes retained.
- Employment, placement, visa, tuition and admission outcomes are qualified rather than guaranteed.

## Verification
- TypeScript compiler API syntax transpilation: PASS for the two changed/new TS files; zero syntax diagnostics.
- Static presence check: PASS for all eight locale objects.
- `npm run lint`: BLOCKED, exit 127 (`eslint: not found`).
- `npm run build`: BLOCKED, exit 127 (`next: not found`).
- `./node_modules/.bin/tsc --noEmit`: BLOCKED, exit 127 (local TypeScript executable absent).
- No browser, responsive, keyboard, screen-reader or live locale-switching QA performed.

## Remaining Careers work
The three detail routes remain English and are not complete:
1. `/career-opportunities/apprenticeship`
2. `/career-opportunities/undergraduate`
3. `/career-opportunities/masters`

Their content and metadata need full locale resources, while preserving institutional facts and qualifying requirements that vary by provider, university, employer and current immigration rules. The translations added in this run are drafts and require fluent-speaker and institutional review.

## Next priority
Continue with the three Career Opportunities detail routes, then proceed to Gallery, News, Student Voices, Privacy and Terms. Continue to keep non-English routes `noindex, follow` until each equivalent page is fully translated and reviewed. Complete the shared metadata/hreflang/sitemap work only after equivalent route content is ready.

No deployment, publication, production-setting changes, irreversible changes or external communications were made.
