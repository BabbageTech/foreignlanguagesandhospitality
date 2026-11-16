# Objective completion notes

## Goal
Deep 8-locale translation on the **original** website without removing content or redesigning UI.

## Delivered
1. Base = original site structure, pages, and components
2. `[locale]` routes **wrap** original pages (About still has FounderBio, MissionVision, CoreValues, FacultyGrid, Facilities)
3. Deep messages for en, de, sw, fr, es, nl, it, zh (including original FAQ content)
4. Wired without stubbing: Navbar, Hero, Intake, FAQ (original visual layout), FinalCTA, WhyChooseUs, EmpoweringSection, About hero, Footer labels
5. Language selector for all 8 locales; cookie + Accept-Language detection

## Remaining content still English inside deep original modules
Some long original copy inside MissionVision, FounderBio, Admissions (638 lines), Contact form, Language catalogue (`Language-data.ts`) remains English until those specific strings are extracted—structure is intentionally left intact so nothing was deleted.

## Verify
- `/de` home: German nav, hero, FAQ, CTAs
- `/about` under any locale: full original About sections still render
- `/fr/admissions` etc.: original admissions page still present via wrapper
