import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Mirror of production logic (keep in sync with src/i18n/config.ts)
const defaultLocale = "en";
const locales = ["en", "de", "sw", "fr", "es", "nl", "it", "zh"];
function isValidLocale(value) {
  return locales.includes(value);
}
function getLocaleDirection(locale) {
  const dirs = { en: "ltr", de: "ltr", sw: "ltr", fr: "ltr", es: "ltr", nl: "ltr", it: "ltr", zh: "ltr" };
  return dirs[locale] ?? "ltr";
}
function getSiteUrl(envUrl, configWebsite) {
  return (envUrl || configWebsite || "https://foreignlanguagesandhospitality.com").replace(/\/$/, "");
}

describe("isValidLocale", () => {
  it("accepts all 8 locales", () => {
    for (const l of locales) assert.equal(isValidLocale(l), true);
  });
  it("rejects invalid codes", () => {
    assert.equal(isValidLocale("xx"), false);
    assert.equal(isValidLocale(""), false);
    assert.equal(isValidLocale("EN"), false);
  });
});

describe("getLocaleDirection", () => {
  it("returns ltr for current locales", () => {
    for (const l of locales) assert.equal(getLocaleDirection(l), "ltr");
  });
});

describe("getSiteUrl", () => {
  it("strips trailing slash", () => {
    assert.equal(getSiteUrl("https://example.com/", null), "https://example.com");
  });
  it("prefers env over config", () => {
    assert.equal(getSiteUrl("https://env.com", "https://config.com"), "https://env.com");
  });
  it("falls back to production domain", () => {
    assert.equal(getSiteUrl(null, null), "https://foreignlanguagesandhospitality.com");
  });
});
