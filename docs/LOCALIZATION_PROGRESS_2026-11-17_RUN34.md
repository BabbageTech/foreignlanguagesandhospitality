# IIFLHM Release Validation and TypeScript Correction — Run 34

**Date:** 17 November 2026  
**Base:** `IIFLHM-localization-run33-build-fix.zip`  
**Scope:** Address the next Netlify TypeScript failure, review the related component contract, run all checks available in this environment, and add a repeatable release-verification command.  
**Deployment:** Not performed.

## Reported Netlify failure

The supplied production log showed that Next.js compilation completed, then TypeScript checking failed in `src/components/home/ProgramsHighlight.tsx`:

```text
Property 'borderColor' does not exist on type
'IntrinsicAttributes & Omit<ProgramCardProps, "borderColor">'.
```

The local `ProgramCard` function explicitly accepted `Omit<ProgramCardProps, 'borderColor'>`, but the mapped JSX invocation still passed `borderColor=""`. The property was not used by the component.

## Correction implemented

- Removed the obsolete `borderColor` property from the private `ProgramCardProps` interface.
- Changed the `ProgramCard` parameter type to `ProgramCardProps` directly instead of maintaining an unnecessary `Omit` type.
- Removed the unsupported and unused `borderColor` JSX prop.
- Expanded the mapped JSX into a readable multi-line component invocation.
- Preserved the existing card content, images, icons, destinations, colors, layout and localized copy.

No TypeScript suppression, `any` cast, ignored build error or disabled type-check was introduced.

## Release-check workflow added

Added the `verify:release` npm script:

```bash
npm run verify:release
```

It runs, in order:

1. `npm run audit:i18n`
2. `npm run typecheck:i18n`
3. `npm run audit:tooling`
4. `npm run lint`
5. `tsc --noEmit`
6. `npm run build`

The README now documents `npm ci` followed by this single release-verification command. The existing `build` script and Netlify UI build command were not changed.

## Verification actually completed in this environment

- `node scripts/audit-localization.mjs` — **PASS**. The audit reported 20 page routes, eight launch locales, metadata coverage, indexing safeguards, localized legal notices, locale navigation, shared message keys, accessibility refinements, and no missing local assets or unmatched internal links.
- `node scripts/audit-eslint-tooling.mjs` — **PASS**. Manifest/lockfile declarations and ESLint configuration structure passed the project's tooling audit. The audit notes that Next.js-specific core-web-vitals rules are not loaded.
- TypeScript compiler API syntax transpilation — **PASS** for 109 TypeScript/TSX implementation files; zero syntax diagnostics and zero compiler exceptions.
- Static regression inspection — **PASS**. `ProgramsHighlight.tsx` no longer declares or passes the obsolete `borderColor` prop.
- `package.json` JSON parsing — **PASS** after adding the release-verification script.

## Checks blocked by dependency installation

A fresh `npm ci --ignore-scripts --no-audit --no-fund` attempt timed out after five minutes. The resulting `node_modules` directory was incomplete; the local `next`, `eslint`, and required `@types` packages were unavailable.

Consequently:

- `npm run typecheck:i18n` — **BLOCKED** by missing type definitions (`estree`, `json-schema`, `node`, `react`, `react-dom`).
- `tsc --noEmit` — **BLOCKED** by the same missing type definitions.
- `npm run lint` — **BLOCKED** because the local `eslint` executable was not installed.
- `npm run build` — **BLOCKED** because the local `next` executable was not installed.
- `npm run verify:release` — **NOT COMPLETED**; it correctly stops at the first blocked prerequisite.

These are environment/dependency-installation limitations, not passing test results. No claim is made that the full application type-check, lint or production build passed.

## Test-suite inventory and limitations

The repository currently has no dedicated `test` script and no discovered `tests`, `__tests__` or `e2e` directory. The release command therefore runs the checks that are currently defined by the project; it does not claim unit, integration, browser or end-to-end test coverage.

The source-level syntax transpilation is not a substitute for TypeScript semantic type-checking. The production build remains the authoritative Next.js compilation/type-check gate.

## Required next verification

In a network-enabled environment, from the project root:

```bash
npm ci
npm run verify:release
```

Resolve every reported lint, semantic type or production-build error and rerun the complete command until it exits successfully. Only then use the normal Netlify production deployment. The Netlify build command remains `npm run build`; the separate `verify:release` command is available for local/CI pre-deployment validation.

## Outstanding release caveats

Run 32/33 release caveats remain applicable: translated content still needs fluent-speaker review; institutional Privacy/Terms wording requires approval; and browser, accessibility and real form-submission QA have not been demonstrated by the checks in this run.
