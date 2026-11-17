# Translation Inventory

## Shared interface dictionary

The following 30 shared keys are currently defined in all eight launch locales:

`home`, `about`, `academics`, `stories`, `careers`, `news`, `contact`, `apply`, `language`, `menu`, `closeMenu`, `institute`, `programs`, `reachUs`, `privacy`, `terms`, `whatsapp`, `ask`, `aboutInstitute`, `academicPrograms`, `admissionsOffice`, `studentLife`, `careerServices`, `germanCourse`, `hospitalityManagement`, `travelTourism`, `ictComputing`, `campus`, `rightsReserved`, `skipContent`.


| Locale | Native name | Shared dictionary | Global areas using it |
|---|---|---|---|
| `en` | English | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `de` | Deutsch | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `sw` | Kiswahili | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `fr` | Français | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `es` | Español | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `nl` | Nederlands | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `it` | Italiano | Complete for listed keys | Navbar, footer utility labels, WhatsApp |
| `zh` | 简体中文 | Complete for listed keys | Navbar, footer utility labels, WhatsApp |

## Localized metadata coverage

Page titles and descriptions have now been localized for all eight configured locales on six routes: homepage, About, Academics, Admissions, Hospitality Management and Travel & Tourism. Open Graph titles/descriptions and locale identifiers use the same route-specific localized content. The canonical URL is generated from the configured production origin; non-English routes remain protected by the proxy's `noindex, follow` response header until body content and full SEO alternates are reviewed.

| Route | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Home | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Academics | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Admissions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Hospitality Management | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Travel & Tourism | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Not yet translated / intentionally retained

- Remaining body copy on Home, About, Academics, Admissions, Career Opportunities, Contact, Gallery, News, Student Voices, Privacy and Terms; programme detail routes still outstanding include ICT and the language catalogue, while Nursing and German, Hospitality Management and Travel & Tourism have partial/route-level locale resources.
- Remaining programme feature bullets/highlights, ICT course descriptions and modal details, and language-course descriptions, proficiency outcomes, career lists and exam information. The detailed language catalogue currently has eight course records; the central programme list names thirteen languages, so five detailed course records are not present in the supplied codebase and were not invented.
- Contact/admissions form labels, placeholders, validation errors, success/failure messages and upload states.
- Page-specific metadata, Open Graph text, structured data, image alt text, breadcrumbs and most ARIA labels.
- Proper names, official institutional name, IIFLHM acronym, CEFR levels (A1–C2), recognized examination names and approved programme names should remain unchanged unless official localized terminology is confirmed.

Non-English route prefixes currently remain `noindex` until this content is professionally localized and reviewed. Shared UI translation coverage is not equivalent to full-page translation coverage.

## Iteration update — homepage primary conversion areas (2026-11-11)

The homepage hero carousel, intake introduction, and closing enrolment CTA now read locale-specific copy for all eight launch locales. This includes all eight slide titles/descriptions, primary actions, brochure action, programme action, video fallback text, intake heading/body, and closing CTA heading/body/actions. Existing images, programme names, route targets and institutional identity are retained.

| Homepage area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Hero carousel (8 slides) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Hero action labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Intake heading/body/video fallback/action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Closing CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Still English on the homepage:** Empowering/Vision/Mission section, professional programme cards and feature lists, Why Choose Us cards, student testimonials, FAQ accordion, and any text embedded in data not yet migrated. Homepage is therefore only partially translated.

## Iteration update — complete homepage section copy (2026-11-11)

All remaining homepage sections now use locale-specific resources for the eight launch locales. Coverage includes the institutional introduction, image-card labels/descriptions, vision and mission, all four professional programme cards and their feature lists, all six student-voice quotations and role labels, the Why Choose Us introduction and six benefit cards, and all seven admissions FAQ questions and answers. Existing people/place names, institutional name, programme routes and the substance of attributed student experiences are retained; programme and pathway copy avoids adding guarantees or accreditation claims.

| Homepage area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Institutional introduction, vision and mission | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Four programme cards and feature lists | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Why Choose Us and six benefit cards | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Six student stories/quotes and role labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Seven FAQ questions and answers | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Image-card descriptions and accessible FAQ controls | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

This completes the authored homepage section-copy migration for all eight locales. It does not constitute fluent-speaker approval or full-site completion. Testimonials remain attributed to the same named individuals and should be confirmed by the institution before publication in translated form.

## Iteration update — About route (2026-11-11)

The About route now consumes locale-aware copy for all eight launch locales across its hero, mission and vision cards, four core values, four facilities, founder profile, team/faculty roles and biographies, and closing admissions CTA. Personal names, institutional name, role meaning and the displayed establishment year are retained. The hero and CTA use neutral admissions wording rather than asserting that a future intake is open.

| About area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Hero and calls to action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mission and vision | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Core values and facilities | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Founder profile and focus areas | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Faculty/team roles and biographies | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Closing admissions CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

This is a working translation draft. The institution must confirm the current accuracy of staff roles/biographies, founder biography, facility descriptions and the displayed establishment date; fluent-speaker review is required before publication.

## Iteration update — Academics landing-page navigation and conversion copy (2026-11-11)

The Academics landing route now reads a locale-specific dictionary for all eight launch locales. Translated fields include the hero eyebrow/headline/intro and primary actions; the four subject-area stat labels; the academic-pathways section heading and intro; the Why Choose section heading; the study-journey heading and four step titles/descriptions; the German-language feature panel heading/description/action; and the closing CTA heading/body/actions.

| Academics landing area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Hero and primary actions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Subject-area stat labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Academic pathways section intro | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Why Choose section heading | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Study journey headings and steps | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| German feature panel and closing CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Still outstanding on Academics:** descriptions, feature bullets, highlights and titles inside the five academic-track cards; Why Choose card titles/descriptions; the German feature tags; and all individual programme/course pages. This iteration is a partial route localization, not a complete Academics translation. The translation strings are working drafts and require fluent-speaker and institutional review.


## Iteration update — Academics catalogue cards and value propositions (2026-11-11)

The five academic-track cards now receive locale-specific titles, subtitles and descriptions in all eight launch locales. The six “Why Choose IIFLHM” cards now receive localized headings and descriptions. This preserves the existing catalogue, card order, links, images and qualification caveats.

| Academics catalogue area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Five track titles and subtitles | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Five track descriptions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Six “Why Choose” headings and descriptions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Track feature bullets and image highlights | — | — | — | — | — | — | — | — |
| German feature-panel tags | — | — | — | — | — | — | — | — |

This is partial Academics catalogue localization. Feature bullets, highlights and the German feature-panel tags remain English, as do individual programme/course pages. These new translations are drafts and require fluent-speaker review.

## Iteration update — Nursing career preparation (2026-11-11)

The Nursing Career Preparation route now selects copy for all eight launch locales: English, German, Kiswahili, French, Spanish, Dutch, Italian and Simplified Chinese. The existing scope remains deliberately narrow: the page describes academic and language preparation and explicitly cautions that entry, recognition and professional registration depend on the receiving institution and destination country. No employment, licensing, migration or placement outcome is promised.

| Nursing preparation area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Page heading and introductory description | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Recognition and registration caveat | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

The page is now locale-aware using the existing `x-iiflhm-locale` request header convention. Translation drafts require fluent-speaker and institutional review.

| German language programme detail | Phase 7 | Eight locales | Page-level content, examination level descriptions, process steps, calls to action and route metadata localized. External examination and certification responsibility remains explicitly with the external provider. | Fluent-speaker review and browser QA pending |


## Iteration update — Hospitality Management and Travel & Tourism (2026-11-16)

Both detail routes now use locale-specific resources for all eight launch locales. The localized content covers hero and introductory copy, programme titles and descriptions, qualification/metric labels, six learning-area bullets per route, sidebar admissions guidance, external-course/qualification caveats, calls to action, image alternatives and route metadata. The original routes, photography, layout, colours and catalogue identity are preserved.

| Programme detail area | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Hospitality Management page copy | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Hospitality learning-area bullets (6) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Travel & Tourism page copy | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Travel & Tourism learning-area bullets (6) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Page title/description and Open Graph metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

The source lists a Craft Certificate, 18-month duration, KNEC and KCSE D+ entry threshold on both pages; these were retained without alteration and require current institutional confirmation. The Travel & Tourism page now treats the Bronze Level Tour Guide Certification as a reference in the source description, not a claim that IIFLHM awards it; awarding body, requirements and availability must be confirmed. These are draft translations, not fluent-speaker-approved publication copy.

**Still outstanding:** ICT programme content and its course-detail modal; the language catalogue and all language-course modal content; programme-card feature bullets and tags on the Academics landing page; Admissions and Contact form states; Careers; Gallery; News; Student Voices; Privacy; Terms; remaining shared accessibility labels; full SEO alternate/hreflang and structured-data work; browser and responsive QA.

## ICT programme — 2026-11-16 continuation

| Area | en | de | sw | fr | es | nl | it | zh | Notes |
|---|---|---|---|---|---|---|---|---|---|
| ICT hero, section headings, statistics labels and calls to action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | `src/i18n/ict.ts` |
| ICT feature-card headings and descriptions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Four feature cards |
| ICT modal section headings and metadata labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | UI labels only |
| ICT course names, descriptions, outcomes, module titles, career names and certificate labels | — | — | — | — | — | — | — | — | Existing course records remain English; translation task outstanding |
| ICT technical terms and product names | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | Retain established product/technology names unless approved localized terminology exists |


### ICT course-record localization — 2026-11-16

| ICT course content | en | de | sw | fr | es | nl | it | zh |
|---|---|---|---|---|---|---|---|---|
| Four course titles, taglines and descriptions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Four learning outcomes per course | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Five curriculum module headings per course | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Career-path labels per course | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Course duration values, level and delivery-mode labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Technical skills and curriculum topic tags | Retained in supplied technical form; review/localize generic terms in a later terminology pass | | | | | | | |
| Certificate titles and institutional award claims | Retained from source; require institutional confirmation | | | | | | | |

The ICT course-detail modal is now localized for its explanatory prose and module headings, but it is not yet a fully translated route because some technical topic tags and certificate source titles remain in their original form.

## 2026-11-16 continuation — Language catalogue interface layer

The language catalogue route now resolves the validated request locale on the server and passes it into a client page component. Its hero, category filters, featured-programme labels/tags/actions, course-count and catalogue headings, category labels, popularity badge, card actions, course-detail section labels, close-button accessible name, and examination disclaimer are localized for all eight launch locales. Display names are translated for all eight existing detailed course records: German, English, French, Spanish, Mandarin Chinese, Arabic, Kiswahili and Japanese. The route also has localized title/description/Open Graph metadata for all eight locales.

**Not complete:** Course descriptions, rationale text, proficiency-level descriptions, learning outcomes, career labels, examination labels, certificate names, duration and level values are still largely supplied in English. The German featured card's explanatory paragraph remains English. The eight existing records are preserved; no additional course records were created. This iteration is therefore an interface and display-name localization pass, not full language-catalogue localization. The existing category names describe the language-course catalogue only; they are not interface locales or a statement about languages taught beyond the eight source records. Non-English indexing remains disabled pending full translation and review.

## 2026-11-16 continuation — Admissions page shell

- Added eight-locale resource coverage for the admissions hero, overview/intake prompts, application section headings, intake schedule notice, prospectus panel, support panel, programme overview labels and closing CTA.
- Still English / outstanding: AdmissionForm field labels, placeholders, option labels, client-side validation messages, step indicator, file-upload states, submission errors and success state; required-document checklist; process-step titles/descriptions; Why Apply card copy; programme category and detail labels; all Contact page content and ContactForm states.
- The catalogue/programme labels intentionally remain source controlled. The empty intake schedule remains empty; no intake dates were fabricated.

## Admissions application form — 2026-11-16 continuation

The multi-step AdmissionForm now receives the validated route locale from the server page and uses a dedicated typed resource at `src/i18n/admissions-form.ts` for all eight launch locales. Localized form copy includes the three step labels; personal, academic and motivation fields; field validation errors; upload labels and attached-file state; review summary; consent text; navigation; submission-in-progress, error and success states; and the admissions contact action. The canonical programme names, campus values, intake value, qualification values and submitted data remain stable for backend compatibility. The selected page locale is now sent directly from the validated locale prop rather than inferred from the URL, so legacy English-path routing with a non-English locale cookie reports the correct selected locale.

The form continues to use the existing configured Formspree multipart endpoint for optional file uploads. The endpoint must be configured in the deployment environment; no submission was sent during this implementation. Translations are draft quality and require fluent-speaker and institutional review. The surrounding Admissions process steps, document checklist and Why Apply cards remain separate English content and are not covered by this form resource.

## Admissions application form — Run 6 implementation verification

All form interface strings and client-side validation feedback now have eight-locale draft resources. The locale is passed from the server route and included in the multipart submission metadata. This covers the form itself, not the full Admissions route. The page's document checklist, process steps, Why Apply cards, testimonial/attribution, programme overview list and some call-to-action labels still require localization and institutional/content review. See `LOCALIZATION_PROGRESS_2026-11-16_RUN6.md` and `QA_REPORT.md` for exact scope and verification limits.

## Run 7 — Admissions page completion and Contact route localization

| Area | en | de | sw | fr | es | nl | it | zh | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Admissions required-document checklist | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Source checklist preserved |
| Admissions four application-process steps | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Instructions localized; existing process retained |
| Admissions three Why Apply cards | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Wording qualified to avoid employment/outcome guarantees |
| Admissions testimonial label, quotation and role | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Existing source quotation retained; institutional consent/attribution review still required |
| Admissions programme category labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Canonical programme/course names in list remain source-controlled |
| Contact page body, contact cards, links and CTAs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | `src/i18n/contact.ts` |
| Contact form fields, placeholders, subject labels, validation, pending/error/success states | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Canonical subject values and API field names preserved |
| Contact page title, description and Open Graph metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Added `contact` metadata entry |

The Contact page now resolves the validated locale in its server route and passes it to the client page and ContactForm. The form submits the validated locale as metadata, retains the existing API endpoint and canonical subject values, and displays localized client-side validation and status messages. The contact page's unsupported response-time, number-of-campus and opening-time metrics were removed; office availability/hours are now explicitly confirmed with the institute rather than asserted. The existing location/map reference remains source-controlled and requires institutional confirmation.

Translations are drafts pending fluent-speaker and institutional review. No real enquiry was submitted; the Formspree endpoint and upstream delivery remain unverified. The admissions alumni quotation/attribution requires institutional approval before publication.

## Run 8 — Career Opportunities landing page

The `/career-opportunities` landing page now has locale-aware content and page metadata for all eight launch locales (`en`, `de`, `sw`, `fr`, `es`, `nl`, `it`, `zh`). The localized resource covers the hero, introduction, Germany information panel, all three pathway cards and their qualification/eligibility caveats, career guidance panel, calls to action and image alternative text. Existing route paths, pathway categories and photography are preserved. Wording avoids guaranteed employment, placement or visa outcomes and qualifies variable fees, admission criteria and work rights.

**Still outstanding:** `/career-opportunities/apprenticeship`, `/career-opportunities/undergraduate` and `/career-opportunities/masters` remain largely English and have not yet been localized. Their metadata also requires localization. The Careers section is therefore in progress, not complete. All translations are draft quality and require fluent-speaker and institutional review.

## Run 9 — 2026-11-16 Careers detail routes

| Route/content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| `/career-opportunities/apprenticeship` hero, overview, benefits, eligibility, personal qualities, CTA, metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| `/career-opportunities/undergraduate` hero, direct/preparatory pathways, academic/language/financial eligibility, CTA, metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| `/career-opportunities/masters` hero, document checklist, language requirements, finance/visa cautions, CTA, metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |

The three Careers detail routes are now wired to locale-specific resources. The earlier Run 8 outstanding note records the state before this update. Translations require fluent-speaker and institutional review. Confirm all programme and pathway statements with IIFLHM before publication. Employment, admission, remuneration, immigration and visa outcomes are not guaranteed. Non-English routes remain `noindex, follow` pending full-site review.

## Run 10 — 2026-11-16 Gallery

| Gallery content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Page title, description, hero, section heading and subtitle | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Category filters (All, Classes, Facilities, Students, Events) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Six existing image captions and category display labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Empty state, image-open labels, lightbox close and category caption | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |

All six original image records, paths, order and category IDs are preserved. Translations require fluent-speaker/institutional review. Gallery keyboard, focus, screen-reader and responsive browser QA remain outstanding.

## Run 11 — 2026-11-16 News and media

| News content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Page metadata, hero and introduction | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Historical September 2026 intake notice | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; expiry clarified |
| Video hub, playlist, play controls and archive note | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Four existing article titles, summaries and categories | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Date, reading-time, filter, empty-state and CTA labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |

Original article IDs, dates, external source URLs, image paths, video IDs and category IDs are preserved. Third-party media references and factual claims require institutional verification. Translations require fluent-speaker review. Non-English URLs remain noindex pending whole-site QA.

## Run 12 — 2026-11-16 Student Voices

| Student Voices content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Page metadata, hero, section labels and CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Six existing testimonial roles and locations | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Six existing testimonial statements | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft translated; speaker approval required |
| Video controls, modal close and individual-experience disclaimer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |

Names, initials, testimonial order and media assets are preserved. The video asset path casing has been corrected to match the actual filenames. Obtain speaker and institutional approval for translated quotes; do not treat personal stories as guaranteed outcomes.

## Run 13 — 2026-11-16 Privacy and Terms

| Legal-page content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Privacy page title and existing two-sentence summary | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Short copy localized only |
| Terms page title and existing two-sentence summary | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Short copy localized only |
| Full privacy notice and substantive terms | — | — | — | — | — | — | — | — | Awaiting authoritative institutional/legal text |

The short existing source copy has been translated; this does not constitute complete Privacy or Terms documents. Do not invent data-processing, cookie, retention, legal-basis, user-rights, liability, jurisdiction or governing-law provisions. Obtain the institution-approved source documents and qualified legal review before publication/indexing.

## Run 14 — 2026-11-16 language-course detail narratives and level labels

| Language-course detail area | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| About-language narrative for eight existing course records | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Why-learn narrative for eight existing course records | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Proficiency-stage labels and explanatory descriptions (CEFR, HSK, JLPT codes) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; official codes retained |
| Learning outcomes | — | — | — | — | — | — | — | — | Still source English |
| Career-area labels | — | — | — | — | — | — | — | — | Still source English |
| External examination names | Source names retained | Source names retained | Source names retained | Source names retained | Source names retained | Source names retained | Source names retained | Source names retained | Proper names intentionally unchanged |
| IIFLHM certificate titles | Source wording retained | Source wording retained | Source wording retained | Source wording retained | Source wording retained | Source wording retained | Source wording retained | Source wording retained | Institutional award wording requires confirmation |

Added `src/i18n/language-course-details.ts` and updated `LanguageModal.tsx` to render localized course narratives and stage descriptions for the eight existing detailed records (German, English, French, Spanish, Mandarin Chinese, Arabic, Kiswahili and Japanese). Course IDs, category IDs, official level codes, duration values, source examination names, certificate wording, assets and course ordering remain unchanged. This is a meaningful content migration but does not complete the language catalogue: learning outcomes, career labels, full card summaries and other course metadata still require localization. The catalogue remains limited to the eight records actually present in the source; no additional courses were created.

## Run 15 — 2026-11-16 language-course content completion

| Language-course content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Learning outcomes for all eight existing course records | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; source outcome count/order preserved |
| Related career-area labels and catalogue-card previews | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; not employment guarantees |
| Course-card summary copy | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Uses localized course narrative |
| Course duration units and level-range connectors | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Numeric ranges and official level codes unchanged |
| Examination availability explanation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Existing localized caution retained; official exam names unchanged |
| Certificate title and award caveat | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Exact source certificate title retained; localized institutional-confirmation note added |

`src/i18n/language-course-content.ts` supplies 64 course/locale records (8 existing course IDs × 8 launch locales), matching each source record's outcome and career-list lengths. The LanguageModal, LanguageGrid and FeaturedLanguage now render locale-aware content. Career areas are illustrative and do not guarantee employment, eligibility or professional recognition. Course availability, external exam preparation and certificate award conditions remain subject to institutional confirmation. All translations are draft quality pending fluent-speaker and institutional review.

## Run 16 — 2026-11-16 Academics catalogue card completion

| Academics landing content | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Five programme-track feature lists (four labels each) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; claims narrowed to source-supported subject areas |
| Programme card highlight chips | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Neutral labels, no outcome/facility guarantees |
| Programme card action label | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Academics hero/stat category labels and image alt text | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Academics route destinations | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Stale language/Germany links corrected to existing routes |

The five existing tracks, source imagery, layout and institutional colour system are preserved. Unsupported promotional assertions about placements, class caps, facilities, employer links and visa consultation were removed from card feature chips in favour of neutral programme-topic descriptions and admissions confirmation language. Translation drafts require fluent-speaker and institutional review.

## Run 17 — 2026-11-16 shared layout localization

| Shared component copy | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Navbar landmark and home-link accessible names | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Footer tagline, mission, location and technology credit | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized; proper names retained |
| Scroll-to-top and WhatsApp tooltip/dismissal labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Locale selector pathname/query/hash construction | — | — | — | — | — | — | — | — | Shared implementation; browser route verification outstanding |

## Run 18 — 2026-11-16 remaining Academics detail metadata

| Academics detail route | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| German-language route title and description metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Shared metadata helper |
| Nursing Preparation route title and description metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Shared metadata helper |
| Nursing Preparation eyebrow | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Previously hard-coded English now localized |

Both routes retain non-English noindex protection pending final content review. Localized canonical and hreflang metadata are not yet implemented.

## Run 19 — 2026-11-16 reusable Academics component copy

| Reusable Academics UI string | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| ProgramCard category fallback and action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| ProgramGrid empty state, description and admissions action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| ProgramDetail breadcrumb, duration, admissions/contact and support labels | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| FacilitiesList heading | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Internal locale-aware destinations | — | — | — | — | — | — | — | — | Uses shared `localePath` helper |

These are reusable components, not currently mounted by an app route. Pass the validated locale when integrating them. Caller-provided programme/facility content is not automatically translated by this UI dictionary.

## Run 20 — 2026-11-16 language-course modal accessibility

| Modal accessibility string/behavior | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Dialog title/description associations and localized close name | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Static implementation |
| Focus entry, containment, Escape dismissal and focus restoration | — | — | — | — | — | — | — | — | Shared keyboard behavior; browser QA outstanding |
| Direction-aware dialog container and logical close placement | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Uses locale direction config; all launch locales currently LTR |

## Run 21 — 2026-11-16 active modal accessibility

| Active modal | Localized accessible name | Focus entry/containment | Escape/restore | Direction-aware |
|---|---|---|---|---|
| Language-course details | ✓ | Shared hook | Shared hook | ✓ |
| Gallery lightbox | ✓ | Shared hook | Shared hook | ✓ |
| ICT course details | ✓ | Shared hook | Shared hook | ✓ |
| Student Voices video | ✓ | Shared hook | Shared hook | ✓ |

Student Voices adds a localized `videoDialogTitle` string in all eight locales. These are static implementation entries; browser, screen-reader and native media keyboard tests remain outstanding.

## Run 22 — 2026-11-16 language catalogue hero and navigation corrections

| Language catalogue element | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Hero image alternative text | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Draft localized |
| Course count and level-variation statistic | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Exact eight records; no universal A1–C1 implication |
| Conditional CEFR statistic label | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Qualified “where applicable” |
| Featured German pathway tags | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Claims narrowed; external exam options must be confirmed |
| Language/Academics/Student Voices internal CTA destinations | — | — | — | — | — | — | — | — | Uses selected locale via `localePath` |

## Run 23 — 2026-11-16 locale-aware route navigation

| Live route/component | Locale-aware internal navigation | Status |
|---|---|---|
| Home sections | Hero, IntakeBanner, Testimonials, FinalCTA | Uses `localePath` |
| About and Admissions | Main CTAs and student-voices/contact destinations | Uses `localePath`; stale `/programs` corrected |
| Contact and News | Quick links, CTAs and internal news record destinations | Uses `localePath`; external news URLs preserved |
| ICT, Hospitality, Travel & Tourism, German-language | Admissions/contact actions | Uses `localePath` |
| Careers landing and detail pages | Pathway cards, back and contact actions | Uses `localePath`; locale passed into shared detail component |
| Navbar and Footer | Existing canonical path data arrays | Existing locale-aware `href()` helper retained |

## Run 24 — 2026-11-16 SEO metadata/indexing

| SEO element | en | de | sw | fr | es | nl | it | zh | Status |
|---|---|---|---|---|---|---|---|---|---|
| Self-referencing canonical URLs for shared metadata routes | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Implemented; browser inspection pending |
| Self-referencing canonical URLs for Careers/Gallery/News/Student Voices/Legal custom metadata | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Implemented |
| Hreflang reciprocal alternates | — | — | — | — | — | — | — | — | Intentionally deferred pending translation/institutional review |
| Non-English noindex policy | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Proxy `X-Robots-Tag: noindex, follow` retained |
| Privacy/Terms indexing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Noindex all locales; full approved legal text missing |
| Sitemap | ✓ | — | — | — | — | — | — | — | English-only; legal placeholder routes excluded |

## Run 25 — 2026-11-16 structured data

| Structured data | Status |
|---|---|
| EducationalOrganization JSON-LD identity | Implemented from confirmed site configuration |
| Address and contact points | Existing Newline Building/Narok/Kenya, telephone and email values only |
| Logo and image references | Existing `/logo.png` and `/images/hero-bg.jpg` assets |
| Accreditations/partners/awards/rankings/claims | Intentionally omitted; no confirmed source data |
| Schema validation in production/browser | Outstanding; runtime/build unavailable |

## Current checkpoint note — Run 26 (2026-11-17)

The Run 14–25 sections above record historical migration steps and must not be read as a fresh release certification. The uploaded Run 25 checkpoint and Run 26 continuation preserve the conservative release policy: translations remain drafts; non-English routes remain noindex; Privacy and Terms remain incomplete placeholders; hreflang and localized sitemap publication remain deferred. The English canonical-link and explicit language-switch behavior was refined in Run 26, and preview crawling is now blocked for both Netlify and Vercel preview contexts. See `LOCALIZATION_PROGRESS_2026-11-17_RUN26.md` and `QA_REPORT.md` for the current verification boundary.
