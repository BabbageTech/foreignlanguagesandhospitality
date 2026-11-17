# IIFLHM Build Correction — Run 33

**Date:** 17 November 2026  
**Base:** `IIFLHM-localization-run32-2026-11-17.zip`  
**Scope:** Correct the Netlify production-build TypeScript failure reported in `src/components/admissions/AdmissionForm.tsx`.  
**Deployment:** Not performed.

## Reported failure

The supplied Netlify production log showed that Next.js compilation completed, but the build stopped during TypeScript checking:

```text
./src/components/admissions/AdmissionForm.tsx:161:18
Type error: Cannot find name 'STEPS'.
```

The `StepIndicator` component receives its step labels through the `labels` prop and iterates over `labels`. Its connector condition incorrectly referenced an undeclared `STEPS` identifier.

## Correction implemented

- Replaced `STEPS.length` with `labels.length` in the step-connector condition.
- Kept the existing three-step admissions flow, labels, form validation, translations, submission behavior and visual structure unchanged.
- Did not add a duplicate step definition, suppress TypeScript errors, or bypass the production type check.

The connector is now rendered between adjacent labels based on the actual labels supplied to the component.

## Verification completed

- `npm run audit:i18n` — **PASS**; 20 page routes, 18 English sitemap entries, eight launch locales, metadata coverage, indexing safeguards, legal notice safeguards, locale navigation, 30 shared message keys, and static asset/link references checked.
- `npm run typecheck:i18n -- --pretty false` — **PASS**.
- `npm run audit:tooling` — **PASS**; manifest/lockfile declarations and ESLint tooling structure checked. The audit still notes that Next.js-specific ESLint core-web-vitals rules are not loaded.
- TypeScript compiler API syntax transpilation — **PASS** for 109 TS/TSX files; zero syntax diagnostics.
- `node --check` — **PASS** for both project audit scripts.
- Static regression check — **PASS**; no remaining `STEPS` identifier references under `src`, and `StepIndicator` uses `labels.length`.

## Verification still blocked

- `npm ci --ignore-scripts --no-audit --no-fund` was attempted but timed out. The dependency installation did not complete.
- Full `tsc --noEmit` remains blocked by missing installed type packages (`estree`, `json-schema`, `node`, `react`, and `react-dom`).
- `npm run lint` and `npm run build` could not be rerun because the local dependency installation did not complete and the Next.js executable is unavailable.
- The supplied Netlify log proves that the pre-fix Next.js compilation stage completed, but the corrected project has not yet been verified by a complete fresh Netlify build.

## Deployment handover

In a network-enabled environment, run:

```bash
npm ci
npm run audit:i18n
npm run typecheck:i18n
npm run audit:tooling
npm run lint
npx tsc --noEmit
npm run build
```

Do not deploy until the full lint, application type-check and production build complete successfully. No TypeScript/build bypasses were introduced. Existing release caveats from Run 32 remain in force, including institutional/legal approvals, fluent-speaker review, and browser/accessibility QA.
