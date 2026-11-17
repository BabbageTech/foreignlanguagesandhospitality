# Run 37 — Locale-switching 404 fix

The project uses `src/app`, so Next.js Proxy must be placed at `src/proxy.ts`, beside the App Router directory. The previous root-level `proxy.ts` was outside the `src/` application directory and could be missed by Next.js route discovery. Without the Proxy rewrite, locale-prefixed URLs such as `/de/about` have no matching physical route and can return 404.

This patch moves the implementation to `src/proxy.ts`, updates its import, preserves locale rewrite/cookie/header behavior, excludes API/Next/Vercel internal paths in the matcher, and changes the language selector to a full navigation while preserving path/query/hash. It also extends `audit:i18n` to check the Proxy location and all 140 non-English locale/page combinations.

Verification: `node scripts/audit-localization.mjs` passes; `tsc -p tsconfig.i18n.json --pretty false` passes. A production build and live Netlify/browser test have not been run. The existing package manifest/lockfile mismatch remains: `package-lock.json` does not yet match the Tailwind 4/daisyUI 5 dependencies in `package.json`. Regenerate the lockfile with `npm install` in a network-enabled environment before using `npm ci` or deploying.
