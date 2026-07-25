# Mikey's iHub — website

Storefront website for **Mikey's iHub**, dealer in iPhones, iPads, MacBooks,
AirPods and Apple Watch in Adum, Kumasi, Ghana.

**Live site:** https://aadomakoapp.github.io/sell-my-shiny-phone/

## ✏️ Updating the site (no coding needed)

All products, prices, photos, contact details and wording live in the
[`content/`](content) folder and the [`public/images/`](public/images) photo folder.
Edit them directly on GitHub and the site redeploys itself automatically.

**➡️ Read the step-by-step guide: [HOW-TO-UPDATE.md](HOW-TO-UPDATE.md)**

## For developers

Vite + React + TypeScript + Tailwind (shadcn/ui), originally generated with Lovable.

```sh
npm install
npm run dev        # local dev server on http://localhost:8080
npm test           # validates content/*.json + unit tests
npm run build      # production build (set BASE_PATH for subpath hosting)
```

- Site content is imported from `content/*.json` via `src/content.ts` — components
  contain no hardcoded store data.
- Product images resolve through `imageUrl()`: a bare file name maps to
  `public/images/<name>`, a full `https://` URL is used as-is.
- Deployment: pushing to `main` runs `.github/workflows/deploy.yml`, which
  validates content, builds with the correct `BASE_PATH`, and publishes to
  GitHub Pages. A broken content edit fails the build and leaves the last good
  deploy live.
