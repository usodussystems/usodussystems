# Usodus Systems — Design System
> **Version:** 1.0  
> **Audience:** AI Agents, Design Tools, Code Generators, CI/CD Pipelines  
> **Purpose:** Single source of truth for all Usodus Systems product UI. Any agent generating UI, copy, or assets for Usodus must comply with every rule in this document.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing System](#4-spacing-system)
5. [Elevation & Shadows](#5-elevation--shadows)
6. [Border Radius](#6-border-radius)
7. [Design Tokens (CSS)](#7-design-tokens-css)
8. [Component Library](#8-component-library)
   - [Buttons](#81-buttons)
   - [Form Elements](#82-form-elements)
   - [Badges & Tags](#83-badges--tags)
   - [Alerts](#84-alerts)
   - [Cards](#85-cards)
   - [Stat Cards](#86-stat-cards)
   - [Avatars](#87-avatars)
   - [Chips & Toggles](#88-chips--toggles)
   - [Data Tables](#89-data-tables)
   - [Progress Bars](#810-progress-bars)
   - [Toasts](#811-toasts)
   - [Skeletons](#812-skeletons)
9. [Brand Voice & Writing](#9-brand-voice--writing)
10. [Layout & Grid](#10-layout--grid)
11. [Do / Don't Rules](#11-do--dont-rules)
12. [Agent Checklist](#12-agent-checklist)

---

## 1. Brand Identity

### 1.1 Company
- **Legal Name:** Usodus Systems
- **Short Name:** Usodus
- **Logo mark initials:** `US`
- **Tagline:** Enterprise Technology Solutions

### 1.2 Logo Usage Rules
- Always maintain clear space around the logo equal to the **diameter of the circular element** in the mark.
- Never place competing graphics inside the clear zone.
- The logo may appear in three versions:
  - **Full color** (preferred)
  - **Negative / reversed** (white on dark backgrounds)
  - **Single color** (for restricted-color applications)
- There is also a **no-slogan variant** for institutional digital/print materials.
- **Minimum print size:** 5 mm height for all versions.
- **Auxiliary colors must never be applied to the logo mark.**

### 1.3 Brand Personality
| Attribute | Description |
|-----------|-------------|
| Voice | Professional, technically authoritative |
| Pace | Advances fast, consistently, on solid foundations |
| Tone | Confident without arrogance. Precise without jargon. |
| Quality bar | Enterprise-grade. No shortcuts. |

---

## 2. Color System

### 2.1 Primary Colors
> These are the only colors permitted on the logo. All primary colors must be reproduced exactly using the values below.

| Name | HEX | Pantone® | CMYK | RGB |
|------|-----|----------|------|-----|
| **Navy** | `#002D91` | Reflex Blue C | C100 M86 Y16 K0 | 0 / 45 / 145 |
| **Blue** | `#0084C6` | Process Blue C | C82 M37 Y0 K0 | 0 / 132 / 198 |
| **Gray** | `#A1A1A1` | 422 C | C39 M30 Y31 K9 | 161 / 161 / 161 |

**Usage:**
- `Navy #002D91` → Primary brand, headings, primary CTAs, navigation backgrounds
- `Blue #0084C6` → Accents, links, secondary CTAs, interactive highlights
- `Gray #A1A1A1` → Supporting text, disabled states, secondary UI elements

### 2.2 Auxiliary Colors
> Support colors for contrast and dynamism. **Never apply to the logo.** Use for semantic states, accents, and visual hierarchy.

| Name | HEX | Pantone® | CMYK | Semantic Role |
|------|-----|----------|------|---------------|
| **Purple** | `#574299` | 267 C | C79 M81 Y0 K0 | Accent / Beta / Feature flags |
| **Yellow** | `#EAC435` | 7404 C | C10 M21 Y86 K1 | Warning / Pending / Emphasis |
| **Orange** | `#E05F1E` | Orange 021 C | C6 M73 Y95 K1 | Alternative CTA / High alert |
| **Teal** | `#028090` | 7713 C | C83 M29 Y36 K12 | Success / Online / Positive |
| **Magenta** | `#A50053` | 220 C | C25 M100 Y33 K19 | Error / Critical / Danger |

### 2.3 Neutral Scale
> Derived from the brand — all neutrals carry a slight navy undertone.

| Token | HEX | Usage |
|-------|-----|-------|
| `--white` | `#FFFFFF` | Surfaces, cards, inputs |
| `--g50` | `#F8F9FC` | Page background |
| `--g100` | `#F0F2F7` | Subtle backgrounds, hover states |
| `--g200` | `#DDE1EC` | Borders, dividers |
| `--g300` | `#C4CAD9` | Input borders (default) |
| `--g400` | `#A1A1A1` | Placeholder text, icons |
| `--g500` | `#767676` | Secondary text, labels |
| `--g600` | `#4A4A5A` | Body text |
| `--g700` | `#2D2D3D` | Primary text |
| `--g800` | `#1A1A2E` | Dark surfaces, toast backgrounds |
| `--g900` | `#0D0D1A` | Near-black |

### 2.4 Semantic Color Mapping
| State | Color | HEX |
|-------|-------|-----|
| Success | Teal | `#028090` |
| Warning | Yellow | `#EAC435` |
| Error / Danger | Magenta | `#A50053` |
| Info | Blue | `#0084C6` |
| Primary action | Navy | `#002D91` |

---

## 3. Typography System

### 3.1 Typefaces

| Role | Family | Import |
|------|--------|--------|
| **Display / Brand** | Baloo Tamma 2 | `https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800` |
| **Body / UI** | Poppins | `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700` |

### 3.2 Baloo Tamma 2 — Display Use
> Use for: headings, brand moments, stat values, navigation wordmark, display-scale titles, short institutional messages.

| Style | Weight | Size | Line Height | Color |
|-------|--------|------|-------------|-------|
| Display / H1 | 800 ExtraBold | 40px | 1.15 | `#002D91` Navy |
| Heading / H2 | 700 Bold | 28px | 1.2 | `#002D91` Navy |
| Subheading / H3 | 600 SemiBold | 20px | 1.3 | `#002D91` Navy |
| H4 | 600 SemiBold | 16px | 1.4 | `#2D2D3D` g700 |
| Card Title | 700 Bold | 14px | 1.4 | `#4A4A5A` g600 |
| Logo Wordmark | 800 ExtraBold | 20–28px | 1 | White on Navy |

### 3.3 Poppins — Body & UI
> Use for: body copy, form labels, table data, badges, captions, all running text.

| Style | Weight | Size | Line Height | Color |
|-------|--------|------|-------------|-------|
| Body Large | 400 Regular | 16px | 1.6 | `#4A4A5A` g600 |
| Body Medium | 400 Regular | 14px | 1.6 | `#4A4A5A` g600 |
| Body Small | 400 Regular | 13px | 1.6 | `#767676` g500 |
| Label | 600 SemiBold | 13px | 1.4 | `#4A4A5A` g600 |
| UI Label | 700 Bold | 12px | 1 | `#767676` g500 |
| Micro / Badge | 700 Bold | 11px | 1 | Varies by context |
| Section Tag | 700 Bold | 11px | 1 | `#0084C6` Blue — UPPERCASE + letter-spacing 1.5px |
| Code / Mono | System mono | 13px | 1.7 | `#A8C4F8` on dark |

### 3.4 Typography Rules
- **Never** use Arial, Roboto, Inter, or system-sans as display fonts.
- Section tags and micro labels: always **UPPERCASE** with `letter-spacing: 1–1.5px`.
- Body copy: never smaller than 13px.
- Minimum contrast ratio: **4.5:1** for body text (WCAG AA).
- Display headings: `letter-spacing: -0.5px` to tighten at large sizes.

---

## 4. Spacing System

> Base unit: **4px**. All spacing values are multiples of 4.

| Token | Value | Name |
|-------|-------|------|
| `--sp-1` | 4px | xs |
| `--sp-2` | 8px | sm |
| `--sp-3` | 12px | sm+ |
| `--sp-4` | 16px | md |
| `--sp-6` | 24px | lg |
| `--sp-8` | 32px | xl |
| `--sp-12` | 48px | 2xl |
| `--sp-16` | 64px | 3xl |
| `--sp-24` | 96px | 4xl |
| `--sp-32` | 128px | 5xl |

**Rules:**
- All padding, margin, and gap values must use a spacing token.
- Card internal padding: `24px` (`--sp-6`)
- Section vertical spacing: `32–48px`
- Inline element gaps: `8–12px`
- Form field gap: `20px`

---

## 5. Elevation & Shadows

> Shadows carry a navy tint (`rgba(0,45,145,…)`) to maintain brand coherence.

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 3px rgba(0,45,145,0.08), 0 1px 2px rgba(0,45,145,0.06)` | Cards at rest, inputs |
| `--shadow-md` | `0 4px 12px rgba(0,45,145,0.10), 0 2px 4px rgba(0,45,145,0.06)` | Hover state cards, dropdowns |
| `--shadow-lg` | `0 12px 32px rgba(0,45,145,0.14), 0 4px 8px rgba(0,45,145,0.08)` | Modals, popovers, toasts |
| `--shadow-xl` | `0 24px 64px rgba(0,45,145,0.18), 0 8px 16px rgba(0,45,145,0.10)` | Full-screen overlays |

---

## 6. Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-none` | 0px | Dividers, full-bleed elements |
| `--radius-sm` | 4px | Small badges, tight UI |
| `--radius-md` | 8px | Buttons, inputs, chips |
| `--radius-lg` | 12px | Cards, panels, modals |
| `--radius-xl` | 16px | Large feature cards |
| `--radius-full` | 9999px | Pills, badges, toggles, avatars |

---

## 7. Design Tokens (CSS)

Paste this block into any product stylesheet as the single source of truth.

```css
:root {
  /* ── Primary Colors ── */
  --navy:    #002D91;
  --blue:    #0084C6;
  --gray:    #A1A1A1;

  /* ── Auxiliary Colors ── */
  --purple:  #574299;
  --yellow:  #EAC435;
  --orange:  #E05F1E;
  --teal:    #028090;
  --magenta: #A50053;

  /* ── Neutral Scale ── */
  --white:   #FFFFFF;
  --g50:     #F8F9FC;
  --g100:    #F0F2F7;
  --g200:    #DDE1EC;
  --g300:    #C4CAD9;
  --g400:    #A1A1A1;
  --g500:    #767676;
  --g600:    #4A4A5A;
  --g700:    #2D2D3D;
  --g800:    #1A1A2E;
  --g900:    #0D0D1A;

  /* ── Semantic Colors ── */
  --color-success: var(--teal);
  --color-warning: var(--yellow);
  --color-error:   var(--magenta);
  --color-info:    var(--blue);

  /* ── Typography ── */
  --font-display: 'Baloo Tamma 2', sans-serif;
  --font-body:    'Poppins', sans-serif;
  --font-mono:    'Courier New', monospace;

  --fw-regular:   400;
  --fw-medium:    500;
  --fw-semibold:  600;
  --fw-bold:      700;
  --fw-extrabold: 800;

  /* ── Spacing ── */
  --sp-1:  4px;
  --sp-2:  8px;
  --sp-3:  12px;
  --sp-4:  16px;
  --sp-6:  24px;
  --sp-8:  32px;
  --sp-12: 48px;
  --sp-16: 64px;
  --sp-24: 96px;
  --sp-32: 128px;

  /* ── Border Radius ── */
  --radius-none: 0px;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* ── Elevation / Shadows ── */
  --shadow-sm: 0 1px 3px rgba(0,45,145,0.08), 0 1px 2px rgba(0,45,145,0.06);
  --shadow-md: 0 4px 12px rgba(0,45,145,0.10), 0 2px 4px rgba(0,45,145,0.06);
  --shadow-lg: 0 12px 32px rgba(0,45,145,0.14), 0 4px 8px rgba(0,45,145,0.08);
  --shadow-xl: 0 24px 64px rgba(0,45,145,0.18), 0 8px 16px rgba(0,45,145,0.10);

  /* ── Transitions ── */
  --transition-fast:   0.15s ease;
  --transition-base:   0.18s ease;
  --transition-slow:   0.35s ease;
}
```

---

## 8. Component Library

Each component entry includes: purpose, anatomy, variants, states, and the exact CSS to implement it.

---

### 8.1 Buttons

**Purpose:** Trigger actions. Always a `<button>` element (never `<div>` or `<a>` for primary actions).

#### Variants

| Variant | Background | Color | Border | Use |
|---------|-----------|-------|--------|-----|
| `primary` | `#002D91` | White | None | Main CTA, one per view |
| `secondary` | `#0084C6` | White | None | Secondary action |
| `outline-navy` | Transparent | `#002D91` | 2px `#002D91` | Tertiary, lower emphasis |
| `outline-blue` | Transparent | `#0084C6` | 2px `#0084C6` | Alternate tertiary |
| `ghost` | Transparent | `#4A4A5A` | None | Inline actions, low hierarchy |
| `danger` | `#A50053` | White | None | Destructive actions only |
| `disabled` | `#DDE1EC` | `#A1A1A1` | None | Inactive — use `disabled` attr |

#### Sizes

| Size | Font | Padding | Border Radius |
|------|------|---------|---------------|
| `sm` | 12px / 600 | 7px 14px | 8px |
| `md` | 14px / 600 | 10px 20px | 8px |
| `lg` | 15px / 600 | 13px 28px | 8px |

#### States
- **Hover (primary):** `background: #003AAD`, `box-shadow: 0 4px 16px rgba(0,45,145,0.45)`, `transform: translateY(-1px)`
- **Active:** `transform: scale(0.97)`
- **Focus:** `outline: 2px solid #0084C6; outline-offset: 2px`
- **Disabled:** cursor `not-allowed`, no hover/shadow effects

#### CSS

```css
.btn {
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  letter-spacing: 0.2px;
}

/* Sizes */
.btn-sm { font-size: 12px; padding: 7px 14px; }
.btn-md { font-size: 14px; padding: 10px 20px; }
.btn-lg { font-size: 15px; padding: 13px 28px; }

/* Variants */
.btn-primary   { background: var(--navy); color: white; box-shadow: 0 2px 8px rgba(0,45,145,0.35); }
.btn-secondary { background: var(--blue); color: white; box-shadow: 0 2px 8px rgba(0,132,198,0.35); }
.btn-outline   { background: transparent; color: var(--navy); border: 2px solid var(--navy); }
.btn-ghost     { background: transparent; color: var(--g600); }
.btn-danger    { background: var(--magenta); color: white; }
.btn-disabled  { background: var(--g200); color: var(--g400); cursor: not-allowed; }

.btn-primary:hover { background: #003AAD; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,45,145,0.45); }
.btn:active        { transform: scale(0.97); }
```

---

### 8.2 Form Elements

**Purpose:** Data entry. All inputs use `<input>`, `<select>`, or `<textarea>` — never custom div-based inputs without ARIA roles.

#### Input States

| State | Border | Shadow on focus |
|-------|--------|-----------------|
| Default | 1.5px `#C4CAD9` | `0 0 0 3px rgba(0,132,198,0.12)` |
| Hover | 1.5px `#A1A1A1` | — |
| Focus | 1.5px `#0084C6` | `0 0 0 3px rgba(0,132,198,0.12)` |
| Error | 1.5px `#A50053` | `0 0 0 3px rgba(165,0,83,0.12)` |
| Success | 1.5px `#028090` | `0 0 0 3px rgba(2,128,144,0.12)` |
| Disabled | 1.5px `#DDE1EC` | — |

#### Anatomy
- **Label:** 13px / SemiBold / `#4A4A5A` — above input, 6px gap
- **Input:** 14px / Regular / `#2D2D3D` — `padding: 10px 14px`, `border-radius: 8px`
- **Hint text:** 12px / Regular / `#767676` — below input, 6px gap. Red `#A50053` for errors, teal `#028090` for success.
- **Required indicator:** `*` in `#A50053` Magenta beside label

#### CSS

```css
.form-label {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: var(--fw-semibold);
  color: var(--g600);
}

.form-input {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--g700);
  background: var(--white);
  border: 1.5px solid var(--g300);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  transition: all var(--transition-base);
  outline: none;
  width: 100%;
}

.form-input:focus         { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(0,132,198,0.12); }
.form-input:hover:not(:focus) { border-color: var(--g400); }
.form-input.error         { border-color: var(--magenta); }
.form-input.error:focus   { box-shadow: 0 0 0 3px rgba(165,0,83,0.12); }
.form-input.success       { border-color: var(--teal); }
.form-input.success:focus { box-shadow: 0 0 0 3px rgba(2,128,144,0.12); }

.form-hint       { font-size: 12px; color: var(--g500); }
.form-hint.error { color: var(--magenta); }
.form-hint.success { color: var(--teal); }
```

---

### 8.3 Badges & Tags

**Purpose:** Status indicators, version labels, category tags. Always `<span>` — never interactive unless it's a chip (see 8.8).

#### Variants

| Variant | Background | Text Color |
|---------|-----------|------------|
| `primary` | `rgba(0,45,145,0.10)` | `#002D91` |
| `blue` | `rgba(0,132,198,0.12)` | `#006BA0` |
| `success` | `rgba(2,128,144,0.12)` | `#028090` |
| `warning` | `rgba(234,196,53,0.20)` | `#A07C00` |
| `danger` | `rgba(165,0,83,0.10)` | `#A50053` |
| `purple` | `rgba(87,66,153,0.10)` | `#574299` |
| `orange` | `rgba(224,95,30,0.10)` | `#E05F1E` |
| `gray` | `#F0F2F7` | `#4A4A5A` |
| `outline-navy` | Transparent | `#002D91` — border 1.5px |
| `outline-blue` | Transparent | `#0084C6` — border 1.5px |

#### Anatomy
- Font: 12px / 700 / Poppins
- Padding: `4px 10px`
- Border radius: `--radius-full` (pill)
- Optional: 6×6px colored dot before label text

#### CSS

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: var(--fw-bold);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  letter-spacing: 0.2px;
}
```

---

### 8.4 Alerts

**Purpose:** Inline contextual messages. Always visible in the page flow — not modal or floating.

#### Variants

| Variant | Background | Left Border | Text Color |
|---------|-----------|-------------|------------|
| `info` | `rgba(0,132,198,0.07)` | 4px `#0084C6` | `#005B87` |
| `success` | `rgba(2,128,144,0.07)` | 4px `#028090` | `#015F6B` |
| `warning` | `rgba(234,196,53,0.12)` | 4px `#EAC435` | `#7A6300` |
| `danger` | `rgba(165,0,83,0.07)` | 4px `#A50053` | `#A50053` |

#### Anatomy
- Container: `padding: 14px 16px`, `border-radius: 10px`, `border-left: 4px solid`
- Icon: 18px, left side, flex-shrink 0
- Title: 14px / 700 / Baloo Tamma 2
- Body: 14px / 400 / Poppins, `line-height: 1.5`

---

### 8.5 Cards

**Purpose:** Group related content into a bounded surface. Default surface for dashboards and list views.

#### Standard Card

```css
.card {
  background: var(--white);
  border: 1px solid var(--g200);
  border-radius: var(--radius-lg);   /* 12px */
  padding: var(--sp-6);              /* 24px */
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### Dark / Navy Card

```css
.card-dark {
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  color: white;
}
.card-dark .card-title { font-family: var(--font-display); font-size: 18px; font-weight: 800; }
.card-dark .card-desc  { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.5; }
```

#### Card Title Pattern

```css
.card-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: var(--fw-bold);
  color: var(--g600);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
/* Blue accent bar before title */
.card-title::before {
  content: '';
  display: block;
  width: 12px;
  height: 3px;
  background: var(--blue);
  border-radius: 2px;
}
```

---

### 8.6 Stat Cards

**Purpose:** KPI display for dashboards. 3–4 per row max.

#### Anatomy
- Top accent bar: 3px height, color based on metric type
- Label: 11px / 700 / Poppins / UPPERCASE / `#767676`
- Value: 32px / 800 / Baloo Tamma 2 / `#002D91` — tight `letter-spacing: -1px`
- Change indicator: 12px / 600 / arrow + percentage + context — teal for positive, magenta for negative

#### Accent Colors by Context

| Context | Accent |
|---------|--------|
| Primary metric | `--navy` |
| Performance | `--blue` |
| Health / uptime | `--teal` |
| Caution metric | `--orange` |
| Critical metric | `--magenta` |

```css
.stat-card {
  background: var(--white);
  border: 1px solid var(--g200);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--navy); /* override per variant */
}
.stat-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

.stat-value { font-family: var(--font-display); font-size: 32px; font-weight: 800; color: var(--navy); letter-spacing: -1px; }
.stat-label { font-size: 11px; font-weight: 700; color: var(--g500); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 10px; }
.stat-change-up   { font-size: 12px; font-weight: 600; color: var(--teal); }
.stat-change-down { font-size: 12px; font-weight: 600; color: var(--magenta); }
```

---

### 8.7 Avatars

**Purpose:** User and entity representation.

#### Sizes

| Size | Diameter | Font |
|------|----------|------|
| `xs` | 28px | 11px |
| `sm` | 36px | 13px |
| `md` | 48px | 16px |
| `lg` | 64px | 22px |

#### Colors
Cycle through brand palette for multi-user contexts:
`Navy → Blue → Purple → Teal → Orange → Magenta`

#### Presence Indicators (bottom-right dot, 10×10px, 2px white border)

| Status | Color |
|--------|-------|
| Online | `#028090` Teal |
| Away | `#EAC435` Yellow |
| Busy | `#A50053` Magenta |
| Offline | `#A1A1A1` Gray |

```css
.avatar {
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: var(--fw-extrabold);
  color: white;
  position: relative;
  flex-shrink: 0;
}
.avatar-status {
  position: absolute;
  bottom: 0; right: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid white;
}
```

---

### 8.8 Chips & Toggles

#### Filter Chips

```css
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: var(--fw-medium);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--g200);
  background: white;
  color: var(--g600);
  cursor: pointer;
  transition: all var(--transition-base);
}
.chip:hover    { border-color: var(--blue); color: var(--blue); background: rgba(0,132,198,0.05); }
.chip.selected { border-color: var(--navy); background: rgba(0,45,145,0.08); color: var(--navy); font-weight: 600; }
```

#### Toggle / Switch

| State | Track | Thumb position |
|-------|-------|----------------|
| Off | `#C4CAD9` g300 | left: 3px |
| On | `#002D91` Navy | left: 23px |

```css
.switch {
  width: 44px; height: 24px;
  background: var(--g300);
  border-radius: var(--radius-full);
  position: relative;
  cursor: pointer;
  transition: background var(--transition-base);
  border: none;
}
.switch.on { background: var(--navy); }
.switch::after {
  content: '';
  position: absolute;
  top: 3px; left: 3px;
  width: 18px; height: 18px;
  background: white;
  border-radius: 50%;
  transition: left var(--transition-base);
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.switch.on::after { left: 23px; }
```

---

### 8.9 Data Tables

**Purpose:** Structured data display. All tables must be `<table>` elements — never CSS grid masquerading as a table.

#### Structure
- `<thead>`: 11px / 700 / UPPERCASE / `letter-spacing: 0.8px` / `#767676` / `background: #F8F9FC`
- `<tbody>`: 14px / 400 / `#4A4A5A`
- `<td>:first-child`: 600 SemiBold / `#2D2D3D` (row identifier)
- Row hover: `background: #F8F9FC`
- Header border bottom: `1.5px solid #DDE1EC`
- Row border bottom: `1px solid #F0F2F7`

```css
.table { width: 100%; border-collapse: collapse; font-size: 14px; }

.table th {
  text-align: left;
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--g500);
  padding: 10px 16px;
  background: var(--g50);
  border-bottom: 1.5px solid var(--g200);
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--g100);
  color: var(--g600);
  vertical-align: middle;
}

.table tr:last-child td { border-bottom: none; }
.table tr:hover td      { background: var(--g50); }
.table td:first-child   { font-weight: var(--fw-semibold); color: var(--g700); }
```

---

### 8.10 Progress Bars

**Purpose:** Capacity, completion, and usage visualization.

#### Anatomy
- Track: `height: 8px`, `background: #F0F2F7`, `border-radius: 99px`
- Fill: same height, `border-radius: 99px`, color from semantic palette
- Header row: label (left) + percentage (right), 13px / 600

#### Color by Threshold

| Value | Fill Color |
|-------|------------|
| 0–60% | `#002D91` Navy or `#028090` Teal |
| 61–80% | `#E05F1E` Orange |
| 81–100% | `#A50053` Magenta |

```css
.progress-track { height: 8px; background: var(--g100); border-radius: 99px; overflow: hidden; }
.progress-fill  { height: 100%; border-radius: 99px; transition: width 0.6s ease; }
```

---

### 8.11 Toasts

**Purpose:** Non-blocking, ephemeral system notifications. Always appear bottom-right or top-right. Max width: 320px.

#### Anatomy
- Container: `background: #1A1A2E` (g800), `border-radius: 10px`, `border-left: 4px solid [variant color]`
- Title: 14px / 700 / Baloo Tamma 2 / White
- Body: 13px / 400 / Poppins / White
- Entry animation: `translateY(8px) → translateY(0)` + fade, 0.3s ease
- Auto-dismiss: 4–6 seconds (implementation dependent)

| Variant | Border Color |
|---------|-------------|
| `info` | `#0084C6` Blue |
| `success` | `#028090` Teal |
| `warning` | `#EAC435` Yellow |
| `error` | `#A50053` Magenta |

```css
.toast {
  background: var(--g800);
  color: white;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  font-size: 13px;
  box-shadow: var(--shadow-lg);
  border-left: 4px solid;
  max-width: 320px;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

### 8.12 Skeletons

**Purpose:** Loading placeholder that matches the shape of incoming content.

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--g100) 25%,
    var(--g200) 50%,
    var(--g100) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
```

**Rules:**
- Skeleton shape must match final content shape (width, height, border-radius).
- Never show skeleton for more than 5 seconds — show an error state instead.
- Use `--g100` / `--g200` only — never brand colors in skeleton.

---

## 9. Brand Voice & Writing

### 9.1 Tone Principles

| Principle | Correct | Incorrect |
|-----------|---------|-----------|
| **Precise** | "API endpoint validated in 12ms." | "Your API seems to be working fine!" |
| **Authoritative** | "Configure your integration below." | "You might want to set things up here." |
| **Concise** | "Deploy" | "Click here to start the deployment process" |
| **Professional** | "Service degraded. Investigating." | "Oops! Something went wrong 😅" |
| **Actionable** | "Regenerate your token in Settings." | "There might be a problem with your token." |

### 9.2 UI Copy Rules

- **Buttons:** Verb + noun. `Deploy Service`, `Upload File`, `Generate Token`. Never `Click Here` or `Submit`.
- **Labels:** Title case for form labels. `API Endpoint`, not `api endpoint`.
- **Error messages:** State what happened + what to do. `Invalid token. Regenerate in Settings.`
- **Empty states:** Explain the state + offer an action. `No services configured. Add your first service.`
- **Confirmations:** Active voice. `Deployment successful.` Not `Your deployment has been completed.`
- **Tooltips:** 1–2 sentences max. No period if single sentence fragment.

### 9.3 Technical Writing Standards

- Always use exact version numbers: `v4.1.0` not `latest version`
- Latency: always `ms` suffix: `12ms`
- Percentages: always `%` suffix with 2 decimal max: `99.97%`
- Large numbers: use SI suffixes: `2.4M`, `450K`, `3.8M`
- Dates: ISO 8601 in data contexts: `2026-03-28`. Human-readable in UI: `March 28, 2026`

---

## 10. Layout & Grid

### 10.1 Navigation

```
Height: 64px
Background: var(--navy)
Position: sticky top:0, z-index: 100
Logo: left-aligned, Baloo Tamma 2 / 800 / 20px / white
Nav tabs: right side, 13px / 500 / Poppins
Active tab: white text, rgba(0,132,198,0.25) background
```

### 10.2 Sidebar

```
Width: 220px
Background: white
Border-right: 1px solid var(--g200)
Position: sticky top:64px, height: calc(100vh - 64px)
Section label: 10px / 700 / UPPERCASE / letter-spacing:1px / var(--g500)
Nav item: 13px / 500 / var(--g600) — padding: 9px 20px
Active item: var(--navy), background #EEF2FF, border-left: 3px solid var(--navy)
```

### 10.3 Main Content Area

```
Padding: 40px 48px
Max-width: 1100px
```

### 10.4 Grid Patterns

| Pattern | CSS |
|---------|-----|
| 2-column equal | `grid-template-columns: 1fr 1fr; gap: 20px` |
| 3-column equal | `grid-template-columns: 1fr 1fr 1fr; gap: 20px` |
| Stat cards | `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px` |
| Color swatches | `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px` |
| Sidebar + main | `grid-template-columns: 220px 1fr` |

### 10.5 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≤ 900px | Collapse sidebar (hide), single column, reduced padding |
| ≤ 600px | Stack all grids to 1 column, nav tabs hidden |

---

## 11. Do / Don't Rules

### ✅ DO
- Use `--navy` for primary CTAs and headings
- Use `--teal` for success states
- Use `--magenta` for errors and danger actions
- Use `--yellow` for warnings
- Use Baloo Tamma 2 for all display text and stat values
- Use Poppins for all body, label, and UI text
- Add navy-tinted shadows (`rgba(0,45,145,…)`)
- Maintain clear space around the logo
- UPPERCASE + letter-spacing for micro labels and section tags
- Use `<table>` for tabular data
- Use `<button>` for all interactive controls

### ❌ DON'T
- Apply auxiliary colors to the logo mark
- Use `Arial`, `Roboto`, `Inter`, or system fonts
- Use pure black (`#000000`) — use `#2D2D3D` or `#0D0D1A`
- Use pure grey shadows — always tint with navy
- Mix more than 2 typefaces on a single surface
- Place busy backgrounds inside the logo clear zone
- Use more than one `primary` button per view section
- Use `<div>` or `<a>` as the primary action trigger
- Apply `--yellow` as text on white — use `#A07C00` for legibility
- Reproduce auxiliary colors at full saturation on light backgrounds — use 10–20% opacity fills

---

## 12. Agent Checklist

> Before generating any UI output, verify every item below.

```
COLORS
[ ] Primary brand color used: #002D91 (navy) or #0084C6 (blue) or #A1A1A1 (gray)
[ ] Semantic states: success=#028090, warning=#EAC435, error=#A50053, info=#0084C6
[ ] No auxiliary color applied to logo
[ ] Shadows use rgba(0,45,145,…) navy tint
[ ] No pure black (#000) — use #2D2D3D or #1A1A2E

TYPOGRAPHY
[ ] Display/headings use Baloo Tamma 2 (400–800 weight available)
[ ] Body/labels/tables use Poppins (400–700 weight)
[ ] Micro labels are UPPERCASE with letter-spacing ≥ 1px
[ ] No Arial, Roboto, Inter, or system-ui fonts used
[ ] Section tags are uppercase + --blue color + 11px

SPACING
[ ] All spacing values are multiples of 4px
[ ] Card padding: 24px
[ ] Form field gap: 20px

COMPONENTS
[ ] Buttons use <button> element, correct variant and size class
[ ] Inputs have label + hint text + all states (default, focus, error, success)
[ ] Badges are pill-shaped (border-radius: 9999px)
[ ] Tables use <table> / <thead> / <tbody> / <th> / <td>
[ ] Toasts have left border + dark background + entry animation

BRAND VOICE
[ ] Button labels are Verb + Noun
[ ] Error messages state what happened + what to do
[ ] No casual language (oops, yikes, etc.)
[ ] Numbers formatted: 2.4M / 12ms / 99.97% / v4.1.0

ACCESSIBILITY
[ ] Interactive elements are keyboard focusable
[ ] Focus ring: 2px solid #0084C6 offset 2px
[ ] Color contrast ≥ 4.5:1 for body text
[ ] Disabled elements have cursor: not-allowed + reduced opacity
[ ] Form inputs have associated <label> elements
```

---

*Usodus Systems Design System — v1.0 — For internal and agent use.*  
*Produced in accordance with the Usodus Brand Manual (Manual da Marca – Guia de Aplicações).*  
*All color values verified against Pantone® Formula Guide references.*
