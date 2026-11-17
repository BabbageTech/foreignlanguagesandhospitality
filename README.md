This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Internationalization and production configuration

The first-stage locale architecture is documented in [`docs/I18N_GUIDE.md`](docs/I18N_GUIDE.md). Supported locale prefixes are `/en`, `/de`, `/sw`, `/fr`, `/es`, `/nl`, `/it`, and `/zh`. The original unprefixed English routes remain available. Non-English routes are temporarily noindexed until full page translation and SEO QA are complete.

Before deployment, copy `.env.example` to `.env.local` and confirm the production origin and Formspree configuration. Do not commit credentials. See [`docs/CODEBASE_AUDIT.md`](docs/CODEBASE_AUDIT.md), [`docs/TRANSLATION_INVENTORY.md`](docs/TRANSLATION_INVENTORY.md), and [`docs/QA_REPORT.md`](docs/QA_REPORT.md) for implementation scope and outstanding release checks.

Install the exact locked dependencies before running checks:

```bash
npm ci
npm run verify:release
```

The `verify:release` command runs the localization audit, isolated localization type-check, tooling audit, ESLint, full application TypeScript check, and production build in sequence. It requires a successful `npm ci` first. These automated checks do not replace browser testing, accessibility review, or human translation review. Do not deploy unless `npm run verify:release` passes.
