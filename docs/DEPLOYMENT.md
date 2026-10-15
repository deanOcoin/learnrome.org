# Deployment

The build output in `dist/` is entirely static: HTML, JS, CSS, fonts and one
SVG icon. There is no server, no database, no API, no analytics and no network
call of any kind at runtime. Any static host will serve it.

```bash
npm ci
npm run build      # regenerates the corpus, typechecks, then builds
npm run preview    # serve dist/ locally to check before shipping
```

---

## 1. Set `og:image` (the one required edit)

`index.html` intentionally ships without `og:image`, because the tag needs an
absolute URL on the final origin — a relative path renders as a broken preview
card on every platform that unfurls links. Once the domain is known, add:

```html
<meta property="og:image" content="https://YOUR-DOMAIN/social.png" />
<meta name="twitter:image" content="https://YOUR-DOMAIN/social.png" />
```

and switch `twitter:card` from `summary` to `summary_large_image`. Put the
image in `public/` (1200×630 works everywhere).

## 2. Response headers

The app sets what it can from a `<meta>` tag — a strict Content Security Policy
that locks every resource type to `'self'`. Three protections **cannot** be set
that way and must be configured on the host:

| Header | Value | Why |
|---|---|---|
| `X-Frame-Options` | `DENY` | `frame-ancestors` is ignored in meta CSP; without it the app can be framed for clickjacking |
| `X-Content-Type-Options` | `nosniff` | stops MIME sniffing |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | HTTPS only — add once the domain is confirmed on HTTPS |

Optionally move the CSP itself into a response header (same policy as the meta
tag) and add `frame-ancestors 'none'` there. A header CSP supersedes the meta
one and is strictly better; the meta tag exists so the policy applies even on a
host where headers cannot be configured.

## 3. Caching

Asset filenames are content-hashed, so:

- `/assets/*` — immutable, cache for a year:
  `Cache-Control: public, max-age=31536000, immutable`
- `/index.html` — must revalidate, or readers stay on an old build:
  `Cache-Control: no-cache`

## 4. Routing

Single page, no client-side router. Deep links are query strings
(`/?e=cannae-216bce`), not paths, so **no SPA rewrite rule is needed** — every
request is for `/` or a real file. A catch-all rewrite to `index.html` is
harmless but unnecessary.

---

## What is not in the production build

- The control-audit table (`?dev=audit`). It is behind `import.meta.env.DEV`,
  so it is dead code at build time and the component is never bundled —
  verified absent from `dist/`.
- Source maps. Vite does not emit them by default and they are not enabled.
- Any secret, key or credential. There are none; nothing to leak.

## Pre-flight

- `npm test` — 77 tests
- `npx tsc -b` — clean
- Lighthouse, last measured: mobile **92 / 100 / 100 / 100**, desktop
  **100 / 100 / 100 / 100** (performance / accessibility / best practices / SEO)
