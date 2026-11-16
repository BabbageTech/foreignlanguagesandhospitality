# Dynamic locale detection

## Behaviour
| Priority | Source |
|----------|--------|
| 1 | `NEXT_LOCALE` cookie (user chose a language) |
| 2 | `Accept-Language` browser header |
| 3 | Default `en` |

## Implementation
- `src/i18n/routing.ts` — `localeDetection: true` + `localeCookie`
- `src/middleware.ts` — next-intl middleware
- Language selector sets `NEXT_LOCALE` when user picks a language

## Examples
- German browser, first visit → redirect `/` → `/de`
- User switches to Kiswahili → URL `/sw/...`, cookie `NEXT_LOCALE=sw`
- Next visit → `/` → `/sw` (cookie wins over browser language)

## Supported locales
en, de, sw, fr, es, nl, it, zh
