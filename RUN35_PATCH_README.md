# IIFLHM Run 35 targeted patch

Apply this patch by extracting the archive into the root of the IIFLHM repository and allowing the included files to overwrite existing files.

This patch addresses the TypeScript and ESLint diagnostics shared after `npm ci`:
- Admissions learning-mode validation is now custom-validated with a localized message, avoiding the Zod 3/4 enum-options API difference.
- Tailwind typography receives a narrow local declaration; DaisyUI's plugin config is typed alongside the standard Tailwind config.
- Unused variables/imports are removed.
- Gallery lightbox click-outside handling uses a native button.
- Hero effect dependency warning is corrected.
- Student Voices media-caption lint is explicitly suppressed because no approved transcripts/WebVTT files are present. Do not treat this as completed caption accessibility; supply verified captions to remove the exception.

After applying, run:

```powershell
npx tsc --noEmit
npm run lint
npm run build
```

The patch was checked with the repository localization integrity audit and ESLint/tooling manifest audit. Full application TypeScript, runtime ESLint, and production build were not executable in the patch-authoring environment because dependencies were not installed there and npm registry DNS had previously failed.
