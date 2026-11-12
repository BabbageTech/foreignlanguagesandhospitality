# CODEBASE AUDIT — International Institute of Foreign Languages & Hospitality Management (IIFLHM)

**Date:** 2026-11-11  
**Scope:** Full repository inspection prior to internationalization, accessibility, SEO, UX and architectural evolution.  
**Principle:** Preserve authentic institutional identity. Improve only where evidence shows genuine gaps in usability, accessibility, localization readiness, SEO, consistency, maintainability or correctness.

---

## 1. Architecture Overview

| Aspect | Current State |
|--------|---------------|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 + DaisyUI (custom "institute" theme) |
| Animation | Framer Motion |
| Forms | react-hook-form + Zod + @hookform/resolvers |
| Fonts | Inter (Google) |
| Output | `standalone` (Vercel-oriented) |
| i18n | **None** |
| Routing | Flat English-only routes under `src/app` |
| Client components | ~31 files marked `"use client"` |

### Directory structure (src)

```
src/
├── app/                    # App Router pages + layout + API
│   ├── about/
│   ├── academics/          # languages, german-language, hospitality-management, ict, nursing-preparation, travel-tourism
│   ├── admissions/
│   ├── api/submit-form/
│   ├── career-opportunities/ (apprenticeship, masters, undergraduate)
│   ├── contact/
│   ├── gallery/
│   ├── news/
│   ├── privacy/
│   ├── student-voices/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about/
│   ├── academics/
│   ├── admissions/
│   ├── common/
│   ├── contact/
│   ├── gallery/
│   ├── home/               # Hero, IntakeBanner, ProgramsHighlight, WhyChooseUs, Testimonials, FAQ, FinalCTA, etc.
│   ├── languages/          # Language-data, LanguageModal, LanguageGrid, CategoryFilter, types
│   └── layout/             # Navbar, Footer, WhatsAppFab
├── lib/                    # constants, metadata, utils, formspree
└── types/                  # form, program, faculty, testimonial, etc.
```

---

## 2. Design System & Brand Identity (PRESERVE)

### Colours (already tokenised in `tailwind.config.ts`)

- **Primary (Navy):** `#0A2540` → `primary`
- **Secondary (Red):** `#E30613` → `secondary`
- **Accent (Gold):** `#F2C12C` → `accent`
- Supporting: `brand.gray`, `brand.charcoal`, DaisyUI `institute` theme

These must remain the visual DNA. No replacement of palette.

### Typography & visual language

- Strong institutional feel: large bold headings (`font-black`), uppercase tracking on CTAs and labels.
- Photography-led storytelling (hero slides, campus, hospitality, German pathway imagery).
- Rounded cards, strong CTA buttons (navy → gold hover), clean white space.
- Subtle motion via Framer Motion.
- European/international career positioning + African student pathway messaging.

**Risk for i18n:** Heavy use of `uppercase` + `tracking-widest` / `tracking-[0.2em]` will conflict with German compound nouns, French/Spanish expansion, Kiswahili wrapping and especially CJK (Mandarin). Must be reviewed per locale / component.

---

## 3. Content & Data Architecture

### Central configuration (partial)

`src/lib/constants.ts` already contains:

- `SITE_CONFIG` (name, shortName, tagline, description, location, phones, emails, website)
- `SOCIAL_LINKS` (facebook/instagram/youtube = `"#"`, whatsapp = phone)
- `CONTACT_INFO`
- `programsData` (flat English string lists)
- `alumniStories` (English quotes)

**Gaps:**

- Domain inconsistency:
  - `layout.tsx` metadataBase → `https://foreignlanguagesandhospitality.vercel.app`
  - `metadata.ts` / constants → `https://foreignlanguagesandhospitality.com`
- Social links are placeholders (`href="#"`).
- Intake date (`September 2026`) hardcoded in multiple places (FinalCTA, IntakeBanner, etc.).
- No single source of truth for current intake / academic calendar.
- Programme and language course data are English-only and not structured for localization.

### Language course catalogue

`src/components/languages/Language-data.ts` + `types.ts` is rich:

- German, English, Spanish, French, Mandarin, Kiswahili, Arabic, Italian, Japanese, Portuguese, Russian, Dutch, Turkish
- Fields: name, native, flag, category, level, duration, about, whyLearn, outcomes, levels, careers, exams, certification, image, popular/featured flags

**Problem:** All descriptive content is English. No translation keys or nested `translations` object. Filtering currently relies on display labels / category strings.

### Programme data

Scattered English strings in constants + individual academic page components. No stable IDs used consistently for localization or form submission.

---

## 4. Localization Gaps (Critical)

| Area | Status |
|------|--------|
| Locale routing | Absent (`/` only) |
| Language detection / switching | Absent |
| Translation resources | None |
| Translated metadata | None |
| hreflang | None |
| Localized URLs | None |
| RTL readiness | Not prepared (hard left/right classes common) |
| CJK typography considerations | None |
| Locale-aware formatting (dates, numbers) | None (date-fns present but unused for i18n) |
| Form validation messages | English-only |
| WhatsApp default message | English-only |
| Image alt text | Mostly English / incomplete |
| 404 / error pages | Not localized |

**Hardcoded user-facing strings** exist in virtually every component (Navbar, Footer, Hero slides, FAQ, Testimonials, forms, modals, CTAs, academic pages, etc.).

---

## 5. SEO Gaps

- Single-language metadata only.
- Domain inconsistency between production metadata and preview.
- No `hreflang` / alternate locales.
- No multilingual sitemap.
- Limited structured data (Organization / EducationalOrganization / Course / FAQPage largely missing or incomplete).
- Canonical strategy is English-only and domain-inconsistent.
- Open Graph locale fixed to `en_KE`.
- Keywords are English-centric.

---

## 6. Accessibility Gaps

Observed issues:

- Mobile menu: basic toggle, incomplete focus management / escape handling / body scroll lock in places.
- Language selector: does not exist yet → must be keyboard accessible, clear active state, no flag-only reliance.
- Modals (`LanguageModal`, Lightbox): need focus trap, Escape-to-close, return focus, localized aria-labels.
- Some buttons / links lack clear accessible names.
- Heavy uppercase + tracking may reduce readability.
- Contrast generally good (navy/red/gold on white), but gold on white and certain overlays need verification.
- `prefers-reduced-motion` not systematically respected.
- Heading hierarchy not audited page-by-page.
- Skip navigation link absent.
- Form labels / error association incomplete in places.
- Decorative vs informative images not consistently handled.

---

## 7. UX / Content / Logic Issues

### Simulated / fake functionality

- **FinalCTA.tsx**: Newsletter / "Registration Alerts" form is purely client-side simulated (`setTimeout` → success). Must not claim success if nothing is submitted. Either wire to real endpoint or reframe UI.

### Hardcoded temporary data

- Intake month/year scattered.
- Hero slide content and captions English-only; some typos ("amition", etc.).

### Contact & social consistency

- Phones and emails are centralized in constants (good).
- Social links are placeholders.
- WhatsApp number present; message not localized.

### Navigation

- Navbar links are English-only, no active-state indication beyond hover underline.
- Mobile menu exists but needs accessibility and long-label handling improvements for translated languages.
- No language selector.

### Forms

- Admission and contact forms exist.
- API route `/api/submit-form` uses Formspree (env-based) + honeypot.
- Validation messages English-only.
- No locale metadata sent with submissions.

### Domain & environment

- Multiple production domain references.
- `NEXT_PUBLIC_SITE_URL` not used consistently.
- Images allow any remote hostname (`**`) — overly permissive.

---

## 8. Performance & Technical Debt

- `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true` in `next.config.ts` (flagged as temporary).
- Large client-component surface.
- Hero uses multiple large images; priority / sizes need review.
- Video asset present (`juneIntake.mp4`).
- No image optimization configuration beyond remotePatterns.
- Bundle includes Framer Motion, DaisyUI, date-fns, lucide-react — acceptable but watch size when adding i18n.

---

## 9. Inconsistencies to Resolve (Central Source of Truth)

| Item | Current Problems | Recommendation |
|------|------------------|----------------|
| Site URL | vercel.app vs .com | Single `NEXT_PUBLIC_SITE_URL` + SITE_CONFIG |
| Social links | All `#` | Real URLs or hide until configured |
| Intake | Hardcoded "September 2026" | Central `currentIntake` config |
| Contact | Mostly centralized | Keep & consume everywhere |
| Programme names | String lists + page content | Stable IDs + localized content |
| Language courses | English-only rich objects | Stable IDs + translation layer |
| Brand name | Consistent | Keep official English form; do not invent localized official names |

---

## 10. Recommended i18n Architecture (to be implemented)

**Chosen approach (justification):**

- Prefer **next-intl** (or equivalent mature App Router solution) if dependency impact is acceptable, **or** a lightweight custom solution using `messages/{locale}/*.json` + middleware + `[locale]` segment.
- Given the existing stack is relatively light and institutional, a clean **App Router `[locale]` segment** + JSON message files + React context / server helpers is preferred to avoid heavy client-side i18n libraries unless justified.
- Locale detection via middleware (Accept-Language + cookie preference).
- Default locale: `en`.
- Supported initial locales: `en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`.
- Future-ready: `pt`, `ar`, `ja`, `ko`, `hi`, `tr`, `ru` (configuration only).
- Fallback chain: requested → `en` → safe key fallback.
- Routing: `/[locale]/...` with optional localized slugs later.
- Preserve existing English URLs via redirects where necessary.
- Language selector in Navbar (desktop compact + mobile menu integration). Native names only (English, Deutsch, Kiswahili, Français, Español, Nederlands, Italiano, 简体中文). Optional globe icon. No flag-primary UI.
- RTL preparation (logical properties, `dir` attribute) even if Arabic ships later.
- All user-facing strings extracted. No string left in JSX for translated content.
- Programme & language data use stable IDs; display strings come from messages or nested translations.
- Metadata, Open Graph, Twitter, hreflang, sitemap, structured data all locale-aware and domain-consistent.
- Forms, validation, WhatsApp messages, success/error states localized.
- No automatic browser translation widgets.

---

## 11. Priority Issues for Immediate Attention

1. **Domain single source of truth** and canonical/OG consistency.
2. **Remove / reframe simulated newsletter** success state.
3. **Centralize intake configuration**.
4. **Replace social `#` links** or hide them.
5. **i18n foundation** (locale config, routing, message loading, selector, fallback).
6. **Extract & structure all UI strings**.
7. **Localize language course data model**.
8. **Accessibility fixes** for navbar, modals, forms, focus, reduced motion.
9. **Multilingual SEO** (metadata, hreflang, sitemap, structured data).
10. **Responsive & long-text testing** (German compounds, French/Spanish expansion, Mandarin, Kiswahili).
11. **Fix TypeScript / ESLint ignore flags** once codebase is cleaned.
12. **Preserve photography, colours, institutional voice and layout DNA**.

---

## 12. Risks & Constraints

- Do **not** invent accreditations, partnerships, visa/employment guarantees, success rates, or testimonials.
- Do **not** change brand colours or turn the site into a generic SaaS / university template.
- Do **not** force translated URL slugs in phase 1 if it breaks existing links.
- Translations must be natural professional language for education/hospitality context, not literal machine output.
- Kiswahili, German, French, Spanish, Dutch, Italian and Simplified Chinese must each receive independent quality treatment.
- Adding a new locale later must be a content + config task, not an architectural rewrite.

---

## 13. Next Steps (Implementation Phases)

**Phase 1 (this document):** Audit complete.

**Phase 2:** Locale configuration, i18n architecture, routing, language selector, message structure, fallback.

**Phase 3:** Extract & localize global UI, navigation, homepage, footer, forms, programmes, language catalogue, major static pages.

**Phase 4:** Localized metadata, canonical, hreflang, sitemap, robots, structured data, Open Graph.

**Phase 5:** Accessibility, responsive long-text, reduced motion, modal/keyboard fixes, form UX.

**Phase 6:** QA (TypeScript, lint, build, functional, localization, responsive, SEO, accessibility) + documentation (`I18N_GUIDE.md`, translation inventory, known issues).

---

*End of audit. No architectural changes were made during this inspection phase.*
