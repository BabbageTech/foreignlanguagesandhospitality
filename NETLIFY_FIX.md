# Netlify build fixes

## Issue A — Node 22 npm crash
Symptom: `Exit handler never called!`  
Fix: `.nvmrc` = 20 and `NODE_VERSION=20`

## Issue B — Install timeout (18 minutes)
Symptom: `Command did not finish within the time limit` during dependency install  
Cause: Missing `package-lock.json` forced a full, slow dependency resolution on every build  

Fix in this package:
1. **Committed `package-lock.json`** (required — speeds install dramatically)
2. Node 20 via `.nvmrc`
3. `.npmrc` with `legacy-peer-deps=true`
4. `netlify.toml` with `NODE_VERSION=20`

## After you push to GitHub
1. Confirm these files are on `main`:
   - `package-lock.json`
   - `.nvmrc`
   - `.npmrc`
   - `netlify.toml`
2. Netlify UI → Environment variables → `NODE_VERSION` = `20`
3. Deploys → **Clear cache and deploy site**

Build log should show:
- `Attempting Node.js version '20' from .nvmrc`
- `npm install` finishing in ~1–3 minutes (not 18+)
- Then `next build`
