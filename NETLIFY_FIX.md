# Netlify install crash fix

## Error
```
npm error Exit handler never called!
Failed during stage 'Install dependencies'
Node v22.23.5 / npm 10.9.9
```

## Cause
Node 22 on Netlify was crashing npm during install (known class of npm internal failures with certain dependency graphs).

## Fix applied in this repo
1. **`.nvmrc`** → `20` (Netlify reads this)
2. **`.node-version`** → `20`
3. **`netlify.toml`** → `NODE_VERSION = "20"` and `@netlify/plugin-nextjs`
4. **`.npmrc`** → `legacy-peer-deps=true`, retries, no audit/fund
5. **`package.json` `engines`** → `node: >=18.18.0 <23`
6. **Removed stale `package-lock.json`** so lock regenerates on Node 20

## Netlify UI (also set)
Site settings → Environment variables:
```
NODE_VERSION = 20
```

## After push
1. Clear cache and deploy site (Netlify → Deploys → Trigger deploy → Clear cache and deploy)
2. Confirm build log shows **Node v20.x** not v22
3. Locally (recommended once):
   ```bash
   nvm use 20
   npm install
   git add package-lock.json
   git commit -m "chore: regenerate lockfile on Node 20"
   git push
   ```
