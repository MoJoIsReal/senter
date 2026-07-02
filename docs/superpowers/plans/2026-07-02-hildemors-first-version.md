# Hildemors First Version Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a first working Next.js version of the Hildemors site using real Høst 2026 schedule data and content modeled from the original site.

**Architecture:** Create a Vercel-ready Next.js app using static TypeScript data for the first version. Public pages render from shared data modules so the Kurs page, Timeplan, signup flow, and admin mock pages stay consistent. Admin pages are functional UI prototypes in this version, not database-backed workflows.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS Modules/global CSS, static data modules, npm scripts.

---

### Task 1: Scaffold The App

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`

- [ ] Create the Next.js project files with App Router.
- [ ] Add scripts: `dev`, `build`, `lint`.
- [ ] Add base layout metadata for Hildemors.
- [ ] Add a simple homepage shell that can compile.
- [ ] Run `npm install`.
- [ ] Run `npm run build` and fix compile errors.

### Task 2: Add Real Data Modules

**Files:**
- Create: `lib/data/courseTypes.ts`
- Create: `lib/data/seasons.ts`
- Create: `lib/data/sitePages.ts`
- Create: `lib/data/signup.ts`
- Create: `lib/types.ts`

- [ ] Define TypeScript types for course types, seasons, scheduled courses, pages, signup terms, and attendance/payment status.
- [ ] Add Høst 2026 schedule data from the original PDF mockup.
- [ ] Add course type data for Hip Hop/Street/K-Pop, Selskapsdans, Barnekurs, Jazz/scene, Ballett/moderne, and Privattimer.
- [ ] Link each scheduled course to a course type.
- [ ] Add preserved pages: Om oss, Historie, Privattimer, Show, Pris, Kontakt, Betalingsbetingelser.
- [ ] Run `npm run build` and fix type errors.

### Task 3: Build Public Shell And Homepage

**Files:**
- Create: `components/SiteHeader.tsx`
- Create: `components/SiteFooter.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] Build shared public header navigation.
- [ ] Build shared footer with contact details.
- [ ] Build homepage with warm Hildemors design direction, hero, course finder teaser, course category cards, and timeplan callout.
- [ ] Verify responsive layout manually in browser.
- [ ] Run `npm run build`.

### Task 4: Build Public Kurs And Timeplan Pages

**Files:**
- Create: `app/kurs/page.tsx`
- Create: `app/timeplan/page.tsx`
- Create: `components/CourseTypeCard.tsx`
- Create: `components/ScheduleGrid.tsx`
- Create: `components/CourseDetailPanel.tsx`
- Modify: `app/globals.css`

- [ ] Render course type cards from `courseTypes`.
- [ ] Render Høst 2026 public timeplan from `seasons`.
- [ ] Course cards show time, name, age/level and open a detail panel.
- [ ] Detail panel shows linked course type description and specific course metadata.
- [ ] Public timeplan does not show filters.
- [ ] Run `npm run build`.

### Task 5: Build Signup Flow

**Files:**
- Create: `app/pamelding/page.tsx`
- Create: `components/SignupFlow.tsx`
- Modify: `app/globals.css`

- [ ] Build static four-step signup UI: course/participant, guardian/contact, consents/terms, confirmation.
- [ ] Include guardian fields, dance partner, address, activity card, photo/film consent, and terms acceptance.
- [ ] Show versioned terms text from `signup.ts`.
- [ ] Link from course detail panel to signup page with course context.
- [ ] Run `npm run build`.

### Task 6: Build Admin Prototype Pages

**Files:**
- Create: `app/admin/page.tsx`
- Create: `app/admin/kurs/page.tsx`
- Create: `app/admin/timeplan/page.tsx`
- Create: `app/admin/innsjekk/page.tsx`
- Create: `components/AdminShell.tsx`
- Create: `components/AdminScheduleBuilder.tsx`
- Modify: `app/globals.css`

- [ ] Build admin dashboard overview with course counts, registrations, waitlist, unpaid.
- [ ] Build course type editor prototype showing K-Pop data linked to schedule rows.
- [ ] Build visual schedule builder prototype for draft/published semester workflow.
- [ ] Build reception check-in prototype with QR-code concept and manual search fallback.
- [ ] Run `npm run build`.

### Task 7: Final Verification

**Files:**
- Modify documentation only if commands or URLs differ.

- [ ] Run `npm run build`.
- [ ] Start local dev server.
- [ ] Visit homepage, Kurs, Timeplan, Påmelding, and Admin pages.
- [ ] Confirm public pages use real Høst 2026 schedule data.
- [ ] Confirm previous mockups remain untouched.
- [ ] Report local URL and any known limitations.
