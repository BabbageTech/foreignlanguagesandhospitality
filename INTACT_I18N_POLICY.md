# Intact original + deep i18n

## Policy
1. **Base** = original institution website (structure, components, images, styling).
2. **Do not** replace rich pages with simplified stubs.
3. **Locale routes** wrap original pages: `src/app/[locale]/about` → original `src/app/about/page`.
4. **Translation** is layered via next-intl + `messages/*.json` (all 8 locales, deep copy).
5. **UI chrome** (Navbar, Hero text, selected home strings) uses `t()`; component trees stay original.

## What changes with language
- Navbar labels + language selector (8 locales)
- Hero titles/descriptions/CTAs
- Message-backed home strings where wired
- URL prefix `/de`, `/fr`, …

## What stays intact
- About page composition (FounderBio, MissionVision, CoreValues, FacultyGrid, Facilities)
- Admissions, Contact, Academics original pages
- Images, layout spacing, brand colors, logo
