# IIFLHM Multilingual — Status & Handoff

**Updated:** 2026-09-23

## Deliverable package

**`/home/workdir/artifacts/iiflhm-multilingual.zip`** (≈68MB)  
Contains the full project with:

### Architecture
- `next-intl` dependency declared in `package.json`
- `src/i18n/config.ts` — 8 locales + future list
- `src/i18n/request.ts` — loads common + home + forms
- `src/i18n/routing.ts` — locale-aware Link / router
- `src/middleware.ts` — locale detection & prefix
- `src/app/[locale]/…` — all pages under locale segment
- `src/app/[locale]/layout.tsx` — html lang/dir, provider, metadata + hreflang
- `next.config.ts` — next-intl plugin
- `src/app/sitemap.ts` — multilingual sitemap
- `src/app/robots.ts`

### UI
- `LanguageSelector` — native names, keyboard accessible
- `Navbar` / `Footer` / `WhatsAppFab` — translated chrome, locale Links
- `FinalCTA` — no fake subscription; real admissions/contact CTAs
- `Hero` / `IntakeBanner` — translated CTAs & intake label

### Messages (8 locales)
`messages/{en,de,sw,fr,es,nl,it,zh}/`
- `common.json` — site, nav, footer, whatsapp, intake
- `home.json` — hero, sections, final CTA
- `forms.json` — contact + admissions labels & validation

### Config
- Single `SITE_CONFIG`, `CONTACT_INFO`, `SOCIAL_LINKS`, `CURRENT_INTAKE`, `getSiteUrl()`

### Docs (also in zip under `docs/`)
- `CODEBASE_AUDIT.md`
- `I18N_GUIDE.md`
- `IMPLEMENTATION_STATUS.md`

## Run locally

```bash
unzip iiflhm-multilingual.zip
cd foreignlanguagesandhospitality-main
npm install --legacy-peer-deps
npm run dev
```

Open `/en`, `/de`, `/sw`, … Language selector preserves the current path.

## Still English (body content)

Programme detail pages, language catalogue bodies, FAQ answers, testimonials quotes, news articles — not yet extracted. **Chrome UI is multilingual.**

## Next recommended work

1. Wire remaining home sections (`WhyChooseUs`, `ProgramsHighlight`, `FAQ`, `Testimonials`) to `home.*` keys  
2. Localize ContactForm / AdmissionForm with `forms.*`  
3. Language course data → stable IDs + translation maps  
4. Modal a11y + `prefers-reduced-motion`  
5. Remove `ignoreBuildErrors` after clean TS pass  

## Brand preserved

Navy `#0A2540`, red `#E30613`, gold `#F2C12C`, institutional photography and layout — not redesigned.
