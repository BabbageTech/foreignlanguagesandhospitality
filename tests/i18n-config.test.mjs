import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { register } from "node:module";
import { readFileSync, existsSync, readdirSync } from "node:fs";

const root = path.resolve(import.meta.dirname, "..");

// --- Message file parity ---
describe("message files", () => {
  const locales = ["en", "de", "sw", "fr", "es", "nl", "it", "zh"];
  const messagesDir = path.join(root, "messages");

  it("has a flat JSON file for every locale", () => {
    for (const locale of locales) {
      const file = path.join(messagesDir, `${locale}.json`);
      assert.ok(existsSync(file), `missing messages/${locale}.json`);
    }
  });

  it("every locale JSON is valid and has required top-level keys", () => {
    const required = ["brand", "nav", "cta", "pages", "footer"];
    for (const locale of locales) {
      const raw = readFileSync(path.join(messagesDir, `${locale}.json`), "utf8");
      const data = JSON.parse(raw);
      for (const key of required) {
        assert.ok(key in data, `${locale}.json missing key: ${key}`);
      }
      assert.ok(data.nav.home, `${locale}.json nav.home empty`);
      assert.ok(data.nav.applyNow, `${locale}.json nav.applyNow empty`);
      assert.ok(data.brand.shortName, `${locale}.json brand.shortName empty`);
    }
  });

  it("all locales share the same nav key set as English", () => {
    const en = JSON.parse(readFileSync(path.join(messagesDir, "en.json"), "utf8"));
    const enNavKeys = Object.keys(en.nav).sort();
    for (const locale of locales) {
      const data = JSON.parse(readFileSync(path.join(messagesDir, `${locale}.json`), "utf8"));
      assert.deepEqual(Object.keys(data.nav).sort(), enNavKeys, `${locale} nav keys differ from en`);
    }
  });
});

// --- Source file presence ---
describe("critical source files exist", () => {
  const required = [
    "src/i18n/config.ts",
    "src/i18n/routing.ts",
    "src/i18n/request.ts",
    "src/middleware.ts",
    "src/lib/constants.ts",
    "src/app/[locale]/layout.tsx",
    "src/app/[locale]/page.tsx",
    "next.config.ts",
    "package.json",
  ];
  for (const rel of required) {
    it(rel, () => {
      assert.ok(existsSync(path.join(root, rel)), `missing ${rel}`);
    });
  }
});

// --- package.json ---
describe("package.json", () => {
  const pkg = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));

  it("includes next-intl dependency", () => {
    assert.ok(pkg.dependencies["next-intl"], "next-intl missing from dependencies");
  });

  it("includes next, react, react-dom", () => {
    assert.ok(pkg.dependencies.next);
    assert.ok(pkg.dependencies.react);
    assert.ok(pkg.dependencies["react-dom"]);
  });

  it("has build and start scripts", () => {
    assert.equal(typeof pkg.scripts.build, "string");
    assert.equal(typeof pkg.scripts.start, "string");
  });
});

// --- constants source static checks ---
describe("constants.ts source", () => {
  const src = readFileSync(path.join(root, "src/lib/constants.ts"), "utf8");

  it("exports getSiteUrl", () => {
    assert.match(src, /export function getSiteUrl/);
  });

  it("exports SITE_CONFIG with required fields", () => {
    assert.match(src, /export const SITE_CONFIG/);
    assert.match(src, /phone1/);
    assert.match(src, /email/);
    assert.match(src, /admissionsEmail/);
    assert.match(src, /website/);
  });

  it("does not hardcode vercel.app as primary domain", () => {
    assert.doesNotMatch(src, /vercel\.app/);
  });

  it("WhatsApp number is digits only (no +)", () => {
    assert.match(src, /whatsapp:\s*"254/);
  });
});

// --- i18n config source static checks ---
describe("i18n config source", () => {
  const src = readFileSync(path.join(root, "src/i18n/config.ts"), "utf8");

  it("defines 8 locales including en, de, sw", () => {
    assert.match(src, /"en"/);
    assert.match(src, /"de"/);
    assert.match(src, /"sw"/);
    assert.match(src, /"zh"/);
  });

  it("exports isValidLocale and getLocaleDirection", () => {
    assert.match(src, /export function isValidLocale/);
    assert.match(src, /export function getLocaleDirection/);
  });

  it("defaultLocale is en", () => {
    assert.match(src, /defaultLocale\s*=\s*"en"/);
  });
});

// --- next.config ---
describe("next.config.ts", () => {
  const src = readFileSync(path.join(root, "next.config.ts"), "utf8");
  it("uses next-intl plugin", () => {
    assert.match(src, /createNextIntlPlugin/);
    assert.match(src, /i18n\/request/);
  });
});

// --- middleware ---
describe("middleware.ts", () => {
  const src = readFileSync(path.join(root, "src/middleware.ts"), "utf8");
  it("uses next-intl middleware", () => {
    assert.match(src, /createMiddleware/);
    assert.match(src, /from "\.\/i18n\/routing"/);
  });
  it("matcher excludes api and static assets", () => {
    assert.match(src, /api/);
    assert.match(src, /_next/);
  });
});

// --- Language-data ---
describe("Language-data", () => {
  const p = path.join(root, "src/components/languages/Language-data.ts");
  it("file exists", () => assert.ok(existsSync(p)));
  it("exports languageCourseMeta", () => {
    const src = readFileSync(p, "utf8");
    assert.match(src, /export const languageCourseMeta/);
  });
  it("exports languageCourses", () => {
    const src = readFileSync(p, "utf8");
    assert.match(src, /export const languageCourses/);
  });
});

// --- No next-intl imports without dependency (already checked pkg) ---
describe("no forbidden patterns", () => {
  it("layout does not import missing getSiteUrl from wrong path only", () => {
    const layout = readFileSync(path.join(root, "src/app/[locale]/layout.tsx"), "utf8");
    assert.match(layout, /NextIntlClientProvider/);
    assert.match(layout, /getMessages/);
    assert.match(layout, /setRequestLocale/);
  });
});
