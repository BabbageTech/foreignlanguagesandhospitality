#!/usr/bin/env node
/**
 * Translation coverage checker for IIFLHM.
 * Compares message key trees across locales against English (source of truth).
 * Usage: node scripts/check-translations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, "..", "messages");
const locales = ["en", "de", "sw", "fr", "es", "nl", "it", "zh"];
const namespaces = ["common", "home", "forms", "pages", "languages", "about"];

function flatten(obj, prefix = "") {
  const keys = [];
  if (obj === null || typeof obj !== "object") return keys;
  if (Array.isArray(obj)) {
    keys.push(prefix || "(array)");
    if (obj[0] && typeof obj[0] === "object") {
      keys.push(...flatten(obj[0], `${prefix}[]`));
    }
    return keys;
  }
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object") keys.push(...flatten(v, p));
    else keys.push(p);
  }
  return keys;
}

function load(locale, ns) {
  const file = path.join(messagesDir, locale, `${ns}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

let exitCode = 0;
console.log("IIFLHM Translation Coverage Report\n" + "=".repeat(40));

for (const ns of namespaces) {
  const en = load("en", ns);
  if (!en) {
    console.log(`\n[FAIL] Missing en/${ns}.json`);
    exitCode = 1;
    continue;
  }
  const enKeys = new Set(flatten(en));
  console.log(`\nNamespace: ${ns} (${enKeys.size} keys in en)`);
  for (const locale of locales) {
    if (locale === "en") continue;
    const data = load(locale, ns);
    if (!data) {
      console.log(`  ${locale}: MISSING FILE`);
      exitCode = 1;
      continue;
    }
    const keys = new Set(flatten(data));
    const missing = [...enKeys].filter((k) => !keys.has(k));
    const extra = [...keys].filter((k) => !enKeys.has(k));
    const coverage = Math.round(((enKeys.size - missing.length) / enKeys.size) * 100);
    console.log(`  ${locale}: ${coverage}% coverage (${missing.length} missing, ${extra.length} extra)`);
    if (missing.length && missing.length <= 15) {
      missing.forEach((m) => console.log(`    - ${m}`));
    } else if (missing.length > 15) {
      missing.slice(0, 10).forEach((m) => console.log(`    - ${m}`));
      console.log(`    … and ${missing.length - 10} more`);
    }
    if (missing.length > 0) exitCode = 1;
  }
}

console.log("\n" + "=".repeat(40));
process.exit(exitCode);
