# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (base path: "/")
npm run build      # Production build (base path: "/trucking-company-website/")
npm run preview    # Preview production build locally
npm run deploy     # Build + publish to GitHub Pages via gh-pages
```

No linter or test suite is configured.

## Architecture

Single-page React app (Vite + React 18 + React Router v6) deployed to GitHub Pages at `dacq7.github.io/trucking-company-website`.

**Routing** — `src/App.jsx` defines two routes: `/` → `Home`, `/privacy-policy` → `PrivacyPolicy`. The router uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}` so asset URLs must use the same prefix (e.g. `${import.meta.env.BASE_URL}images/logo/logo.svg`).

**Page composition** — `src/pages/Home.jsx` stacks every section component in order and owns the single `IntersectionObserver` that drives scroll-reveal animations (`.reveal` / `.reveal--visible` classes). Sections do not manage their own reveal logic.

**Styling approach** — Co-located CSS per component (`ComponentName.css` imported inside `ComponentName.jsx`). Global tokens live in `src/styles/global.css` (CSS custom properties) and shared layout utilities (`.container`, `.section`, `.grid-2/3`, `.btn-primary/secondary`, `.card`) live in `src/styles/layout.css`. Always prefer extending existing utility classes before writing new component-level rules.

**Design tokens** (defined in `:root` in `global.css`):
- Colors: `--color-primary` (#0F2A44 dark blue), `--color-accent` (#C62828 red), neutrals
- Font: `Outfit` (Google Fonts, loaded in `index.html`), referenced via `--font-primary`
- Breakpoints: mobile `768px`, tablet `1024px`
- Navbar height: `136px` desktop / `86px` mobile (used for scroll-offset calculations)

**Navbar** — Smart hide/show behavior: hides after scrolling down 65 px past the last show-position; re-appears on any upward scroll. Never hides within the top 80 px safe zone. State is tracked with refs to avoid stale-closure issues inside the `requestAnimationFrame` callback.

**Static assets** — Images live in `public/images/` (hero, services, regulatory, etc.) and are referenced as `${import.meta.env.BASE_URL}images/...` to remain portable between dev and the GitHub Pages sub-path.

**Docs** — `docs/design-system.md` is the authoritative visual spec (colors, spacing, typography, component rules). `docs/website-content.md` and `docs/site-structure.md` contain the content/copy and page structure respectively.
