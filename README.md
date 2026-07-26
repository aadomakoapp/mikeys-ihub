# Mikey's iHub — website

Storefront website for **Mikey's iHub**, dealer in iPhones, iPads, MacBooks,
AirPods and Apple Watch in Adum, Kumasi, Ghana.

**Live site:** https://mikeysihub.com
(backup mirror: https://aadomakoapp.github.io/mikeys-ihub/)

## ✏️ Updating the site (no coding needed)

All products, prices, photos, contact details and wording live in the
[`content/`](content) folder and the [`public/images/`](public/images) photo folder.
Edit them directly on GitHub — mikeysihub.com republishes itself about two
minutes later.

**➡️ Read the step-by-step guide: [HOW-TO-UPDATE.md](HOW-TO-UPDATE.md)**

## For developers

Vite + React + TypeScript + Tailwind (shadcn/ui), originally generated with Lovable.

```sh
npm install
npm run dev        # local dev server on http://localhost:8080
npm test           # validates content/*.json + unit tests
npm run build      # production build (set BASE_PATH for subpath hosting)
npm run deploy     # manual publish to Cloudflare (CI does this on push)
```

- Site content is imported from `content/*.json` via `src/content.ts` — components
  contain no hardcoded store data.
- Product images resolve through `imageUrl()`: a bare file name maps to
  `public/images/<name>`, a full `https://` URL is used as-is.
- Deployment: pushing to `main` runs `.github/workflows/deploy.yml` — a shared
  `test` gate, then two parallel jobs that build with the right `BASE_PATH` and
  publish to Cloudflare Workers (`mikeysihub.com`, root path) and GitHub Pages
  (mirror, `/mikeys-ihub/` subpath). A broken content edit fails the gate, so
  neither target is touched and the last good deploy stays live.
- The Cloudflare job needs the `CLOUDFLARE_API_TOKEN` and
  `CLOUDFLARE_ACCOUNT_ID` repo secrets. If either is missing the job skips with
  a warning instead of failing, and `npm run deploy` remains the manual escape
  hatch.
