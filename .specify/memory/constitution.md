<!--
Sync Impact Report:
Version change: [NEW] → 1.0.0
Modified principles: N/A (initial constitution)
Added sections:
  - Core Principles (5 principles: Token-First, Guardrail Enforcement, Workspace Orchestration, Visual Fidelity, Library-First)
  - Deployment Standards
  - Quality Gates
  - Governance
Removed sections: N/A
Templates requiring updates:
  ✅ plan-template.md - Updated Constitution Check section with specific principles
  ✅ spec-template.md - Reviewed, no updates needed (user-focused)
  ✅ tasks-template.md - Added constitution compliance tasks to Polish phase
  ✅ All other templates reviewed and aligned
Follow-up TODOs: None - all placeholders filled with concrete values
-->

# MM Design System Constitution

## Core Principles

### I. Token-First Development (NON-NEGOTIABLE)
All styling MUST originate from design tokens in `design-system/config/design-tokens.json`. Hard-coded colors, typography, spacing, or shadows are forbidden. Every visual property MUST reference tokens via `hsl(var(--token))`, `var(--color-mm-*)`, or Tailwind utilities backed by tokens. The build pipeline via `npm run tokens:build` is the single source of truth for all styling artifacts.

**Rationale**: Ensures visual consistency, enables systematic design changes, and prevents styling drift across the monorepo ecosystem.

### II. Guardrail Enforcement
The lint rules that forbid hard-coded colors (`npm run lint:demo`, `npm run lint:starter`) are inviolable. Violations MUST be fixed, never suppressed. The `npm run tokens:check` command MUST pass before any PR can be merged. Generated artifacts MUST never be manually edited.

**Rationale**: Automated enforcement prevents regression and maintains token discipline without relying on manual review processes.

### III. Workspace Orchestration
The monorepo structure (`design-system/`, `demo-app/`, `starter-app/`) MUST be preserved. The design system package is the single dependency for all consuming applications. Workspace scripts at the root (`tokens:build`, `lint:*`, `dev:starter`) provide unified operations. Cross-package imports MUST go through the published `mm-design-system` package interface.

**Rationale**: Clear separation of concerns between token generation, demonstration, and consumption while maintaining development workflow efficiency.

### IV. Visual Fidelity Contract
The demo application serves as the authoritative reference for component behavior, spacing, and visual design. Canvas screenshots in `canvas-images/` provide visual regression anchors. New components MUST achieve pixel-perfect alignment with demo sections. Theme mode switching (light/dark) MUST work consistently across all components.

**Rationale**: Maintains design quality and provides clear success criteria for component implementation accuracy.

### V. Library-First Architecture
Components MUST be built as reusable library elements before being consumed in applications. The `mm-design-system` package provides the interface boundary. Components MUST be independently testable and documented. Application-specific customizations MUST extend, not modify, the core library components.

**Rationale**: Promotes reusability, testability, and clear architectural boundaries while preventing component proliferation and maintenance overhead.

## Deployment Standards

The demo application MUST deploy to Vercel with root directory set to `demo-app`. Framework detection MUST identify Next.js automatically. Build commands MUST execute token generation before Next.js compilation. Environment configuration MUST support both development workflows and production deployment without manual intervention.

## Quality Gates

Code review MUST verify token compliance using automated lint rules. Visual regression testing MUST validate demo section accuracy against canvas references. Component implementations MUST pass accessibility audits (ARIA labels, keyboard navigation). Performance benchmarks MUST maintain responsive behavior across mobile and desktop viewports.

## Governance

This constitution supersedes all other development practices within the MM Design System ecosystem. Amendments require documentation of the rationale, approval via pull request review, and coordinated migration of affected templates and workflows. All development activities MUST verify compliance with these principles before completion.

Complexity that violates these principles MUST be explicitly justified with business necessity and documented alternatives that were considered and rejected. When constitutional conflicts arise, token-first development (Principle I) takes precedence over all other considerations.

**Version**: 1.0.0 | **Ratified**: 2025-10-22 | **Last Amended**: 2025-10-22