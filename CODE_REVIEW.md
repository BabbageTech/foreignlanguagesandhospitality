# Code Review — IIFLHM Multilingual Site

**Date:** 2026-11-12  
**Scope:** i18n architecture, Netlify build readiness, constants, routing, accessibility baseline  
**Tests run:** 35/35 unit + static checks passing  

## Summary

| Area | Status | Notes |
|------|--------|-------|
| next-intl dependency | ✅ | Present in package.json |
| Middleware + routing | ✅ | localePrefix always, matcher excludes api/static |
| Message files | ✅ | 8 locales, nav key parity |
| getSiteUrl / SITE_CONFIG | ✅ | Single source of truth, no vercel.app |
| languageCourseMeta | ✅ | Exported for useLocalizedCourses |
| Build ignore flags | ⚠️ | eslint/typescript ignoreDuringBuilds still on — technical debt |
| Dual route trees | ⚠️ | Legacy `/about` etc. still exist alongside `/[locale]/about` |
| Contact form | ⚠️ | Client form preventDefault only — not wired to API yet (honest) |
| Social links | ℹ️ | Empty strings (no fake # links) |
| t.has usage | ✅ Fixed | Replaced with direct t("subtitle") |

## Strengths

1. next-intl plugin correctly pointed at `src/i18n/request.ts`
2. Fallback to English when locale messages fail to load
3. Language switcher preserves pathname via next-intl `Link` + `locale` prop
4. Brand colours and institutional name preserved
5. WhatsApp number format correct for wa.me links
6. Canonical + hreflang alternates generated in locale layout metadata

## Issues found & remediation

### Fixed in this pass
- **P1:** `t.has("subtitle")` is not reliable on next-intl server translators → replaced with `t("subtitle")` and ensured subtitle keys exist in all message files.

### Remaining (non-blocking for Netlify green build)
1. **P2:** Remove or redirect legacy non-locale pages under `src/app/{about,contact,...}` to avoid duplicate content once middleware is trusted in all environments.
2. **P2:** Turn off `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` after a clean `tsc --noEmit` / `next lint` pass.
3. **P3:** Wire contact/admissions forms to real Formspree/API endpoints; keep UX honest until then.
4. **P3:** Deep page body content still largely English except UI chrome for non-de/sw locales.
5. **P3:** Add Playwright smoke tests for locale switching and key routes.

## Security / content

- No invented accreditations or partnerships in constants/messages reviewed
- Contact emails/phones consistent with SITE_CONFIG
- Empty social URLs preferred over placeholder `#`

## Test plan executed

```bash
npm test          # 35 tests — message parity, source presence, locale logic, getSiteUrl
npm run build     # verify SSG for 8 locales × public routes
```

## Recommendation for Netlify

1. Deploy this tree (or ZIP `IIFLHM-netlify-fixed` + this review’s fixes)
2. Env: `NEXT_PUBLIC_SITE_URL=https://foreignlanguagesandhospitality.com`
3. Build: `npm run build`
4. Confirm middleware redirects `/` → `/en` (or detected locale)
