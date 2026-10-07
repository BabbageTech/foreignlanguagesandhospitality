# IIFLHM Codebase Audit Report

**Project:** International Institute of Foreign Languages & Hospitality Management (IIFLHM)  
**Repository:** foreignlanguagesandhospitality-main  
**Audit Date:** 2026-09-23  
**Auditor Role:** Senior Software Architect / i18n / Accessibility / SEO / Localization  

---

## 1. Architecture Overview

### Stack
| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Next.js (package shows ^16.2.4) | App Router |
| Language | TypeScript | `ignoreBuildErrors: true` currently enabled |
| UI | React 19, Tailwind CSS 3.4, DaisyUI 4 | Custom "institute" theme |
| Animation | Framer Motion 11 | Used in hero, CTAs, modals |
| Forms | react-hook-form + Zod | Contact + Admissions |
| Fonts | Inter (Google) | Latin subset only |
| Backend forms | Formspree (optional via env) + internal API route | |

### Directory Structure (src/)
```
src/
├── app/                    # App Router pages
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsAppFAB)
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── academics/          # + nested programme pages
│   ├── admissions/
│   ├── career-opportunities/ # + apprenticeship, masters, undergraduate
│   ├── contact/
│   ├── gallery/
│   ├── news/
│   ├── student-voices/
│   ├── privacy/
│   ├── terms/
│   └── api/submit-form/
├── components/
│   ├── about/
│   ├── academics/
│   ├── admissions/
│   ├── common/             # Button, Card, SectionTitle, ImageWithCaption
│   ├── contact/
│   ├── gallery/
│   ├── home/               # Hero, FAQ, Testimonials, FinalCTA, etc.
│   ├── languages/          # Language catalogue + modal
│   └── layout/             # Navbar, Footer, WhatsAppFab
├── lib/
│   ├── constants.ts        # SITE_CONFIG, SOCIAL, programsData, alumni
│   ├── metadata.ts
│   ├── utils.ts
│   └── formspree.ts
└── types/
```

### Routing (English only)
- `/` Home
- `/about`
- `/academics` + `/academics/languages`, `/german-language`, `/hospitality-management`, `/ict`, `/travel-tourism`, `/nursing-preparation`
- `/admissions`
- `/career-opportunities` + sub-routes
- `/student-voices`
- `/news`
- `/gallery`
- `/contact`
- `/privacy`, `/terms`
- API: `POST /api/submit-form`

No locale prefix. No middleware for i18n. No `generateStaticParams` for locales.

---

## 2. Design System (Preserve)

### Brand Colours (already in Tailwind + DaisyUI)
- **Primary (Navy):** `#0A2540` / dark `#051B2E` / light `#0D3060`
- **Secondary (Red):** `#E30613`
- **Accent (Gold):** `#F2C12C`
- Neutrals: brand-gray `#F1F4F9`, charcoal `#1F2937`

### Visual DNA
- Institutional, photography-led
- Large bold headings (`font-black`, tracking)
- Rounded cards
- Strong CTAs (red primary action)
- Tribar gradient motif
- Clean white space
- European/German pathway positioning
- Human student stories

**Recommendation:** Keep tokens. Reduce scattered hardcoded hex where a design token already exists. Do not change the palette.

---

## 3. Content & Data Architecture

### Central config (partial)
`SITE_CONFIG`, `SOCIAL_LINKS`, `CONTACT_INFO`, `programsData`, `alumniStories` live in `src/lib/constants.ts`.

### Language catalogue
`src/components/languages/Language-data.ts` (~442 lines)  
Hardcoded English objects implementing `LanguageCourse`.  
Categories: European / Asian / African / Middle Eastern.  
Courses include: German, English, Spanish, French, Mandarin, Kiswahili, Arabic, Italian, Japanese, Portuguese, Russian, Dutch, Turkish.

**Problem:** Display strings and content are not localizable. Filtering uses `category` and display names.

### Programmes
Scattered between `programsData` (string arrays) and individual page components under `/academics/*`. No stable IDs + localized content model.

### Intake
"September 2026" hardcoded in:
- `FinalCTA.tsx`
- `IntakeBanner.tsx`
- `admissions/page.tsx`
- metadata descriptions

Video file: `juneIntake.mp4` (name mismatch with September copy).

---

## 4. Localization Gaps (Critical)

| Area | Status |
|------|--------|
| Locale routing | None |
| Translation resources | None |
| Language selector | None |
| Translated metadata | None |
| hreflang | None |
| Localized forms / validation | None |
| WhatsApp message | Hardcoded English |
| RTL readiness | None (no logical properties audit) |
| CJK typography | Inter Latin only; no CJK fallbacks |
| Date/number formatting | `en-KE` only in utils |

All user-facing strings are English literals inside JSX or data files.

---

## 5. SEO Gaps

- `metadataBase` points to Vercel preview URL in layout (`foreignlanguagesandhospitality.vercel.app`) while `SITE_CONFIG.website` and `defaultMetadata` use `foreignlanguagesandhospitality.com`.
- No `hreflang` / alternate locales.
- No multilingual sitemap.
- Limited structured data (none observed for Organization / Course / FAQPage).
- Open Graph / Twitter exist but are English-only and use inconsistent domain.
- No canonical strategy for future locales.
- Keywords are English-centric.

---

## 6. Contact & Domain Inconsistencies

| Item | Values found |
|------|--------------|
| Domain | `foreignlanguagesandhospitality.com` vs `foreignlanguagesandhospitality.vercel.app` |
| Phone 1 | `+254 723 104 680` (constants) |
| Phone 2 | `+254 705 704 554` (constants, admissions) |
| WhatsApp | `+254 705 704554` (no space) / `254723104680` in SOCIAL |
| Social links | All `#` placeholders |
| Email | `info@...` + `admissions@...` |

**Action:** Single source of truth + environment variable for production site URL.

---

## 7. Accessibility Findings

- Navbar mobile menu: client-side toggle; needs focus trap, Escape, aria-expanded, focus return.
- LanguageModal / LightboxModal: need full modal a11y pattern.
- Forms: labels present via RHF; error messages need `aria-describedby` / live regions.
- Focus states: some Tailwind defaults; ensure visible focus rings on custom buttons.
- Images: many have alt; decorative ones need empty alt.
- Skip link: not present.
- `prefers-reduced-motion`: not systematically applied to Framer Motion.
- Heading hierarchy: needs page-by-page check.
- Touch targets: generally ok; language selector (future) must meet 44px.

---

## 8. UX / Logic Issues

1. **FinalCTA newsletter** – Simulated success state (`status === "success"`) without real backend subscription. Must not claim "Registration Alerts Enabled" if nothing is submitted.
2. **WhatsAppFAB** – Hardcoded phone + English message; phone does not match `SOCIAL_LINKS.whatsapp`.
3. **Hardcoded `<br />`** in headings – Will break German/French compound or expanded text.
4. **Excessive `uppercase` + `tracking-widest`** – Problematic for non-English scripts and longer labels.
5. **Client components** – Navbar, Hero, modals, forms correctly client; ensure pages stay server where possible.
6. **Build quality** – `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` both true. Must be audited and preferably disabled after fixes.

---

## 9. Performance Notes

- Large images in `/public/images` (many >150KB).
- Hero uses priority images (good).
- Framer Motion on multiple home sections – consider reduced-motion and selective animation.
- Inter font Latin only – will need additional subsets or fallbacks for zh / future CJK.
- No obvious heavy unnecessary client bundles beyond Framer + RHF.

---

## 10. Security

- Form API validates email format; uses Formspree when configured.
- No secrets observed in client code.
- External images allowed via `hostname: "**"` in next.config – review for production.
- No XSS vectors from user content observed (static site + forms).

---

## 11. Technical Debt Summary

1. No internationalization architecture.
2. Domain / contact duplication and inconsistency.
3. Simulated newsletter behaviour.
4. Hardcoded intake date across components.
5. Social placeholders.
6. Build error ignoring enabled.
7. Language data and programme data not structured for localization.
8. English-only metadata and SEO.
9. Limited a11y on interactive components (modals, mobile nav).
10. Potential unsupported claim language ("tuition-free university education") that needs careful qualification rather than strengthening.

---

## 12. Recommendations (Phased)

### Phase 1 – Complete (this document)
Audit finished.

### Phase 2 – Architecture
- Introduce locale config (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`) + future list.
- Prefer `next-intl` (mature App Router support, server components, message files) **or** a lightweight custom dictionary approach if dependency budget is tight. Recommendation: **next-intl** for maintainability, SEO, and TypeScript messages.
- Middleware for locale detection + prefix routing (`/en/...`, `/de/...`).
- Message files under `messages/{locale}/*.json` modular by domain.
- LanguageSelector component (native names, no flag-only).
- Central `SITE_CONFIG` + `CONTACT_INFO` + `SOCIAL_LINKS` + intake config + production `NEXT_PUBLIC_SITE_URL`.

### Phase 3 – Content extraction
- Extract all UI strings.
- Localize language course data with stable IDs + translation maps.
- Localize programme pages via stable IDs.
- Professional (non-literal) translations for the eight launch locales.

### Phase 4 – SEO
- Localized metadata helpers.
- hreflang + x-default.
- Multilingual sitemap.
- Organization / EducationalOrganization / Course JSON-LD (accurate only).
- Canonical per locale page.

### Phase 5 – UX / a11y
- Modal focus management.
- Mobile nav a11y.
- Reduced motion.
- Form error association.
- Skip link.
- Layout expansion testing for de/fr/es/zh.

### Phase 6 – QA
- Remove ignoreBuildErrors where possible.
- Full keyboard + screen-reader pass.
- Responsive matrix (320–1440).
- Language switch preserves path + query.

---

## 13. Known Issues Requiring Business Confirmation

- Exact official social media URLs (currently `#`).
- Preferred primary WhatsApp number.
- Authoritative production domain confirmation.
- Whether "tuition-free university education" wording should be qualified (Germany public universities are generally tuition-free for many programmes, but fees/conditions apply; avoid over-claiming).
- Official localized institution name (keep English brand for now).
- Intake calendar ownership (September 2026 vs video "june").

---

## 14. Preservation Commitment

No redesign of visual language.  
No replacement of photography.  
No new colour scheme.  
No generic SaaS restyle.  
All changes must improve usability, accessibility, internationalization, SEO, consistency and maintainability while remaining recognizably IIFLHM.

---

*End of Phase 1 Audit*
