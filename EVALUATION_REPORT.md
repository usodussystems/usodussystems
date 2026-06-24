# Code Evaluation Report — Usodus Systems Website

**Date:** 2026-06-24
**Branch reviewed:** `claude/code-evaluation-report-294pfi`
**Scope:** Full repository — React/Vite frontend, Terraform infrastructure, CI/CD.

---

## 1. Executive Summary

This is a marketing/corporate website for "Usodus Systems," originally exported
from **Figma Make** and then extended by hand. It is a single-page React 18 + Vite 6
+ TypeScript application with a tri-lingual UI (EN/ES/PT), backed by a Terraform
stack that provisions S3 + CloudFront static hosting on AWS, plus a GitHub Actions
workflow that deploys to GitHub Pages.

**Overall health: usable but rough.** The app **builds cleanly** (`npm run build`
succeeds, 1618 modules, ~192 kB JS / ~27 kB CSS) and the live code path is coherent.
However, the repository carries a significant amount of **dead/duplicated code from
two competing architectures**, has **no tests / lint / type-check gate**, ships
**leaked internal identifiers in the Terraform config**, and contains an **invalid
Terraform backend** definition. None of these block the current build, but several
are real correctness/maintenance/security risks.

| Area | Rating | Notes |
|------|--------|-------|
| Builds & runs | 🟢 Good | `npm ci && npm run build` works out of the box |
| Frontend architecture | 🟡 Fair | Two parallel, conflicting i18n/component systems; one is broken-but-dead |
| Code quality | 🟡 Fair | Leftover `console.log`, dead vars, no lint/typecheck |
| i18n / a11y / SEO | 🟡 Fair | Good i18n coverage; SPA SEO is client-only; some a11y gaps |
| Infrastructure (Terraform) | 🔴 Needs work | Invalid backend var ref; leaked emails/account ID; commented-out core resources |
| CI/CD | 🟡 Fair | Deploys to Pages on a backwards trigger; diverges from the Terraform/AWS path |
| Security | 🟡 Fair | Mock auth + misleading "SSL" copy; internal PII committed |

---

## 2. Architecture Overview

```
index.html ──> src/main.tsx ──> src/App.tsx
                                   │
                 LanguageProvider (src/lib/LanguageContext.tsx)
                                   │
        ┌──────────── AppContent (state-based "router") ───────────┐
        │  currentPage ∈ {home, news, client-area}                 │
        │  Header(organisms) ─ HomePage ─ NewsPage ─ ClientArea ─ Footer(organisms)
        └──────────────────────────────────────────────────────────┘
```

- **Routing** is `useState`-based (`currentPage`), not URL-based. No React Router,
  no history integration → no deep links, no browser back/forward, no per-page URLs.
- **i18n** is a hand-rolled context (`LanguageContext` + `getTranslations`) with
  full EN/ES/PT dictionaries in `src/lib/i18n.ts`. Language persists to
  `localStorage`. This part is clean and works.
- **Design system**: a large `src/components/ui/*` shadcn/Radix library is vendored
  in, but the live app mostly uses lightweight custom `atoms/` (Button, Input, Logo…).
- **Styling**: Tailwind v4 utilities are **pre-compiled and committed** as a static
  `src/index.css` (see §4.3) — there is no Tailwind/PostCSS in the build.

---

## 3. What Works Well

- ✅ **Clean production build** with no errors; reasonable bundle size (58.9 kB JS gzip).
- ✅ **Solid i18n**: three complete locales, `<html lang>` updates, OG/Twitter locale
  mapping, persistence.
- ✅ **Thoughtful SEO helper** (`src/lib/seo.tsx`): dynamic title/description/keywords,
  Open Graph + Twitter cards, and JSON-LD `Organization` structured data.
- ✅ **Atomic-design intent** (atoms/molecules/organisms/pages) is a sensible structure.
- ✅ **Reasonable AWS hosting blueprint**: CloudFront Origin Access Control (no public
  bucket), `BucketOwnerEnforced`, public-access-block on, security headers policy
  (HSTS, X-Content-Type-Options, frame SAMEORIGIN, referrer policy), TLS 1.2_2021,
  SPA 403→200 `/index.html` fallback. Good baseline.

---

## 4. Key Findings

### 4.1 🔴 Two competing, conflicting frontend subsystems (dead code that won't compile)

The repo contains a **second, abandoned i18n + component stack** that references
exports which **do not exist**. It is currently *dead* (not reachable from `App.tsx`),
so it doesn't break the build — but it is a trap for the next developer and would fail
the moment it's wired in or a type-check is added.

The **live** stack uses:
- `lib/LanguageContext.tsx` → `useLanguage()`, `t` is a **Translations object** (`t.nav.home`)
- `getTranslations()` from `lib/i18n.ts`
- `organisms/Header`, `organisms/Footer`, `molecules/LanguageSelector`

The **dead/broken** stack expects:
- `useTranslation()` and `I18nContext` from `lib/i18n.ts` — **neither is exported**
  (`i18n.ts` only exports `translations`, `getTranslations`, `Language`, `Translations`).
- Affected dead files:
  - `src/components/providers/I18nProvider.tsx` — imports non-existent `I18nContext`.
  - `src/components/atoms/LanguageSwitcher.tsx` — imports non-existent `useTranslation`; here `t` is treated as a **function** (`t('nav.home')`).
  - `src/components/molecules/Header.tsx` — duplicate of `organisms/Header`, uses `useTranslation`.
  - `src/components/molecules/Footer.tsx` — duplicate of `organisms/Footer`.

> Why the build still passes: Vite/esbuild only bundles files reachable from the
> entry and **strips types without type-checking**. Unreferenced files are never
> compiled; type errors in reached files are not enforced.

**Recommendation:** Delete the abandoned stack (`providers/I18nProvider.tsx`,
`atoms/LanguageSwitcher.tsx`, `molecules/Header.tsx`, `molecules/Footer.tsx`), or
consolidate on a single i18n contract. Then add a `tsc --noEmit` step (see §4.6) so
this class of error can never hide again.

### 4.2 🔴 Terraform backend references a variable (invalid)

`terraform/providers.tf`:

```hcl
backend "s3" {
  bucket  = "<tfstate-bucket>"
  key     = "usodus/us-east-1/dev/main-webapp.tfstate"
  region  = "us-east-1"
  assume_role = {
    role_arn = var.role_arn   # ❌ backend blocks cannot reference variables
  }
}
```

Terraform **does not allow** `var.*` (or any interpolation) inside `backend` blocks.
`terraform init` will reject this. The role ARN must be passed via `-backend-config`,
a `*.hcl` backend file, env vars, or a hardcoded value.

> **✅ Remediated** — the backend is now a partial config (`backend "s3" {}`) supplied
> at init time via `backend.hcl` (see `terraform/backend.hcl.example`).

### 4.3 🟡 Tailwind CSS is pre-compiled and committed (fragile)

`src/index.css` is a **frozen, generated** Tailwind v4.1.3 stylesheet (~1730 lines).
There is no `tailwind.config`, no PostCSS, no `tailwindcss` dependency. Consequences:
- Any **new** Tailwind class added in a component **will have no CSS** unless it
  already happens to exist in the committed file → silent styling failures.
- The file also `@import`s Google Fonts over the network on every page load.

**Recommendation:** Reintroduce a real Tailwind build (Tailwind v4 + `@tailwindcss/vite`)
so utilities are generated from source, or document clearly that `index.css` is the
source of truth and must be regenerated.

### 4.4 🟡 Security / trust issues in the Client Area

`src/components/pages/ClientAreaPage.tsx`:
- Login is a **mock** — submitting just `alert()`s and `console.log`s credentials
  (plaintext) to the console.
- Hardcoded UI copy **"Secure connection with SSL encryption"** is shown even though
  no authentication or transport guarantee exists in the code — misleading to users.
- "Remember me" checkbox and "Forgot Password" (`href="#"`) are non-functional.
- Raw `<input>`s use placeholders only (no associated `<label>`), unlike the
  accessible `atoms/Input`.

**Recommendation:** Either gate this page behind real auth or label it clearly as a
demo and remove the security claim.

### 4.5 🟡 Leaked internal identifiers committed to the repo

`terraform/main.tf` and `terraform/variables.tf` originally contained real-looking
internal data: two corporate owner emails (and a personal email in a commented
Cloudflare provider), a cost-center code, a default internal `domain_name`, a hardcoded
AWS **account ID** in the default ACM cert ARN, and the Terraform **state bucket name**.

For a repo that may be public, these are information-disclosure items.

> **✅ Remediated (current branch)** — owner/cost-center are now required variables
> (`cost_center`, `technical_owner`, `owner`) with no defaults; the leaked `domain_name`
> and `acm_certificate_arn` defaults were removed; the Cloudflare email is now a
> sensitive `cloudflare_email` variable injected from a GitHub secret
> (`TF_VAR_cloudflare_email`) by the `terraform.yml` apply workflow; and the state
> bucket moved to the partial backend config. Real values are supplied via gitignored
> `terraform.tfvars` / `backend.hcl` (templates committed as `*.example`).
>
> ⚠️ **Still required:** these values remain in **git history**. If the repo is or will
> be public, rotate the exposed identifiers and scrub history (e.g. `git filter-repo`).

### 4.6 🟡 No tests, lint, or type-check anywhere

- `package.json` scripts are only `dev` and `build`. No `lint`, no `test`, no
  `typecheck`. No ESLint/Prettier config. No test framework.
- The build does **not** run `tsc`, so type errors (like §4.1) pass unnoticed.

**Recommendation:** Add `"typecheck": "tsc --noEmit"`, ESLint, and at least a smoke
test (Vitest + Testing Library), then run them in CI before deploy.

### 4.7 🟡 CI/CD is backwards and diverges from the IaC

`.github/workflows/deploy.yml`:
- Triggers on **push to `gh-pages`** and then *builds from source and republishes* to
  Pages. The conventional flow is to build on `main`/default and have the action
  publish the artifact — building **on** the deploy branch is inverted and easy to
  get into a confusing state.
- This GitHub Pages path **diverges** from the Terraform S3/CloudFront path; it's
  unclear which is canonical. Pick one as the source of truth.
- For GitHub **project** Pages (`user.github.io/<repo>`), Vite `base` is `'/'`, so the
  absolute asset/logo paths (`/assets/...`, `/logo-navbar.png`) would 404. It only
  works on a custom domain / user-root Pages. Set `base` accordingly if using project Pages.

### 4.8 🟡 Terraform deploy: object upload is commented out

In both `terraform/main.tf` and `modules/blueprints/web_hosted/main.tf`, the
`aws_s3_bucket_object`/file-sync resources are **commented out**. The
`null_resource.deploy` only runs a CloudFront **invalidation** after assuming a role.
So the IaC, as written, provisions the bucket/distribution but **does not upload the
site files** — deployment of actual artifacts must happen out-of-band (and isn't
documented). Worth clarifying or wiring up the `s3/files-sync` module that exists but
is unused.

### 4.9 🟢/🟡 Minor code-quality nits

- `src/components/atoms/Logo.tsx`: leftover `console.log(variant)` runs on **every
  render**; `primaryColor`/`secondaryColor` are declared but unused.
- `App.tsx`: appends a JSON-LD `<script>` via `useEffect` on mount — fine, but
  duplicates intent with `seo.tsx`; could be centralized.
- Root `index.html` `<title>` is still "Professional Website Design" (overwritten
  client-side by `useSEO`, but bad for no-JS/first-paint and crawlers); favicon files
  exist in `public/` but aren't `<link>`ed in `index.html`.
- Duplicate/!leftover config: both root and `src/` contain `package.json`,
  `vite.config.ts`, `tsconfig*.json`, `index.html` (Figma Make export residue).
- `vite.config.ts` carries ~40 versioned import aliases (e.g. `'sonner@2.0.3'`) — a
  Figma Make artifact; harmless but noisy.
- All forms (Contact, Client Area, News "Read More") are **mock-only** (`console.log`).
- `News` content is hardcoded in `NewsPage.tsx` and pulls images from `unsplash.com`
  at runtime (external dependency / no offline fallback besides `ImageWithFallback`).

---

## 5. Prioritized Recommendations

**High (correctness / security)**
1. ✅ Fix the Terraform `backend "s3"` block — remove `var.role_arn`, use `-backend-config`. *(done)*
2. ✅ Remove or de-risk leaked PII/account IDs from Terraform; move to tfvars/secrets. *(done in working tree; history scrub + identifier rotation still pending)*
3. Delete the dead, non-compiling i18n/component stack (§4.1) and add `tsc --noEmit` to CI.
4. Remove the misleading "SSL encryption" claim / plaintext credential logging in Client Area.

**Medium (maintainability)**
5. Decide on ONE deployment path (GitHub Pages *or* S3/CloudFront) and align CI with it;
   fix the inverted `gh-pages` trigger and set Vite `base` if using project Pages.
6. Restore a real Tailwind build, or document `index.css` as generated.
7. Add ESLint + Prettier + a smoke test; wire into CI.
8. Wire up actual S3 artifact upload in Terraform (the `files-sync` module is unused).

**Low (polish)**
9. Remove `console.log`/unused vars (Logo, mock handlers); set the real root `<title>`
   and link the favicon.
10. Consider URL-based routing (React Router) for deep links / SEO / shareable pages.
11. Clean up duplicate root-vs-`src` config files and the versioned Vite aliases.

---

## 6. Verification Performed

- `npm ci` → success (deps install cleanly).
- `npm run build` → **success**: 1618 modules, `build/assets/index-*.js` 192.34 kB
  (gzip 58.91 kB), `index-*.css` 27.49 kB (gzip 5.52 kB).
- Static review of all `src/`, `terraform/`, and `.github/` files; cross-referenced
  imports/exports to confirm the dead-code and broken-export findings.

*Note: Terraform was reviewed statically (no `terraform init/validate` was run, as it
requires AWS credentials and network/backend access).*
