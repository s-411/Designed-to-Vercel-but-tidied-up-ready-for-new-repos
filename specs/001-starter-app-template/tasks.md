# Tasks: Starter App Template Infrastructure

**Input**: Design documents from `/specs/001-starter-app-template/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL and not included in this implementation plan unless explicitly requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Starter App**: `starter-app/src/` for Next.js application code
- **Infrastructure**: `infra/` for database migrations and configuration

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create starter-app/ workspace directory structure per implementation plan
- [ ] T002 Initialize Next.js 14+ project with TypeScript in starter-app/
- [ ] T003 [P] Install core dependencies: Supabase client, Stripe, Resend, Tailwind CSS, Framer Motion
- [ ] T004 [P] Configure TypeScript with strict mode in starter-app/tsconfig.json
- [ ] T005 [P] Configure Tailwind CSS and integrate mm-design-system tokens in starter-app/tailwind.config.ts
- [ ] T006 [P] Setup ESLint and Prettier configuration in starter-app/.eslintrc.json
- [ ] T007 Create .env.example with all required environment variables in starter-app/
- [ ] T008 [P] Create starter-app/README.md with quickstart instructions
- [ ] T009 [P] Setup package.json scripts for dev, build, lint, and setup:check in starter-app/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T010 Setup Supabase schema with user profiles table in infra/supabase/migrations/001_create_users.sql
- [ ] T011 [P] Configure Supabase client with auth helpers in starter-app/src/lib/supabase.ts
- [ ] T012 [P] Implement environment variable validation using Zod in starter-app/src/lib/env.ts
- [ ] T013 [P] Create health check API endpoint in starter-app/src/app/api/health/route.ts
- [ ] T014 [P] Setup authentication middleware for protected routes in starter-app/src/middleware.ts
- [ ] T015 [P] Create root layout with providers (theme, auth) in starter-app/src/app/layout.tsx
- [ ] T016 [P] Implement theme provider with dark/light/system modes in starter-app/src/components/providers/theme-provider.tsx
- [ ] T017 [P] Create global styles importing design tokens in starter-app/src/app/globals.css
- [ ] T018 [P] Setup error boundary and error handling utilities in starter-app/src/lib/errors.ts
- [ ] T019 Create base TypeScript types for entities in starter-app/src/types/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Developer Bootstraps New Project (Priority: P1) 🎯 MVP

**Goal**: Enable developers to clone template and launch fully functional app in 15 minutes with only environment variables

**Independent Test**: Clone repo, copy .env.example to .env.local, add valid API keys, run dev server, verify app starts without errors and shows functional landing page

### Implementation for User Story 1

- [ ] T020 [P] [US1] Create landing page with hero section in starter-app/src/app/page.tsx
- [ ] T021 [P] [US1] Create setup validation script that checks all env vars in starter-app/src/scripts/check-setup.ts
- [ ] T022 [P] [US1] Implement health check system that tests all service connections in starter-app/src/app/api/health/route.ts
- [ ] T023 [US1] Create status dashboard component showing integration health in starter-app/src/components/setup/status-dashboard.tsx
- [ ] T024 [P] [US1] Document all environment variables with descriptions in starter-app/.env.example
- [ ] T025 [P] [US1] Create quickstart documentation in starter-app/README.md with setup steps
- [ ] T026 [US1] Implement theme toggle component in navbar in starter-app/src/components/ui/theme-toggle.tsx
- [ ] T027 [US1] Create responsive navbar with navigation in starter-app/src/components/layout/navbar.tsx
- [ ] T028 [US1] Add setup:check npm script to package.json that validates configuration

**Checkpoint**: At this point, User Story 1 should be fully functional - developers can bootstrap and run the app

---

## Phase 4: User Story 2 - Authentication Flow Setup (Priority: P2)

**Goal**: Enable immediate user authentication with signup, signin, password reset, and profile management out of the box

**Independent Test**: Sign up new user, log in, reset password, access protected routes without re-authentication

### Implementation for User Story 2

- [ ] T029 [P] [US2] Create auth routes group structure in starter-app/src/app/(auth)/
- [ ] T030 [P] [US2] Implement signup page with form validation in starter-app/src/app/(auth)/signup/page.tsx
- [ ] T031 [P] [US2] Implement signin page with form validation in starter-app/src/app/(auth)/signin/page.tsx
- [ ] T032 [P] [US2] Implement password reset request page in starter-app/src/app/(auth)/reset-password/page.tsx
- [ ] T033 [P] [US2] Implement password reset confirmation page in starter-app/src/app/(auth)/reset-password/confirm/page.tsx
- [ ] T034 [US2] Create Supabase auth API route handlers in starter-app/src/app/api/auth/callback/route.ts
- [ ] T035 [US2] Implement user profile API endpoints (GET, PATCH) in starter-app/src/app/api/user/profile/route.ts
- [ ] T036 [P] [US2] Create protected dashboard route in starter-app/src/app/(dashboard)/dashboard/page.tsx
- [ ] T037 [P] [US2] Create profile management page in starter-app/src/app/(dashboard)/profile/page.tsx
- [ ] T038 [P] [US2] Create auth form components (inputs, buttons, validation) in starter-app/src/components/auth/
- [ ] T039 [US2] Configure email verification workflow with Supabase in infra/supabase/migrations/002_auth_setup.sql
- [ ] T040 [US2] Create email templates for auth (verification, password reset) in starter-app/src/lib/email/templates/
- [ ] T041 [US2] Implement useUser hook for auth state management in starter-app/src/hooks/use-user.ts
- [ ] T042 [US2] Update middleware to protect dashboard routes in starter-app/src/middleware.ts

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - full auth flow operational

---

## Phase 5: User Story 3 - Payment Integration Ready (Priority: P2)

**Goal**: Enable immediate payment acceptance with pre-configured checkout flows, subscription management, and webhook handling

**Independent Test**: Initiate test payment with Stripe test keys, complete checkout, verify webhook receipt and user account upgrade

### Implementation for User Story 3

- [ ] T043 [P] [US3] Create Subscription entity table in infra/supabase/migrations/003_create_subscriptions.sql
- [ ] T044 [US3] Configure Stripe client with API keys in starter-app/src/lib/stripe.ts
- [ ] T045 [P] [US3] Create Stripe checkout API endpoint in starter-app/src/app/api/stripe/checkout/route.ts
- [ ] T046 [P] [US3] Create Stripe customer portal API endpoint in starter-app/src/app/api/stripe/portal/route.ts
- [ ] T047 [US3] Implement Stripe webhook handler in starter-app/src/app/api/stripe/webhook/route.ts
- [ ] T048 [P] [US3] Create pricing page with subscription tiers in starter-app/src/app/pricing/page.tsx
- [ ] T049 [P] [US3] Create billing management page in starter-app/src/app/(dashboard)/billing/page.tsx
- [ ] T050 [P] [US3] Create pricing card components in starter-app/src/components/billing/pricing-card.tsx
- [ ] T051 [P] [US3] Create subscription status badge component in starter-app/src/components/billing/subscription-badge.tsx
- [ ] T052 [US3] Implement subscription service layer in starter-app/src/lib/services/subscription-service.ts
- [ ] T053 [US3] Create Stripe product and price configuration in infra/stripe/products.json
- [ ] T054 [US3] Add subscription status to user profile type in starter-app/src/types/index.ts
- [ ] T055 [US3] Update user profile API to include subscription data in starter-app/src/app/api/user/profile/route.ts
- [ ] T056 [US3] Create setup guide for Stripe webhooks in infra/docs/setup-guides/stripe-setup.md

**Checkpoint**: All core payment functionality operational - users can subscribe and manage billing

---

## Phase 6: User Story 4 - Email Communications Setup (Priority: P3)

**Goal**: Provide both transactional and marketing email systems ready for user communications

**Independent Test**: Trigger transactional email events, verify emails sent within 5 seconds, add user to marketing list on signup

### Implementation for User Story 4

- [ ] T057 [P] [US4] Create Email Subscriber entity table in infra/supabase/migrations/004_create_email_subscribers.sql
- [ ] T058 [US4] Implement email provider interface in starter-app/src/lib/email/provider-interface.ts
- [ ] T059 [P] [US4] Create Resend adapter for transactional emails in starter-app/src/lib/email/providers/resend.ts
- [ ] T060 [P] [US4] Create ConvertKit adapter in starter-app/src/lib/email/providers/convertkit.ts
- [ ] T061 [P] [US4] Create MailerLite adapter in starter-app/src/lib/email/providers/mailerlite.ts
- [ ] T062 [P] [US4] Create Brevo adapter in starter-app/src/lib/email/providers/brevo.ts
- [ ] T063 [P] [US4] Create Sender adapter in starter-app/src/lib/email/providers/sender.ts
- [ ] T064 [US4] Implement email provider factory with env-based selection in starter-app/src/lib/email/factory.ts
- [ ] T065 [P] [US4] Create welcome email template in starter-app/src/lib/email/templates/welcome.tsx
- [ ] T066 [P] [US4] Create subscription confirmation template in starter-app/src/lib/email/templates/subscription-confirmed.tsx
- [ ] T067 [P] [US4] Create password reset email template in starter-app/src/lib/email/templates/password-reset.tsx
- [ ] T068 [US4] Create email subscription API endpoint in starter-app/src/app/api/email/subscribe/route.ts
- [ ] T069 [US4] Implement email service with retry and circuit breaker in starter-app/src/lib/services/email-service.ts
- [ ] T070 [US4] Add email sending to user signup flow in starter-app/src/app/api/auth/callback/route.ts
- [ ] T071 [US4] Add email sending to subscription webhook events in starter-app/src/app/api/stripe/webhook/route.ts
- [ ] T072 [P] [US4] Create email preferences page in starter-app/src/app/(dashboard)/preferences/page.tsx
- [ ] T073 [P] [US4] Create setup guides for each email provider in infra/docs/setup-guides/

**Checkpoint**: Email infrastructure complete - transactional and marketing emails operational

---

## Phase 7: User Story 5 - Theme and UI Customization (Priority: P3)

**Goal**: Enable customization of app look and feel with pre-built theme switching and responsive layouts

**Independent Test**: Toggle themes and verify entire app updates consistently, check responsive breakpoints on mobile, change primary color in design tokens and verify all components reflect change

### Implementation for User Story 5

- [ ] T074 [P] [US5] Create theme configuration with design system tokens in starter-app/src/lib/theme-config.ts
- [ ] T075 [P] [US5] Implement theme persistence with localStorage in starter-app/src/hooks/use-theme.ts
- [ ] T076 [P] [US5] Create responsive layout wrapper components in starter-app/src/components/layout/
- [ ] T077 [P] [US5] Implement mobile navigation menu with animations in starter-app/src/components/layout/mobile-nav.tsx
- [ ] T078 [P] [US5] Create breakpoint detection hook in starter-app/src/hooks/use-breakpoint.ts
- [ ] T079 [P] [US5] Add theme-aware color utilities in starter-app/src/lib/utils/colors.ts
- [ ] T080 [P] [US5] Create theme customization guide in infra/docs/customization-guide.md
- [ ] T081 [US5] Update all existing components to respect theme tokens in starter-app/src/components/
- [ ] T082 [US5] Test theme switching across all pages and components
- [ ] T083 [US5] Validate responsive behavior at mobile (320px), tablet (768px), and desktop (1024px+) breakpoints

**Checkpoint**: Theme system fully integrated - all UI respects theme and responsive design

---

## Phase 8: RAG Q&A Chatbot (Priority: P3)

**Goal**: Implement Q&A chatbot with knowledge base using RAG for answering questions based on uploaded documents

**Independent Test**: Upload PDF/text file, wait for processing completion, ask questions about document, verify responses include source citations

### Implementation for RAG Feature

- [ ] T084 [P] Create Document entity table with pgvector in infra/supabase/migrations/005_create_documents.sql
- [ ] T085 [P] Create Document Chunk entity table with vector embeddings in infra/supabase/migrations/006_create_document_chunks.sql
- [ ] T086 [P] Create Chat Session entity table in infra/supabase/migrations/007_create_chat_sessions.sql
- [ ] T087 [P] Create Chat Message entity table in infra/supabase/migrations/008_create_chat_messages.sql
- [ ] T088 [P] Enable pgvector extension in Supabase in infra/supabase/enable-vector.sql
- [ ] T089 [US6] Configure OpenAI client in starter-app/src/lib/openai.ts
- [ ] T090 [P] [US6] Implement document upload API endpoint in starter-app/src/app/api/documents/route.ts
- [ ] T091 [P] [US6] Implement document list/get/delete API endpoints in starter-app/src/app/api/documents/[documentId]/route.ts
- [ ] T092 [US6] Implement document chunking service in starter-app/src/lib/services/chunking-service.ts
- [ ] T093 [US6] Implement embedding generation service in starter-app/src/lib/services/embedding-service.ts
- [ ] T094 [US6] Implement vector similarity search in starter-app/src/lib/services/search-service.ts
- [ ] T095 [P] [US6] Create chat session API endpoints in starter-app/src/app/api/chat/sessions/route.ts
- [ ] T096 [P] [US6] Create chat message API endpoints with streaming in starter-app/src/app/api/chat/sessions/[sessionId]/messages/route.ts
- [ ] T097 [US6] Implement RAG pipeline (retrieve → augment → generate) in starter-app/src/lib/services/rag-service.ts
- [ ] T098 [P] [US6] Create document upload page in starter-app/src/app/(dashboard)/documents/page.tsx
- [ ] T099 [P] [US6] Create chat interface page in starter-app/src/app/(dashboard)/chat/page.tsx
- [ ] T100 [P] [US6] Create document upload component with progress in starter-app/src/components/chat/document-upload.tsx
- [ ] T101 [P] [US6] Create chat message list component in starter-app/src/components/chat/message-list.tsx
- [ ] T102 [P] [US6] Create chat input component in starter-app/src/components/chat/chat-input.tsx
- [ ] T103 [P] [US6] Create source citation components in starter-app/src/components/chat/source-citations.tsx
- [ ] T104 [US6] Implement document processing background job in starter-app/src/lib/jobs/process-document.ts
- [ ] T105 [US6] Create useChat hook for managing chat state in starter-app/src/hooks/use-chat.ts
- [ ] T106 [US6] Create useDocuments hook for document management in starter-app/src/hooks/use-documents.ts

**Checkpoint**: RAG chatbot fully functional - users can upload documents and ask questions

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

### Constitution Compliance Tasks

- [ ] T107 [P] Verify all components use token-backed utilities from mm-design-system (Principle I: Token-First)
- [ ] T108 [P] Accessibility audit: keyboard navigation, ARIA labels, color contrast across all pages (Principle IV)
- [ ] T109 [P] Responsive behavior validation at 320px, 768px, 1024px, 1440px breakpoints (Principle V)
- [ ] T110 Run npm run lint across starter-app workspace

### General Polish

- [ ] T111 [P] Create comprehensive setup documentation in starter-app/README.md
- [ ] T112 [P] Create troubleshooting guide in infra/docs/troubleshooting.md
- [ ] T113 [P] Add loading states and skeletons to all async components
- [ ] T114 [P] Implement toast notifications for user feedback in starter-app/src/components/ui/toast.tsx
- [ ] T115 [P] Add error pages (404, 500) in starter-app/src/app/
- [ ] T116 [P] Create favicon and metadata in starter-app/src/app/layout.tsx
- [ ] T117 [P] Add analytics placeholder (privacy-friendly) in starter-app/src/lib/analytics.ts
- [ ] T118 [P] Implement rate limiting for API endpoints in starter-app/src/middleware.ts
- [ ] T119 [P] Add API request logging in starter-app/src/lib/logger.ts
- [ ] T120 [P] Security hardening: CSRF protection, XSS prevention, SQL injection prevention
- [ ] T121 Run quickstart.md validation by following all setup steps
- [ ] T122 Performance optimization: bundle size analysis, lazy loading, image optimization
- [ ] T123 [P] Create deployment guide for Vercel in infra/docs/deployment-guide.md
- [ ] T124 Create CHANGELOG.md documenting template features

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Phase 2 - No dependencies on other stories
  - User Story 2 (P2): Can start after Phase 2 - Independent of other stories
  - User Story 3 (P2): Can start after Phase 2 - Should integrate with US2 for user accounts
  - User Story 4 (P3): Can start after Phase 2 - Should integrate with US2 (signup emails) and US3 (payment emails)
  - User Story 5 (P3): Can start after Phase 2 - Independent but applies to all UI
  - RAG Feature (P3): Can start after Phase 2 - Requires US2 for user authentication
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Integrates with US2 for authenticated users
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Integrates with US2 and US3 for email triggers
- **User Story 5 (P3)**: Can start after Foundational (Phase 2) - Independently testable but affects all UI
- **RAG Feature (P3)**: Can start after Foundational (Phase 2) - Requires US2 for authentication

### Within Each User Story

- Setup phase before all others
- Foundational phase must complete before any user story
- Database migrations before services that use them
- Services before API endpoints
- API endpoints before UI components
- Core implementation before integration with other stories

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, user stories can start in parallel (if team capacity allows)
- Models within a story marked [P] can run in parallel
- UI components within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 2 (Authentication)

```bash
# Launch all parallel auth page tasks together:
Task: "Implement signup page with form validation in starter-app/src/app/(auth)/signup/page.tsx"
Task: "Implement signin page with form validation in starter-app/src/app/(auth)/signin/page.tsx"
Task: "Implement password reset request page in starter-app/src/app/(auth)/reset-password/page.tsx"
Task: "Implement password reset confirmation page in starter-app/src/app/(auth)/reset-password/confirm/page.tsx"
Task: "Create protected dashboard route in starter-app/src/app/(dashboard)/dashboard/page.tsx"
Task: "Create profile management page in starter-app/src/app/(dashboard)/profile/page.tsx"
Task: "Create auth form components (inputs, buttons, validation) in starter-app/src/components/auth/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Bootstrap experience)
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

**MVP Delivers**: Developers can clone template, add environment variables, and launch a functional Next.js app with working landing page, theme toggle, and health check dashboard in under 15 minutes.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 (Auth) → Test independently → Deploy/Demo
4. Add User Story 3 (Payments) → Test independently → Deploy/Demo
5. Add User Story 4 (Email) → Test independently → Deploy/Demo
6. Add User Story 5 (Theming) → Test independently → Deploy/Demo
7. Add RAG Feature → Test independently → Deploy/Demo
8. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Bootstrap)
   - Developer B: User Story 2 (Auth)
   - Developer C: User Story 3 (Payments)
   - Developer D: User Story 4 (Email)
   - Developer E: User Story 5 (Theming)
   - Developer F: RAG Feature
3. Stories complete and integrate independently

---

## Task Summary

**Total Tasks**: 124 tasks
- Phase 1 (Setup): 9 tasks
- Phase 2 (Foundational): 10 tasks (BLOCKS all user stories)
- Phase 3 (US1 - Bootstrap): 9 tasks
- Phase 4 (US2 - Authentication): 14 tasks
- Phase 5 (US3 - Payments): 14 tasks
- Phase 6 (US4 - Email): 17 tasks
- Phase 7 (US5 - Theme/UI): 10 tasks
- Phase 8 (RAG Chatbot): 23 tasks
- Phase 9 (Polish): 18 tasks

**Parallel Opportunities**: 68 tasks marked [P] can run in parallel within their phases

**MVP Scope**: Phases 1-3 (28 tasks) deliver working template that developers can bootstrap

**Independent Test Criteria**:
- US1: Clone → env vars → launch → verify landing page and health check
- US2: Sign up → log in → reset password → access protected routes
- US3: Subscribe → checkout → webhook → billing management
- US4: Send transactional email → add to marketing list → manage preferences
- US5: Toggle theme → check responsive → customize tokens
- RAG: Upload document → ask questions → verify citations

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Tests are OPTIONAL and not included unless explicitly requested
- Focus on template infrastructure - avoid deep feature customization
- Prioritize environment-variable-only configuration
- Follow mm-design-system principles for all UI components
