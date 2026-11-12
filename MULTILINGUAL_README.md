# IIFLHM — Multilingual Build

## Locales
en, de, sw, fr, es, nl, it, zh

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000 — middleware redirects to `/en` (or preferred locale).

## Production
```bash
NEXT_PUBLIC_SITE_URL=https://foreignlanguagesandhospitality.com
npm run build && npm start
```

## Structure
- `src/i18n/` — locale config + message loading
- `messages/{locale}/` — translation JSON
- `src/lib/seo.ts` — metadata, hreflang, structured data helpers
- `src/middleware.ts` — locale detection & routing
- `src/components/layout/LanguageSelector.tsx` — language switcher

See `I18N_GUIDE.md` and `CODEBASE_AUDIT.md` for full documentation.
