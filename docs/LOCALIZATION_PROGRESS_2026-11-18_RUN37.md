# IIFLHM Localization Progress — Run 37

## Critical issue investigated: language selector returns 404

### Root cause

The project uses the Next.js App Router under `src/app/`, but the locale-routing file was located at the repository root as `proxy.ts`. Next.js requires the `proxy.ts` convention to be located beside the `app/` or `pages/` directory. With this `src/` layout, the correct location is `src/proxy.ts`. The previous placement meant the locale rewrite layer could be missed by Next.js, so requests such as `/de/about`, `/sw/contact` and `/zh/academics` could reach the filesystem router as literal paths with no matching page and return 404.

This is the primary, code-supported cause. It explains why every non-English locale selection failed in the same way, rather than a translation dictionary problem.

### Changes made

1. Moved the Proxy implementation from root `proxy.ts` to `src/proxy.ts`, at the same level as `src/app/`.
2. Updated its import path to `./i18n/config`.
3. Kept the existing locale behavior: non-English prefixes rewrite to existing unprefixed routes; `x-iiflhm-locale` is passed to the request; locale cookies are persisted; explicit `/en/...` requests redirect to the canonical unprefixed English URL; localized responses retain `X-Robots-Tag: noindex, follow`.
4. Tightened the matcher so all `/_next/`, `/api`, and `/_vercel/` paths bypass locale redirects/rewrites. This prevents framework-internal requests from being treated as page routes.
5. Updated the language selector to use a full document navigation after preserving the current path, query string and hash. This ensures the selected locale cookie and server-rendered root layout (`html lang`, Navbar, Footer and WhatsApp copy) refresh together instead of relying on a client-side RSC transition through a rewrite.
6. Updated the localization audit to enforce the correct Proxy location and check all 140 non-English locale/page route combinations against the existing App Router route inventory.
7. Updated `docs/I18N_GUIDE.md` with the corrected architecture and deployment note.

## Verification

- `node scripts/audit-localization.mjs` — PASS.
- `tsc -p tsconfig.i18n.json --pretty false` — PASS.
- Route inventory — 20 App Router pages.
- Launch locales — 8 (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`).
- Non-English route matrix — 140 combinations checked against existing page routes.
- Static asset checks — 0 missing local assets.
- Static internal-link checks — 0 unmatched links.
- Proxy placement — `src/proxy.ts` exists beside `src/app/`; root-level `proxy.ts` removed.

## Not yet verified

The repository does not have installed project dependencies in this work environment, so a full Next.js production build and live HTTP/browser tests against Netlify were not run. The fix addresses the routing convention and code path, but the deployed site must be rebuilt and tested. After deployment, test direct loads and language switching on `/`, `/about`, `/academics`, `/admissions`, `/contact`, `/news`, `/gallery`, and `/student-voices` for each launch locale. Confirm that each URL remains prefixed for non-English locales, returns HTTP 200, and renders the selected locale in the document and shared layout.

No translation content, institutional facts, legal wording, SEO indexing safeguards or deployment settings were changed. No deployment was performed.

### Existing dependency-lockfile caveat

The independent Tailwind source audit confirms the source configuration is Tailwind 4 compatible, but `node scripts/audit-tailwind-v4.mjs` reports that `package-lock.json` is still stale for `daisyui`, `@tailwindcss/postcss`, and `@tailwindcss/typography`. This is pre-existing from the previous Tailwind migration and is separate from the locale-routing 404. Run `npm install` in a network-enabled environment and commit the regenerated lockfile before `npm ci` or a Netlify deployment. The full app lint/build cannot be certified until that dependency installation succeeds.
