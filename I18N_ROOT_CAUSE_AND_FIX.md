# I18N Root Cause Report & Fix

## Root causes (confirmed)

1. **Only Navbar used `useTranslations`** — Hero, FAQ, FinalCTA, Intake, WhyChooseUs, Programs, Testimonials, EmpoweringSection, Footer used hard-coded English.
2. **Message files lacked `home` namespace** — only `nav`, `cta`, `pages`, `footer`, `brand`, `courses`. Switching locale had almost nothing for page body to load.
3. **Footer not localized** — no `useTranslations`.
4. **Some links used `next/link`** instead of `@/i18n/routing` `Link` (fixed in wired components).
5. **Non-de/sw locales** were thin English copies for body; nav/cta now localized for fr/es/nl/it/zh; full home copy prioritized for en/de/sw.

## Framework status after fix

| Surface | Status |
|---------|--------|
| Navbar | Translated (was already) |
| Footer | Translated |
| Hero slides + CTAs | Translated |
| Intake banner | Translated |
| Empowering section | Translated |
| Programmes section chrome | Translated |
| Why choose us | Translated |
| Testimonials chrome | Translated (quotes stay authentic source language) |
| FAQ | Translated |
| Final CTA | Translated |
| About / Contact pages | Translated |
| Language switcher URL | next-intl Link + locale (navbar) |

## Content backlog
- Deep academic programme body pages (long English prose) — structure ready; expand messages when needed.
- Alumni quote translation optional (authentic voice often left in original).
- fr/es/nl/it/zh home body can be upgraded from English base to full native copy later.

## Verify manually
1. Open `/de` — navbar, hero, FAQ, footer in German.
2. Switch to Kiswahili — URL `/sw`, full chrome updates.
3. Switch to Français — nav/footer/CTAs in French.
