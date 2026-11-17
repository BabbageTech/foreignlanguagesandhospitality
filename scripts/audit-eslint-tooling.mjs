import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const lock = JSON.parse(fs.readFileSync(path.join(root, "package-lock.json"), "utf8"));
const config = fs.readFileSync(path.join(root, "eslint.config.mjs"), "utf8");
const errors = [];
const log = (message) => console.log(`${errors.length ? "" : "PASS "}${message}`);

if (pkg.devDependencies?.eslint?.startsWith("^9")) log("ESLint 9 is declared.");
else errors.push("ESLint 9 must be declared in devDependencies.");

if (pkg.devDependencies?.["eslint-config-next"] || lock.packages?.["node_modules/eslint-config-next"] || lock.packages?.["node_modules/@next/eslint-plugin-next"]) {
  errors.push("Remove stale or mismatched eslint-config-next packages; this project currently uses its native ESLint flat config.");
} else log("No stale or cross-major eslint-config-next package remains in the manifest or lockfile.");

const nextRange = pkg.dependencies?.next ?? "";
const nextVersion = lock.packages?.["node_modules/next"]?.version ?? "";
const reactVersion = lock.packages?.["node_modules/react"]?.version ?? "";
const reactDomVersion = lock.packages?.["node_modules/react-dom"]?.version ?? "";
if (!nextRange.startsWith("^") || !nextVersion.startsWith(nextRange.slice(1).split(".")[0] + ".")) errors.push("Next.js manifest and lockfile major versions must agree.");
else log(`Next.js ${nextVersion} is lock-resolved on the declared ${nextRange} line.`);
if (!reactVersion || !reactDomVersion || reactVersion.split(".")[0] !== reactDomVersion.split(".")[0]) errors.push("React and React DOM must be lock-resolved on the same major version.");
else log(`React ${reactVersion} and React DOM ${reactDomVersion} use matching majors.`);

for (const name of [
  "@typescript-eslint/parser",
  "@typescript-eslint/eslint-plugin",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-jsx-a11y",
  "globals",
]) {
  const declared = pkg.devDependencies?.[name];
  const locked = lock.packages?.[`node_modules/${name}`]?.version;
  if (!declared || !locked) errors.push(`${name} must be declared and present in package-lock.json.`);
  else if (declared.startsWith("^") && locked.split(".")[0] !== declared.slice(1).split(".")[0]) errors.push(`${name} lock version ${locked} is outside ${declared}.`);
}
if (!errors.length) log("TypeScript, React, Hooks, accessibility, and globals plugins are declared and lock-resolved.");

for (const fragment of [
  '"@typescript-eslint"',
  '"react-hooks/rules-of-hooks": "error"',
  '"react-hooks/exhaustive-deps": "warn"',
  '"jsx-a11y"',
  '"@typescript-eslint/no-unused-vars"',
]) {
  if (!config.includes(fragment)) errors.push(`ESLint flat config is missing expected rule/plugin marker: ${fragment}`);
}
if (!errors.length) log("Flat config includes TypeScript unused-variable, React Hooks, and JSX accessibility checks.");

const lockRoot = lock.packages?.[""];
for (const [name, version] of Object.entries(pkg.devDependencies ?? {})) {
  if (lockRoot?.devDependencies?.[name] !== version) errors.push(`package-lock root does not match package.json for ${name}.`);
}
for (const name of Object.keys(lockRoot?.devDependencies ?? {})) {
  if (!(name in (pkg.devDependencies ?? {}))) errors.push(`package-lock root has an undeclared devDependency: ${name}.`);
}
if (!errors.length) log("package.json and package-lock root devDependencies match exactly.");

if (errors.length) {
  for (const error of errors) console.error(`FAIL ${error}`);
  process.exitCode = 1;
} else {
  console.log("ESLint/tooling manifest audit passed. Runtime lint still requires npm ci and an available package registry/cache.");
  console.log("NOTE Next.js-specific core-web-vitals rules are not loaded yet; add eslint-config-next matching the installed Next.js 16.2.4 line when registry access is restored.");
}
