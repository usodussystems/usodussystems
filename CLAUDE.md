# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/corporate single-page site for **Usodus Systems**, originally exported from
**Figma Make** and extended by hand. React 18 + Vite 6 + TypeScript SPA, tri-lingual
(EN/ES/PT), deployed either to AWS (S3 + CloudFront via Terraform) or GitHub Pages.

## Commands

```bash
npm ci            # install (lockfile present)
npm run dev        # Vite dev server on http://localhost:3000 (auto-opens)
npm run build      # production build -> ./build  (target: esnext)
npm run typecheck  # tsc --noEmit (the build does NOT type-check)
npm run test       # vitest (watch);  npm run test:run for a single CI pass
```

The build runs `vite build` only. **Vite/esbuild strips types without checking them**,
so type errors do not fail the build — that's why `typecheck` is a separate script and
a CI gate (`.github/workflows/ci.yml` runs `typecheck` → `test:run` → `build`).

Testing is **Vitest + Testing Library** (jsdom); config in `vitest.config.ts`, setup in
`src/test/setup.ts`, specs are `*.test.ts(x)` beside the code. There is still **no ESLint/
Prettier** config. `src/README.md` is aspirational and partly inaccurate (it advertises a
`lint`/`preview` script that don't exist) — trust this file and `package.json`.

The typecheck (root `tsconfig.json`) **excludes `src/components/ui`** — that vendored
shadcn/Radix kit uses versioned import specifiers (e.g. `lucide-react@0.487.0`) that only
resolve through the `vite.config.ts` aliases, not `tsc`. It's unreferenced by live code,
so it's kept out of the gate rather than rewritten.

## Architecture (the big picture)

**Entry chain:** `index.html` → `src/main.tsx` → `src/App.tsx`. `src/main.tsx` imports
`./index.css` (see Styling gotcha below). The root `index.html` `<title>` is a static
default ("Usodus Systems"); `useSEO` overwrites it per-page client-side at runtime.

**Routing is state-based, not URL-based.** `App.tsx` holds `currentPage` in
`useState<'home' | 'news' | 'client-area'>` and swaps page components via a `switch`.
There is no React Router — no deep links, no browser back/forward, no per-page URLs.
The `Header`/`Footer` are hidden on the `client-area` page. Navigation between
sections on the home page uses `scrollIntoView` by element id (`about`, `services`,
`solutions`, `contact`).

**i18n is a hand-rolled context.** The live system is `src/lib/LanguageContext.tsx`
(`LanguageProvider` + `useLanguage()`), where `t` is a **Translations object**
accessed by property (`t.nav.home`). Locale dictionaries (EN/ES/PT) live in
`src/lib/i18n.ts`; `getTranslations(lang)` selects one. Language persists to
`localStorage` and sets `<html lang>`. To add a locale: extend the `Language` union
and add a full block to `translations` in `i18n.ts`.

**SEO** is client-side only (`src/lib/seo.tsx`): `useSEO` imperatively sets
title/description/keywords, Open Graph, and Twitter meta on mount; `App.tsx` injects a
JSON-LD `Organization` schema. Because rendering is purely client-side, crawlers that
don't execute JS see only the static `index.html`.

**Component layers (atomic design):** `components/atoms` (custom Button/Input/Logo —
what the live app mostly uses) → `components/molecules` → `components/organisms`
(Header/Footer/Sections, composed by `components/pages`). A large vendored
shadcn/Radix kit lives under `components/ui/*` but is mostly unused by the live pages.

## Critical gotchas

- **One i18n system — use `useLanguage()`.** The live system is `useLanguage()`
  (object `t`, accessed by property like `t.nav.home`) from `lib/LanguageContext.tsx`,
  with `organisms/Header`, `organisms/Footer`, `molecules/LanguageSelector`. An older,
  abandoned stack that imported a non-existent `useTranslation`/`I18nContext` from
  `lib/i18n.ts` (and treated `t` as a function, `t('nav.home')`) has been **deleted**
  (`providers/I18nProvider`, `atoms/LanguageSwitcher`, `molecules/Header`,
  `molecules/Footer`, `organisms/NewsSection`). Don't reintroduce the `useTranslation`
  pattern — use `useLanguage` for any new UI.

- **⚠️ Tailwind CSS is pre-compiled and committed.** `src/main.tsx` loads
  `src/index.css`, a frozen, generated Tailwind v4 stylesheet (~1700 lines). There is
  **no `tailwindcss` dependency, no PostCSS, no Tailwind config** in the build. A new
  Tailwind class in a component will have **no CSS** unless it already exists in
  `src/index.css`. `src/styles/globals.css` is **not imported anywhere** (dead),
  despite the README pointing to it. To change styling, edit/regenerate
  `src/index.css`, or reintroduce a real Tailwind build.

- **All forms are mocks** (no backend). Contact submit and Client Area login just
  flip local state / no-op; the Client Area is labelled a demo (it no longer claims
  SSL/encryption). There is no real auth — don't represent it as secure.

- **Duplicate Figma-export config.** Both `/` and `/src` contain `package.json`,
  `vite.config.ts`, `tsconfig*.json`, and `index.html`. The **root** ones are
  authoritative for builds (root `tsconfig.json` also drives `typecheck`). The root
  `vite.config.ts` carries ~40 versioned import aliases (e.g. `'sonner@2.0.3' ->
  'sonner'`) and `'@' -> ./src`.

## Infrastructure & deploy

**AWS S3 + CloudFront (Terraform) is the canonical deploy path.** The GitHub Pages
workflow has been removed.

- **`terraform/`** provisions AWS S3 + CloudFront (module `blueprints/web_hosted`):
  OAC (no public bucket), security-headers policy, SPA 403→200 `/index.html` fallback,
  multi-tenant via `subdomains`. The `web_hosted` module now uploads the built site via
  `aws_s3_object` (recursive `fileset`, MIME types, `source_hash`); `null_resource.deploy`
  only invalidates CloudFront afterward. **Secrets/identifiers are NOT in source:** the
  `backend "s3"` block is partial (`backend "s3" {}` + `terraform init -backend-config=
  backend.hcl`), and owner/cost-center/domain/ACM-ARN/Cloudflare-token are variables
  supplied via gitignored `terraform.tfvars` / `backend.hcl` (templates: `*.example`).
  Cloudflare provider uses **API-token auth only**.

- **CI/CD workflows** (all under `.github/workflows`):
  - `ci.yml` — PR/`main` quality gate: `npm ci` → `typecheck` → `test:run` → `build`.
  - `terraform.yml` — the deploy. On push to `main` (and via `workflow_dispatch`) it
    builds the site, then `terraform apply` uploads `build/` to S3 and invalidates
    CloudFront. Auth is **AWS OIDC** (`role-to-assume`); `TF_VAR_*` and `backend.hcl`
    are injected from GitHub secrets. `apply` is gated by the `terraform` GitHub
    Environment (add required reviewers there for manual approval). Vite `base: '/'`
    is correct here because CloudFront serves the site at the subdomain root.

## Conventions

- Brand colors are CSS custom properties in `src/index.css` (`--color-reflex-blue`,
  `--color-process-blue`, etc.) surfaced as utility classes (`text-reflex-blue`,
  `bg-process-blue`, …). Fonts: Baloo Tamma 2 (headings, `.heading-font`), Poppins
  (body, `.body-font`).
- `build/` is gitignored; do not commit build output.
