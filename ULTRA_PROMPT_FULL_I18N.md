# ULTRA HIGH-LEVEL PROMPT — Full-site i18n (originality preserved)

ROLE: Senior Next.js / next-intl engineer for IIFLHM.

GOAL: Every page and subpage of the site switches language completely for all 8 locales
(en, de, sw, fr, es, nl, it, zh). Do NOT redesign. Preserve structure, styling, images,
brand colors (#0A2540, #E30613, #F2C12C), logo, and authentic institutional content.
Only language presentation changes.

CONSTRAINTS:
- No invented accreditations, partners, or testimonials
- next-intl + messages/*.json only
- localePrefix always; dynamic detection via cookie + Accept-Language
- Keep original visual system

SCOPE (all must translate):
Home (hero, intake, FAQ, CTAs, sections), Navbar, Footer, About, Admissions, Contact,
Academics index + all programme subpages, Careers index + undergraduate/masters/apprenticeship,
News, Student Voices, Gallery, Privacy, Terms, forms labels, CTAs, metadata titles.

DELIVER: full message keys per locale; components use useTranslations/getTranslations;
locale-aware Link; build passes.
