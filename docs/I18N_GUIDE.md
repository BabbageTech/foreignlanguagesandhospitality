# IIFLHM Internationalization Guide

## Architecture Choice: next-intl

**Why next-intl?**
- First-class support for Next.js App Router and Server Components
- Type-safe messages
- Locale-aware routing and navigation helpers
- Built-in middleware for locale detection and prefixing
- Minimal client bundle impact compared to heavier i18n frameworks
- Aligns with production institutional sites

Alternative considered: custom dictionary + middleware. Rejected for long-term maintainability and SEO helpers.

## Locale Model

Active launch locales:
```
en  English
de  Deutsch
sw  Kiswahili
fr  Français
es  Español
nl  Nederlands
it  Italiano
zh  简体中文
```

Future-ready (config only until content is ready):
```
pt ar ja ko hi tr ru
```

Configuration lives in `src/i18n/config.ts`.

## Routing

Preferred structure:
```
/[locale]/...
```
Examples: `/en/about`, `/de/about`, `/sw/academics/languages`

- `localePrefix: "always"` so every URL is explicit and crawlable
- Middleware: `src/middleware.ts`
- Navigation helpers: `src/i18n/routing.ts` → `Link`, `useRouter`, `usePathname`, `redirect`

Language switching **preserves the current path** (and query where applicable).

## Message Structure

```
messages/
  en/
    common.json      # site, nav, footer, common UI, whatsapp, intake
    home.json        # homepage sections
    about.json
    academics.json
    forms.json       # labels, validation, success/error
    seo.json         # page titles & descriptions
  de/ ...
  sw/ ...
  ...
```

Load via `getRequestConfig` in `src/i18n/request.ts`.  
Fallback chain: requested locale → `en` → safe static fallback only if absolutely required.

## Adding a New Locale

1. Add code to `locales` array in `src/i18n/config.ts`
2. Add native name to `localeNames`
3. Add direction to `localeDirections` (use `rtl` for Arabic)
4. Create `messages/{code}/` with the same file set as English
5. Translate professionally (do not machine-translate and publish)
6. Update middleware matcher if needed
7. Rebuild and verify hreflang / sitemap

## Language Selector UX

- Component: `src/components/layout/LanguageSelector.tsx`
- Native names only (flags optional secondary cue)
- Keyboard accessible (Escape closes, focus returns)
- Desktop: compact in navbar
- Mobile: available in mobile nav without exploding the menu

## SEO

- Localized metadata via `generateMetadata` in `[locale]/layout.tsx` and page-level helpers
- `alternates.languages` for hreflang
- `x-default` → English (or primary marketing locale)
- Canonical per locale URL
- Multilingual sitemap (generate from `locales` × routes)
- `NEXT_PUBLIC_SITE_URL` for production domain consistency

## RTL Preparation

- `dir` set from `getLocaleDirection(locale)`
- Prefer logical CSS properties (`margin-inline`, `ps-`, `pe-`, `text-start`) when touching layout
- Do not break existing LTR design

## CJK Notes

- Font: Inter + system CJK fallbacks in CSS
- Avoid forcing `uppercase` / extreme `tracking` on zh content
- Allow natural wrapping; test buttons and nav at 320px

## Forms & WhatsApp

- Validation messages live under `forms` namespace
- WhatsApp default message is locale-aware (`whatsapp.defaultMessage`)
- Phone number from central `SOCIAL_LINKS.whatsapp`

## Content Rules

- Do not invent accreditations, partnerships, guarantees
- Keep official brand name consistent unless an official localized form is approved
- Technical terms (B1, B2, CEFR, Ausbildung) retained with natural explanation
- Intake date from `CURRENT_INTAKE` in constants

## Testing Checklist

- [ ] All 8 locales load without missing keys (or intentional fallback)
- [ ] Language switch keeps page context
- [ ] Mobile menu + language selector keyboard usable
- [ ] No horizontal overflow with German/French/Chinese labels
- [ ] Canonical + hreflang correct
- [ ] Forms submit with locale metadata
- [ ] WhatsApp message matches locale

