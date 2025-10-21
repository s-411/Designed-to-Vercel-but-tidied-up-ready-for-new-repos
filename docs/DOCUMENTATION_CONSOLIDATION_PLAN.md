# Documentation Consolidation Plan

Author: Codex  
Status: Draft  
Scope: Repository root + `design-system` docs

## 1. Target End-State
- Only two living documents for day-to-day reference:
  1. `docs/SYSTEM_OVERVIEW.md`
  2. `docs/AI_IMPLEMENTATION_GUIDE.md`
- All other current docs move to `archive/` (read-only history) or get merged into the two primary docs.
- `README.md` becomes a concise entry point linking to the two docs and the demo app.

## 2. Source Material Inventory

| Current File | Key Content | Action |
| --- | --- | --- |
| `README.md` | General overview, setup notes | Trim to quick start; link to `docs/` |
| `DESIGN_SYSTEM_README.md` | Extended intro | Merge relevant portions into `SYSTEM_OVERVIEW.md`; archive full original |
| `DESIGN_TOKENS.md` | Token tables/examples | Convert to canonical reference section inside `SYSTEM_OVERVIEW.md`; keep a slim appendix |
| `COLOR_SYSTEM_ARCHITECTURE.md` | Brand/semantic color theory | Summarize in tokens section; add rationale sidebar in overview; archive original |
| `COMPONENT_AUDIT.md` | Inventory of components | Move essential tables to appendix in `SYSTEM_OVERVIEW.md`; archive spreadsheet view |
| `COMPONENT_CHECKLIST.md` | Checklist for building components | Fold into AI guide as “Component build checklist” |
| `TIER-1-COMPLETE.md`, `TIER-7-PLAN.md`, `TIERS-8-10-PLAN.md` | Historical planning | Move to `archive/plans` |
| `DESIGN_SYSTEM/README.md`, `SETUP-GUIDE.md` | Setup + package details | Merge setup instructions into overview; archive originals |
| `DESIGN_SYSTEM/AI-CODING-RULES.md` | Rules for agents | Integrate into AI guide verbatim (after trimming redundancies) |
| `design-system/COLOR-REFERENCE.md` | Color palettes | Merge data into tokens reference, keep legend in appendix |

## 3. Proposed Structure

### 3.1 `docs/SYSTEM_OVERVIEW.md`
- **Mission & Principles** (1 page)
- **Repository Map** (tree + description of `design-system`, `demo-app`, `canvas-images`)
- **Token Architecture** (pull canonical tables from `DESIGN_TOKENS.md`, include schema summary linked to `TOKEN_SOURCE_OF_TRUTH_SPEC.md`)
- **Build Tooling & Commands** (link to scripts, `tokens:build`, lint/test)
- **Theming & Modes** (dark/light toggle, theme provider usage)
- **Component Library & Demo App** (how to explore sections, linking to manifest)
- **Update Workflow** (how to add tokens/components)
- **Appendices**: component audit snapshot, color rationale summary

### 3.2 `docs/AI_IMPLEMENTATION_GUIDE.md`
- **Immutable Rules** (no hard-coded styles, always run tokens build, follow lint rules)
- **Environment Setup** (install steps, linking to overview)
- **How to Build a New Page/Feature** (step-by-step with Tailwind examples)
- **Component Checklist** (from `COMPONENT_CHECKLIST.md`)
- **Tokens Reference Cheatsheet** (links back to overview + key aliases)
- **Demo Section Reuse Workflow** (how to locate a section in demo app, map to `canvas-images`)
- **Bootstrap New Project** (will include script usage once created)
- **QA & Hand-off Expectations** (visual regression, design review)

### 3.3 Archive Layout
```
archive/
  README.md                 # Explains archive purpose
  plans/
    TIER-1-COMPLETE.md
    TIER-7-PLAN.md
    TIERS-8-10-PLAN.md
  docs/
    DESIGN_SYSTEM_README.md
    DESIGN_TOKENS.md
    COLOR_SYSTEM_ARCHITECTURE.md
    COMPONENT_AUDIT.md
    COMPONENT_CHECKLIST.md
  design-system/
    README.md
    SETUP-GUIDE.md
    AI-CODING-RULES.md
    COLOR-REFERENCE.md
```
- Archive files keep original content but get an informational front-matter noting they are deprecated.

## 4. Migration Tasks (to schedule)
1. Create `archive/` structure and move files (preserve git history via `git mv`).
2. Author new docs according to structure above.
3. Update `README.md` with new links.
4. Update any in-repo references (e.g., from demo app comments) to new doc paths.

## 5. Outstanding Decisions
- Do we want a printable PDF or Notion export? (Optional post-consolidation)
- Should `canvas-images` include a JSON manifest describing which demo section each screenshot maps to? (Recommended.)
- Do we maintain separate release notes for tokens vs. components? (Consider once automation in place.)

