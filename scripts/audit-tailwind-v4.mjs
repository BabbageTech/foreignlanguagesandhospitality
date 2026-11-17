import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const postcss = fs.readFileSync(new URL("../postcss.config.mjs", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const errors = [];
const check = (condition, message) => condition ? console.log(`PASS ${message}`) : errors.push(message);

check(pkg.devDependencies?.tailwindcss?.startsWith("^4."), "Tailwind CSS v4 is declared as a development dependency.");
check(pkg.devDependencies?.["@tailwindcss/postcss"]?.startsWith("^4."), "The matching Tailwind v4 PostCSS plugin is declared.");
check(pkg.devDependencies?.daisyui?.startsWith("^5."), "daisyUI v5 is declared for Tailwind v4 compatibility.");
check(pkg.devDependencies?.["@tailwindcss/typography"]?.startsWith("^0.5.20"), "The Tailwind Typography plugin is declared on its current Tailwind v4-compatible line.");
check(postcss.includes('"@tailwindcss/postcss": {}') && !/tailwindcss\s*:\s*\{\}/.test(postcss), "PostCSS uses @tailwindcss/postcss rather than tailwindcss directly.");
check(css.includes('@import "tailwindcss";') && !/^\s*@tailwind\s+(base|components|utilities)/m.test(css), "Global CSS uses the Tailwind v4 import rather than removed v3 directives.");
check(css.includes('@plugin "daisyui"') && css.includes('@plugin "@tailwindcss/typography"'), "daisyUI and Typography are registered using CSS-first plugin directives.");
check(css.includes('--color-primary: #0A2540;') && css.includes('--color-secondary: #E30613;') && css.includes('--color-accent: #F2C12C;'), "The existing institutional brand palette is retained in the Tailwind v4 theme.");
check(!fs.existsSync(new URL("../tailwind.config.ts", import.meta.url)), "The obsolete Tailwind v3 JavaScript plugin configuration is removed.");

if (errors.length) {
  for (const error of errors) console.error(`FAIL ${error}`);
  process.exitCode = 1;
} else {
  console.log("Tailwind v4 source configuration audit passed.");
  console.log("NOTE: package-lock.json must be regenerated with npm install before npm ci or deployment.");
}
