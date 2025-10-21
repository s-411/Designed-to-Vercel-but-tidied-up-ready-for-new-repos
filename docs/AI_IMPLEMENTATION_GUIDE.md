# MM Design System – AI Implementation Guide

Status: Draft  
Companion doc: `docs/SYSTEM_OVERVIEW.md`

## 1. Immutable Rules
- Never hard-code colors, typography, spacing, or shadows—always reference tokens (`hsl(var(--token))`, `var(--color-mm-*)`, or Tailwind utilities backed by tokens).
- Run `npm run tokens:build` before committing when tokens change; run `npm run tokens:check` in CI/pre-push.
- Import global styles exactly once per app (`import "@mm/design-system/styles/globals.css"` in Next.js layout).
- Use generated Tailwind utilities (`mmTailwindTheme`)—do not edit `tailwind.config.ts` color maps manually.
- `npm run lint` in `demo-app` enforces a no-hardcoded-color rule; fix violations by swapping to tokens.

## 2. Environment Setup
- Install dependencies in the design system: `npm install --legacy-peer-deps` (temporary until peer deps are harmonised).
- Bootstrap Next.js project: `npx create-next-app`, install `@mm/design-system` (package publishing TBD).
- Configure Tailwind to extend with `mmTailwindTheme` and include the design system paths in `content`.

## 3. Building New Pages/Features
1. Identify relevant demo section or component in `demo-app/` (use manifest once available).
2. Scaffold layout with Tailwind classes; prefer token-backed utilities (e.g., `bg-background`, `text-foreground`, `rounded-mm`).
3. Compose components by importing from the design system package or reusing `demo-app/components`.
4. Reference canvas screenshots for spacing/visual alignment; never guess values.
5. Verify dark mode in the Next.js preview (`prefers-color-scheme` toggle or theme switcher).

## 4. Component Checklist
- Based on `archive/docs/COMPONENT_CHECKLIST.md` (to be migrated verbatim with updates).
- Ensure hover, focus, disabled, and active states use semantic tokens.
- Include responsive adjustments—check breakpoints defined in `design-tokens.json`.

## 5. Tokens Cheatsheet
- Brand colors: `var(--color-mm-primary)`, `var(--color-mm-secondary)`, etc.
- Semantic HSL channels: `hsl(var(--primary))`, `hsl(var(--background))`.
- Typography vars: `var(--font-family-heading)`, `var(--font-family-body)`.
- Motion: `var(--transition-fast|medium|slow)`.

## 6. Demo Section Reuse Workflow
1. Locate the section in `demo-app` and corresponding screenshot in `canvas-images/`.
2. Copy component tree and styles; swap content only.
3. If new token needed, update `design-tokens.json`, regenerate, and document the usage.

## 7. Bootstrapping a New Project
- TODO: add `scripts/bootstrap-new-project.mjs` instructions.
- Include commands for installing dependencies, copying `.eslintrc`, and running initial build.

## 8. QA & Handoff Expectations
- Run lint/tests (`npm run lint`, upcoming visual regression suite).
- Capture screenshots or Storybook stories for new components.
- Document any token additions in the change log section of `SYSTEM_OVERVIEW.md`.
