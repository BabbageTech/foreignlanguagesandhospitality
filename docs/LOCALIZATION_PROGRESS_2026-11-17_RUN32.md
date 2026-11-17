# IIFLHM Localization Progress — Run 32

**Date:** 17 November 2026  
**Base:** Run 31 archive  
**Scope:** Legal-page transparency, privacy disclosure at data-entry points, dependency-lock cleanup, and expanded release checks.  
**Deployment:** Not performed.

## Changes implemented

1. **Privacy and Terms pages no longer resemble completed legal documents.** The previous generic text could be mistaken for a complete privacy policy or enforceable terms despite not containing the required institutional detail. Both pages now identify themselves as interim notices and state plainly that institution-approved documents have not yet been supplied.
2. **Eight-locale interim notices.** The Privacy and Terms interim disclosures and their approval-pending labels are provided for `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, and `zh`. These are translation drafts and still require fluent-speaker/institutional review.
3. **Privacy limitation surfaced beside forms.** Both the contact enquiry form and the admissions form now display the localized interim privacy notice and a locale-aware link to the Privacy page before users submit personal details or supporting documents.
4. **Legal SEO safeguards retained.** Privacy and Terms remain `noindex, follow` and excluded from the English sitemap. Localized routes remain non-indexable until approval; no premature `hreflang` alternates were added.
5. **Dependency lockfile cleaned.** Ran `npm install --package-lock-only --ignore-scripts --no-audit --no-fund --offline`. This removed stale, unreachable `eslint-config-next@15.1.0`, its old Next plugin and other orphaned lock entries. The root lockfile dependency declarations still match `package.json` values.
6. **Tooling audit strengthened.** `scripts/audit-eslint-tooling.mjs` now checks that no stale Next 15 ESLint preset/plugin remains in the manifest or lockfile, that Next's locked major matches the declared line, and that React and React DOM use the same major.
7. **No institutional facts or policy terms were invented.** The disclosures deliberately state what is missing rather than asserting a data-processing basis, retention period, contractual term, fee, refund rule, or legal right that the institution has not approved.

## Verification

- `npm ls --package-lock-only --depth=0` — **PASS**; all declared direct dependencies resolve in the lockfile.
- `node scripts/audit-eslint-tooling.mjs` — **PASS**; no stale Next 15 ESLint preset remains, Next 16.2.4 and React/React DOM 19.2.5 are lock-resolved, plugin declarations match the lockfile, and the flat-config markers are present.
- `node --check scripts/audit-eslint-tooling.mjs` — **PASS**.
- `node --check scripts/audit-localization.mjs` — **PASS**.
- `node scripts/audit-localization.mjs` — **PASS**.
  - 20 App Router page routes and 18 English sitemap entries.
  - Eight launch locales.
  - Metadata declarations on all 20 routes.
  - Localized `noindex, follow`, preview crawler disallow, legal-page exclusions, and canonical-only policy.
  - Locale switching, query/hash retention, selector accessible name, cookie persistence, and localized rewrites.
  - 30 shared interface-message keys across all eight locales.
  - Legal interim notices in all eight locales and disclosures beside both enquiry forms.
  - 110 TS/TSX files scanned; zero missing literal local assets and zero unmatched static internal page links.
- `tsc -p tsconfig.i18n.json --pretty false` — **PASS**.
- TypeScript `transpileModule` syntax check — **PASS**, 109 TS/TSX source files, zero syntax errors.

## Outstanding blockers — not safe to fabricate

### 1. Full Next.js ESLint preset and runtime lint

The stale `eslint-config-next@15.1.0` mismatch is removed and the project uses an ESLint 9 flat configuration. However, the official Next.js 16 flat-config integration is `eslint-config-next/core-web-vitals` (and `eslint-config-next/typescript` for TypeScript). The matching `eslint-config-next@16.2.4` package is not yet installed or locked, so Next-specific rules are not currently loaded and the actual ESLint run has not been certified. The correct package version is known, but npm registry access failed with `EAI_AGAIN`; do not hand-write package integrity hashes or fabricate dependency metadata. Once registry access returns, install the matching preset and complete runtime lint.

Official guidance: https://nextjs.org/docs/app/api-reference/config/eslint and https://nextjs.org/docs/app/guides/upgrading/version-16

### 2. Full application build

The environment has no installed `node_modules`. `npm ci` timed out while attempting package retrieval, and the exact package metadata lookup failed with `EAI_AGAIN`. The independent i18n typecheck and source syntax checks pass, but the full application typecheck and `next build` remain unverified.

### 3. Institutional and human approvals

- The seven non-English launch locales require fluent-speaker review and institutional sign-off. Automated completeness checks cannot certify translation quality or cultural/legal correctness.
- The institute must provide approved Privacy and Terms source documents, including actual data collection/use/sharing/retention/contact details and approved contractual terms. The interim notices are transparency safeguards, not substitutes for legal documents.
- Any legal-page translations must also be reviewed before publication or indexing.

### 4. Release QA

Full browser/device responsive testing, keyboard and screen-reader testing, real form-provider submission tests, media playback checks, and final SEO/release review remain outstanding. No deployment or publication was performed.

## Release posture

The codebase now makes the missing legal approvals visible to users at the point where forms collect information and removes the stale Next 15 lint package from the dependency lock. It is **not release-certified**. Keep translated routes and legal pages non-indexable until institutional and language approvals are complete, and complete the matching Next 16 ESLint preset installation plus full build in a network-enabled environment.
