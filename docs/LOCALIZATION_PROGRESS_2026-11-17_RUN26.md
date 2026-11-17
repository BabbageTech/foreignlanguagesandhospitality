# IIFLHM Localization Progress — Run 26

## Locale navigation and preview crawler safeguards


Date: 17 November 2026  
Checkpoint: continuation from the uploaded Run 25 archive

### Implemented

- Corrected `localePath()` so English internal navigation uses the existing canonical unprefixed URLs (`/about`) rather than generating `/en/about` and forcing an avoidable redirect on every English navigation.
- Added `localeSwitchPath()` for the language selector. Explicitly selecting English still visits `/en/...`, allowing `proxy.ts` to persist the English locale cookie before redirecting to the canonical unprefixed route. Non-English locale switches continue to use `/{locale}/...`.
- Updated `LanguageSelector` to use the explicit locale-switch helper while preserving the current pathname, query string and hash.
- Extended `robots.ts` preview detection to cover Netlify `CONTEXT=deploy-preview` and `CONTEXT=branch-deploy`, as well as Vercel preview deployments. Production and local environments retain the existing allow policy.
- Updated the internationalization guide and QA notes to describe the current URL behavior and preview crawler policy.

### Verification

- TypeScript transpilation: PASS for all 111 `.ts`/`.tsx` source/config files; zero syntax diagnostics.
- Locale URL behavior checks: PASS for English canonical links, English explicit locale switching, German links, Chinese switching, and locale-prefix normalization.
- Asset checks: PASS for the existing logo and hero image referenced by structured data.
- Route metadata presence: all 20 current `page.tsx` routes contain route metadata or a metadata generator.
- Full `npm ci --no-audit --no-fund`: BLOCKED; timed out in the current environment. No complete dependency tree was installed.
- Full ESLint, Next.js build, project type-check, browser/crawler inspection, accessibility and responsive QA: NOT RUN because dependencies/runtime are unavailable.

### Newly confirmed dependency concern

- `package.json` / `package-lock.json` currently pair `next@^16.2.4` with `eslint-config-next@15.1.0`. This major-version mismatch should be resolved through a network-enabled npm lockfile update and verified with `npm ci`; it was not hand-edited because the package's exact dependency graph could not be resolved in this environment.

### Remaining release blockers

1. Restore dependencies and align `eslint-config-next` with the installed Next.js major, then run lint, strict project type-check and production build.
2. Obtain complete institution-approved Privacy and Terms documents and qualified legal review. Current legal pages are placeholders and remain noindex/excluded from the sitemap.
3. Complete route-by-route visual, responsive, keyboard, screen-reader, media-control and Simplified Chinese typography QA.
4. Obtain fluent-speaker and institutional review of all seven non-English translation drafts, plus approval for testimonials, biographies, qualifications and other controlled claims.
5. Keep non-English routes `noindex, follow`; do not add reciprocal hreflang or localized sitemap entries until equivalent pages are approved and release-tested.

### Release status

This is an incremental source checkpoint, not a production-ready release. No deployment, publication, production configuration changes or external communications were performed.
