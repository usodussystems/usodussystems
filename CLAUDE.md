# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/corporate single-page site for **Usodus Systems**, originally exported from
**Figma Make** and extended by hand. React 18 + Vite 6 + TypeScript SPA, tri-lingual
(EN/ES/PT), deployed either to AWS (S3 + CloudFront via Terraform) or GitHub Pages.

## Commands

```bash
npm ci          # install (lockfile present)
npm run dev      # Vite dev server on http://localhost:3000 (auto-opens)
npm run build    # production build -> ./build  (target: esnext)
```

There is **no `lint`, `test`, `preview`, or `typecheck` script**, no ESLint/Prettier
config, and no test framework — despite what `src/README.md` claims (that README is
aspirational and partly inaccurate; trust this file and the actual `package.json`).

The build runs `vite build` only. **Vite/esbuild strips types without checking them**,
so type errors do not fail the build. To catch them, run type-checking manually:

```bash
npx tsc --noEmit
```

## Architecture (the big picture)

**Entry chain:** `index.html` → `src/main.tsx` → `src/App.tsx`. `src/main.tsx` imports
`./index.css` (see Styling gotcha below). The root `index.html` `<title>` is a
placeholder; `useSEO` overwrites it client-side at runtime.

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

- **⚠️ Two competing, conflicting frontend stacks exist; one is dead and broken.**
  The LIVE stack uses `useLanguage()` (object `t`) from `lib/LanguageContext.tsx` with
  `organisms/Header`, `organisms/Footer`, `molecules/LanguageSelector`. A second,
  ABANDONED stack imports `useTranslation`/`I18nContext` from `lib/i18n.ts` —
  **neither export exists** — and treats `t` as a function (`t('nav.home')`). The dead
  files are `components/providers/I18nProvider.tsx`,
  `components/atoms/LanguageSwitcher.tsx`, `components/molecules/Header.tsx`,
  `components/molecules/Footer.tsx`. They compile-fail but are unreachable from
  `App.tsx`, so the build passes. **Do not wire these in.** Use the `useLanguage`
  pattern for any new UI.

- **⚠️ Tailwind CSS is pre-compiled and committed.** `src/main.tsx` loads
  `src/index.css`, a frozen, generated Tailwind v4 stylesheet (~1700 lines). There is
  **no `tailwindcss` dependency, no PostCSS, no Tailwind config** in the build. A new
  Tailwind class in a component will have **no CSS** unless it already exists in
  `src/index.css`. `src/styles/globals.css` is **not imported anywhere** (dead),
  despite the README pointing to it. To change styling, edit/regenerate
  `src/index.css`, or reintroduce a real Tailwind build.

- **All forms are mocks.** Contact, Client Area login, and News "Read More" only
  `console.log`/`alert`. The Client Area shows a hardcoded "SSL encryption" notice with
  no real auth.

- **Duplicate Figma-export config.** Both `/` and `/src` contain `package.json`,
  `vite.config.ts`, `tsconfig*.json`, and `index.html`. The **root** ones are
  authoritative for builds. The root `vite.config.ts` also carries ~40 versioned import
  aliases (e.g. `'sonner@2.0.3' -> 'sonner'`) and `'@' -> ./src`.

## Infrastructure & deploy

Two divergent deploy paths exist; confirm which is canonical before changing either.

- **`terraform/`** provisions AWS S3 + CloudFront (module `blueprints/web_hosted`):
  OAC (no public bucket), security-headers policy, SPA 403→200 `/index.html` fallback,
  multi-tenant via `subdomains`. Known issues: the `backend "s3"` block in
  `providers.tf` references `var.role_arn`, which Terraform forbids (init will fail);
  the actual S3 object-upload resources are **commented out**, so the IaC does not
  upload site files; and owner emails / a hardcoded AWS account id are committed. Apply
  with env-specific `*.tfvars` (gitignored: `*auto.tfvars`).

- **`.github/workflows/deploy.yml`** builds and publishes to **GitHub Pages**, but
  triggers on push to the **`gh-pages`** branch (inverted from the usual flow) and uses
  Vite `base: '/'` — asset paths (`/assets`, `/logo-navbar.png`) would 404 under a
  project-Pages subpath, so it assumes a custom domain / user-root Pages.

## Conventions

- Brand colors are CSS custom properties in `src/index.css` (`--color-reflex-blue`,
  `--color-process-blue`, etc.) surfaced as utility classes (`text-reflex-blue`,
  `bg-process-blue`, …). Fonts: Baloo Tamma 2 (headings, `.heading-font`), Poppins
  (body, `.body-font`).
- `build/` is gitignored; do not commit build output.
