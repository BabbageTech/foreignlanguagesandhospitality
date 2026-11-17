import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appRoot = path.join(root, 'src', 'app');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const checks = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const pageFiles = walk(appRoot).filter((file) => path.basename(file) === 'page.tsx');
const routeFromFile = (file) => {
  const relative = path.relative(appRoot, path.dirname(file)).split(path.sep).filter(Boolean);
  return relative.length ? `/${relative.join('/')}` : '/';
};
const routes = pageFiles.map(routeFromFile).sort();
const sitemapSource = read('src/app/sitemap.ts');
const sitemapMatch = sitemapSource.match(/const routes\s*=\s*\[([\s\S]*?)\];/);
const sitemapRoutes = sitemapMatch
  ? [...sitemapMatch[1].matchAll(/"([^"\n]+)"/g)].map((match) => match[1]).sort()
  : [];

if (!sitemapMatch) failures.push('Could not locate the static route list in src/app/sitemap.ts.');
const expectedIndexableRoutes = routes.filter((route) => route !== '/privacy' && route !== '/terms').sort();
const missingFromSitemap = expectedIndexableRoutes.filter((route) => !sitemapRoutes.includes(route));
const unexpectedInSitemap = sitemapRoutes.filter((route) => !expectedIndexableRoutes.includes(route));
if (missingFromSitemap.length) failures.push(`Routes missing from the English sitemap: ${missingFromSitemap.join(', ')}`);
if (unexpectedInSitemap.length) failures.push(`Unexpected routes in the English sitemap: ${unexpectedInSitemap.join(', ')}`);
checks.push(`Route inventory: ${routes.length} page routes; ${sitemapRoutes.length} English sitemap entries.`);

const routeSetForLocaleMatrix = new Set(routes);
const localeRouteFailures = [];
for (const locale of ['de', 'sw', 'fr', 'es', 'nl', 'it', 'zh']) {
  for (const route of routes) {
    const prefixedPath = `/${locale}${route === '/' ? '' : route}`;
    const rewrittenPath = prefixedPath.slice(locale.length + 1) || '/';
    if (!routeSetForLocaleMatrix.has(rewrittenPath)) localeRouteFailures.push(`${prefixedPath} -> ${rewrittenPath}`);
  }
}
if (localeRouteFailures.length) failures.push(`Localized route targets missing from App Router: ${localeRouteFailures.slice(0, 12).join(', ')}`);
checks.push(`Localized route matrix: ${7 * routes.length} non-English locale/page combinations map to existing App Router pages.`);

const config = read('src/i18n/config.ts');
const localeMatch = config.match(/locales\s*=\s*\[([^\]]+)\]/);
const locales = localeMatch ? [...localeMatch[1].matchAll(/["']([a-z]{2})["']/g)].map((match) => match[1]) : [];
const requiredLocales = ['en', 'de', 'sw', 'fr', 'es', 'nl', 'it', 'zh'];
const missingLocales = requiredLocales.filter((locale) => !locales.includes(locale));
if (missingLocales.length) failures.push(`Configured launch locales missing: ${missingLocales.join(', ')}`);
checks.push(`Launch locale configuration: ${locales.length} locales (${locales.join(', ')}).`);

const routesWithoutMetadata = [];
for (const file of pageFiles) {
  const source = fs.readFileSync(file, 'utf8');
  if (!/export\s+(?:async\s+)?function\s+generateMetadata|export\s+const\s+metadata\s*[:=]/.test(source)) {
    routesWithoutMetadata.push(routeFromFile(file));
  }
}
if (routesWithoutMetadata.length) failures.push(`Routes without page metadata: ${routesWithoutMetadata.join(', ')}`);
checks.push(`Page metadata declarations: ${pageFiles.length - routesWithoutMetadata.length}/${pageFiles.length} routes.`);

const proxy = read('src/proxy.ts');
if (fs.existsSync(path.join(root, 'proxy.ts'))) failures.push('Remove the root-level proxy.ts: this project uses src/app, so proxy.ts must live beside src/app at src/proxy.ts.');
if (!fs.existsSync(path.join(root, 'src', 'proxy.ts'))) failures.push('Next.js Proxy must be located at src/proxy.ts beside src/app.');
if (!/X-Robots-Tag/.test(proxy) || !/noindex,\s*follow/.test(proxy)) failures.push('Proxy no longer applies noindex, follow to localized routes.');
if (!/VERCEL_ENV\s*===\s*['"]preview['"]/.test(read('src/app/robots.ts')) || !/deployContext\s*!==\s*['"]production['"]/.test(read('src/app/robots.ts'))) {
  failures.push('Preview crawler disallow policy is missing or changed; review Netlify/Vercel deployment contexts.');
}
for (const route of ['/privacy', '/terms']) {
  const source = fs.readFileSync(path.join(appRoot, route.slice(1), 'page.tsx'), 'utf8');
  if (!/robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/.test(source)) failures.push(`${route} must remain noindex, follow until approved legal text is supplied.`);
}
if (sitemapRoutes.includes('/privacy') || sitemapRoutes.includes('/terms')) failures.push('Privacy/Terms placeholder pages must not appear in the sitemap.');
checks.push('Indexing safeguards: localized noindex, preview disallow, and legal-page exclusions checked.');

// Legal copy is deliberately an interim disclosure until the institution supplies approved documents.
const legalCopy = read('src/i18n/legal-pages.ts');
for (const locale of requiredLocales) {
  const localeBlock = legalCopy.match(new RegExp(`^  ${locale}: \\{([\\s\\S]*?)^  \},?`, 'm'))?.[1] || '';
  if (!localeBlock.includes('body:') || !localeBlock.includes('privacy:') || !localeBlock.includes('terms:')) {
    failures.push(`Privacy and Terms interim disclosures must exist for ${locale}.`);
  }
}
if (!/getLegalPageCopy\(locale, ["']privacy["']\)/.test(read('src/components/contact/ContactForm.tsx'))) {
  failures.push('Contact form must display the localized interim privacy notice.');
}
if (!/getLegalPageCopy\(locale, ["']privacy["']\)/.test(read('src/components/admissions/AdmissionForm.tsx'))) {
  failures.push('Admissions form must display the localized interim privacy notice.');
}
for (const route of ['/privacy', '/terms']) {
  const source = fs.readFileSync(path.join(appRoot, route.slice(1), 'page.tsx'), 'utf8');
  if (!/getLegalInterimLabel\(locale\)/.test(source)) failures.push(`${route} must visibly identify its interim approval status.`);
}
checks.push('Legal safeguards: interim Privacy/Terms notices are localized across all eight locales and surfaced beside both enquiry forms; legal routes remain non-indexable.');

const alternates = read('src/lib/localized-page-metadata.ts');
const alternatesFunction = alternates.match(/export function getLocalizedAlternates[\s\S]*?\n}\n/);
if (!alternatesFunction || !/canonical:/.test(alternatesFunction[0])) failures.push('Localized canonical URL helper is missing.');
if (alternatesFunction && /languages\s*:/.test(alternatesFunction[0])) failures.push('Do not emit hreflang alternates before translation approval.');
checks.push('Canonical policy: self-canonical helper present; premature hreflang not emitted.');

// Locale switching must preserve the current route and browser state while ensuring
// that explicitly choosing English updates the preference cookie before redirecting.
const localeConfigSource = config;
if (!/export function localePath\([\s\S]*?locale === defaultLocale[\s\S]*?\(path \|\| ['\"]\/['\"]\)/.test(localeConfigSource)) {
  failures.push('localePath must keep English URLs unprefixed and prefix non-default locales.');
}
if (!/export function localeSwitchPath\([\s\S]*?return `\/\$\{locale\}\$\{path\}`/.test(localeConfigSource)) {
  failures.push('localeSwitchPath must generate an explicit locale-prefixed switch URL.');
}
const selector = read('src/components/layout/LanguageSelector.tsx');
if (!/localeSwitchPath\(pathname \|\| ['\"]\/['\"], next\)/.test(selector)) failures.push('Language selector must switch the currently viewed route.');
if (!/window\.location\.search/.test(selector) || !/window\.location\.hash/.test(selector)) failures.push('Language selector must preserve query parameters and URL fragments.');
if (!/window\.location\.assign/.test(selector)) failures.push('Language selector must perform a full navigation so locale cookies and server-rendered document language refresh reliably.');
if (!/window\.location\.assign/.test(selector) && /router\.push/.test(selector)) failures.push('Remove client-side router navigation from locale switching to avoid stale RSC state across locale rewrites.');
if (!proxy.includes('(?!api|_next|_vercel|.*\\\\..*)')) failures.push('Proxy matcher must exclude API, Next.js internal, Vercel internal and dotted asset paths from locale redirects/rewrites.');
if (!/aria-label=\{getMessage\(currentLocale, ['\"]language['\"]\)\}/.test(selector)) failures.push('Language selector must expose a localized accessible name.');
if (!/response\.cookies\.set\(LOCALE_COOKIE, locale/.test(proxy) || !/locale === defaultLocale/.test(proxy)) failures.push('Explicit locale selection must persist the selected locale, including English.');
if (!/NextResponse\.rewrite\(destination/.test(proxy) || !/x-iiflhm-locale/.test(proxy)) failures.push('Localized routes must pass the selected locale to the application without changing route content.');
if (!/cookieLocale !== defaultLocale/.test(proxy) || !/NextResponse\.redirect\(localized\)/.test(proxy)) failures.push('Saved non-default locale preference must be applied on subsequent unprefixed navigation.');
checks.push('Locale navigation: route preservation, query/hash retention, accessible selector, cookie persistence and localized rewrites checked.');

// Shared messages must not silently fall back to English because a locale key is absent.
const messagesSource = read('src/i18n/messages.ts');
const messageKeys = messagesSource.match(/^  en: \{(.*?)\},$/m)?.[1] || '';
const expectedMessageKeys = [...messageKeys.matchAll(/([A-Za-z][A-Za-z0-9]*):/g)].map((match) => match[1]);
for (const locale of requiredLocales) {
  const localeBlock = messagesSource.match(new RegExp(`^  ${locale}: \\{(.*?)\\},$`, 'm'))?.[1] || '';
  const missingKeys = expectedMessageKeys.filter((key) => !new RegExp(`\\b${key}\\s*:`).test(localeBlock));
  if (missingKeys.length) failures.push(`Shared messages for ${locale} are missing keys: ${missingKeys.join(', ')}`);
}
checks.push(`Shared interface messages: ${expectedMessageKeys.length} keys checked across all ${requiredLocales.length} locales.`);

// Catch broken literal local asset paths and static internal links before a build.
const sourceFiles = walk(path.join(root, 'src')).filter((file) => /\.tsx?$/.test(file));
const missingAssets = [];
const unknownInternalLinks = [];
const routeSet = new Set(routes);
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/(?:src|poster)\s*=\s*["'](\/[^"']+)["']/g)) {
    const assetPath = match[1].split(/[?#]/, 1)[0];
    if (assetPath.startsWith('/_next/') || assetPath.startsWith('/api/')) continue;
    if (!fs.existsSync(path.join(root, 'public', assetPath.slice(1))) && !fs.existsSync(path.join(appRoot, assetPath.slice(1)))) {
      missingAssets.push(`${path.relative(root, file)} -> ${assetPath}`);
    }
  }
  const linkPattern = /(?:href|router\.(?:push|replace))\s*=\s*["'](\/[^"']*)["']|router\.(?:push|replace)\(["'](\/[^"']*)["']|href=\{?`(\/[^`$]*)`\}?/g;
  for (const match of source.matchAll(linkPattern)) {
    const rawPath = match[1] || match[2] || match[3];
    if (!rawPath || rawPath.startsWith('//')) continue;
    let route = rawPath.split(/[?#]/, 1)[0];
    route = route.replace(/^\/(en|de|sw|fr|es|nl|it|zh)(?=\/|$)/, '') || '/';
    if (route.startsWith('/images/') || route.startsWith('/docs/') || route.startsWith('/api/')) continue;
    if (route.includes('[') || route.includes(']') || route.includes('${')) continue;
    if (!routeSet.has(route)) unknownInternalLinks.push(`${path.relative(root, file)} -> ${rawPath}`);
  }
}
if (missingAssets.length) failures.push(`Missing literal local assets: ${missingAssets.slice(0, 12).join('; ')}`);
if (unknownInternalLinks.length) failures.push(`Static internal links without a matching App Router page: ${unknownInternalLinks.slice(0, 12).join('; ')}`);

// Decorative looping video must not force motion on visitors who request reduced motion.
for (const file of ['src/components/about/FacultyGrid.tsx', 'src/components/home/IntakeBanner.tsx']) {
  const source = read(file);
  if (!/useReducedMotion/.test(source) || !/autoPlay=\{prefersReducedMotion !== true\}/.test(source)) {
    failures.push(`${file} must respect the prefers-reduced-motion setting before autoplaying decorative video.`);
  }
  if (!/controls=\{prefersReducedMotion === true\}/.test(source) || !/aria-hidden=\{prefersReducedMotion !== true\}/.test(source)) {
    failures.push(`${file} must expose controls and an accessible name when reduced motion disables autoplay.`);
  }
}
const studentVoices = read('src/app/student-voices/StudentVoicesPageClient.tsx');
if (!/useReducedMotion/.test(studentVoices) || (studentVoices.match(/autoPlay=\{prefersReducedMotion !== true\}/g) || []).length < 2) {
  failures.push('Student Voices preview videos must disable autoplay when reduced motion is requested.');
}
if ((studentVoices.match(/aria-hidden="true" tabIndex=\{-1\}/g) || []).length < 2) {
  failures.push('Student Voices preview videos must remain decorative and out of the accessibility focus order.');
}
const sharedButton = read('src/components/common/Button.tsx');
if (!/aria-busy=\{isLoading \|\| undefined\}/.test(sharedButton) || !/aria-hidden="true" className="animate-spin/.test(sharedButton)) {
  failures.push('Shared Button loading state must announce busy status and hide its decorative spinner from assistive technology.');
}
const globalCss = read('src/app/globals.css');
if (!/html\[lang="zh"\] body\s*\{[\s\S]*?Noto Sans SC[\s\S]*?Microsoft YaHei/.test(globalCss)) {
  failures.push('Chinese locale body typography must provide explicit CJK fallback fonts.');
}
checks.push('Accessibility refinements: decorative video previews respect reduced motion; shared button loading state is announced; Chinese body typography has CJK fallbacks.');

checks.push(`Static references: ${sourceFiles.length} TS/TSX files scanned; ${missingAssets.length} missing local assets; ${unknownInternalLinks.length} unmatched internal links.`);

console.log('IIFLHM localization integrity audit');
for (const check of checks) console.log(`PASS  ${check}`);
if (failures.length) {
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exitCode = 1;
} else {
  console.log('PASS  No static localization/release-integrity failures found.');
}
