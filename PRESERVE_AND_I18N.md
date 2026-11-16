# I18N on original site (structure preserved)

## Principle
Original layout, styling, images, and page components kept.
Only language layer added: next-intl + messages + selective string wiring.

## All 8 locales
en, de, sw, fr, es, nl, it, zh — each has messages/*.json

## What switches for every locale
- Navbar labels + Apply Now + language selector (all 8 native names)
- Hero slide titles/descriptions + CTAs
- Intake banner
- FAQ
- Final CTA
- Footer labels (where wired)
- Brand tagline

## Original pages
about, academics, admissions, careers, etc. still render **original components** under `/[locale]/...` wrappers (styling/content structure unchanged). UI chrome translates; deep page body of those originals remains as in source until those files are string-extracted later.

## Detection
Cookie NEXT_LOCALE → Accept-Language → en
