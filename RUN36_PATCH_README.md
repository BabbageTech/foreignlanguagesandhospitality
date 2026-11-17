# Run 36 — Netlify Tailwind/PostCSS build repair

This patch addresses the exact Netlify error where Tailwind CSS 4 was configured as the PostCSS plugin directly. It also aligns the project's CSS and daisyUI integration with Tailwind CSS 4.

## Apply

Extract this archive over the project root, preserving the included directory structure. Review the changes, then from the repository root run:

```bash
npm install
npm run audit:tailwind
npm run audit:i18n
npm run typecheck:i18n
npm run audit:tooling
npm run lint
npx tsc --noEmit
npm run build
```

`npm install` is required first because the archive's package-lock could not be regenerated in the offline patch environment. Commit the newly generated `package-lock.json`. If Netlify is configured to use `npm ci`, this is mandatory before deploying.

The patch retains the existing brand palette, gradients, global styles, reduced-motion CSS and current component markup. It moves the Typography and daisyUI plugin registrations into the CSS-first Tailwind v4 configuration.

The missing build-cache warning in Netlify is unrelated to the PostCSS error and may be addressed separately.
