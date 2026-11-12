# I18N & SEO Guide — IIFLHM

## Locales
en English | de Deutsch | sw Kiswahili | fr Français | es Español | nl Nederlands | it Italiano | zh 简体中文

Default/fallback: en. Future-ready: pt, ar (RTL), ja, ko, hi, tr, ru.

## Architecture
- Routing: `/[locale]/...` via middleware
- Messages: `messages/{locale}/{namespace}.json`
- Helpers: `src/i18n/config.ts`, `src/i18n/request.ts`, `src/lib/seo.ts`
- Language selector preserves path + query

## SEO
- `buildPageMetadata({ locale, path, title, description })` → canonical, hreflang, OG, Twitter
- Sitemap: `/sitemap.xml` (all locales × public paths)
- Robots: allows public, blocks `/api/`
- JSON-LD: EducationalOrganization + WebSite
- Domain: `NEXT_PUBLIC_SITE_URL` or SITE_CONFIG.website

## Fallback
requested locale → English → return the key string (never undefined)

## Rules
No invented accreditations, ratings, or partnerships. Official names stay stable. Brand colours preserved.
