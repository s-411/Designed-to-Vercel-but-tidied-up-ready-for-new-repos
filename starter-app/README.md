## MM Starter App

This workspace is a token-first Next.js shell configured to consume the local `mm-design-system` package.

### Run locally

```bash
npm run dev      # from repository root -> npm run dev:starter
```

### Key integrations
- Global styles and ThemeProvider imported from `mm-design-system`.
- Tailwind theme extension spreads `mmTailwindTheme` to expose semantic utilities.
- ESLint rule-set forbids hard-coded color literals (mirrors `demo-app` guardrails).

### Typical workflow
1. Modify `src/app/page.tsx` (or add new routes/components under `src/app`).
2. When tokens or utilities change, update `design-system/config/design-tokens.json` and run `npm run tokens:build`.
3. Verify linting with `npm run lint` (from workspace or via root `npm run lint:starter`).
