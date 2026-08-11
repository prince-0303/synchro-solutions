# Synchro Solutions — Website Documentation

**Version:** 1.0
**Purpose:** Master reference for designing and building the Synchro Solutions portfolio website.
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Motion (Framer Motion) + Vercel

---

## 1. Project Overview

**Who:** Synchro Solutions — a software agency offering Web Development, Mobile App Development, SaaS Solutions, Social Media Marketing, UI/UX Design, AI Solutions, and Cloud Services.

**What the site must do (in priority order):**
1. Prove credibility fast — a visitor decides in ~5 seconds if this agency looks competent.
2. Show real work — case studies are the single highest-converting section on an agency site.
3. Explain services clearly — visitor should know within 1 scroll if you cover what they need.
4. Convert — every page should lead toward the Contact form/CTA, not dead-end.

**Primary audience:** Founders, product managers, or CTOs of small-to-mid businesses looking to outsource web/mobile/SaaS development. They are evaluating multiple agencies — this site is competing directly against 5–10 open tabs.

**Site tone:** Confident, technical-but-plain-spoken, modern. Not corporate-stiff, not startup-quirky.

---

## 2. Brand Identity

### 2.1 Logo
Interlocking double-"S" mark (infinity/link style), teal-to-blue gradient. Reads as "connection / synchronization" — reinforce this "sync" idea subtly elsewhere (e.g., in transition animations, connecting lines between sections).

### 2.2 Color Palette
Sampled from your existing brand graphic. **Treat these as a starting point** — export exact hex values from your logo source file (Figma/Illustrator) rather than eyeballing screenshots.

| Role | Approx. Hex | Usage |
|---|---|---|
| Ink (near-black navy) | `#0A0E1F` | Dark section backgrounds, dashboard mockups |
| Deep Navy | `#0F172A` | Headline text on light backgrounds |
| Primary Blue | `#2E63EB` | Primary CTA buttons, links, gradient end |
| Sync Teal | `#14B8A6` | Logo gradient start, secondary accent |
| Sync Cyan | `#22C1DC` | Gradient midpoint, hover states |
| Light Surface | `#F3F6FD` | Light section backgrounds |
| Pure White | `#FFFFFF` | Cards, text-on-dark |
| Success Green | `#22C55E` | Stat increases (+23.5% style indicators) |

**Gradient signature:** teal → cyan → blue (this is literally your logo gradient) — reuse it consistently for CTAs, chart accents, and hover glows rather than inventing a second gradient.

### 2.3 Typography — avoid the generic pairing
Don't default to Inter-for-everything; it's the single most templated choice in AI/agency sites right now. Recommended pairing, distinctive but still highly legible:

| Role | Suggested Typeface | Why |
|---|---|---|
| Display / Headlines | **Space Grotesk** or **General Sans** | Geometric, technical character that echoes the interlocked-line logo mark |
| Body | **IBM Plex Sans** or **Inter** | Neutral, highly readable at small sizes |
| Utility / Stats / Code | **JetBrains Mono** or **IBM Plex Mono** | You're a dev agency — using a real monospace face for stats, tags, and code-like labels is an authentic detail, not decoration |

### 2.4 Voice
Plain, specific, active voice. "We build the backend your product actually needs" beats "We leverage cutting-edge technology to deliver scalable solutions." Avoid buzzword soup — ironic for a dev agency to sound like it doesn't understand its own product.

---

## 3. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR/SSG for SEO, file-based routing |
| Language | TypeScript | Type safety across components/data |
| Styling | Tailwind CSS | Utility-first, pairs cleanly with Motion |
| Animation | Motion (Framer Motion) | Scroll reveals, hover states, page transitions |
| Forms | React Hook Form + Zod | Contact form validation |
| Email delivery | Resend or Nodemailer (via API route) | Contact form backend |
| CMS (Phase 2) | Sanity or Contentful | Lets you update Portfolio/Blog without redeploying |
| Hosting | Vercel | Native Next.js support, zero-config CI/CD |
| Analytics | Vercel Analytics or Plausible | Lightweight, privacy-friendly |

---

## 4. Folder Structure

```
synchro-solutions/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, nav, footer, providers)
│   ├── page.tsx                    # Home page
│   ├── globals.css                 # Tailwind base + custom CSS vars
│   ├── sitemap.ts                  # Auto-generates sitemap.xml — required for SEO
│   ├── robots.ts                   # Auto-generates robots.txt — required for SEO
│   ├── error.tsx                   # Error boundary UI (prevents blank-screen crashes)
│   ├── loading.tsx                 # Loading state during server data fetches
│   ├── not-found.tsx               # Custom 404 page
│   ├── about/
│   │   └── page.tsx                # About Us
│   ├── services/
│   │   └── page.tsx                # Services — all 7 offerings, single page
│   ├── contact/
│   │   └── page.tsx                # Contact Us
│   └── api/
│       └── contact/
│           └── route.ts            # Form submission handler
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx              # Home / About Us / Services / Contact Us
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/                   # Home page building blocks
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProcessTeaser.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TechStackStrip.tsx
│   │   └── CTABanner.tsx
│   ├── projects/                   # Used by FeaturedProjects on Home
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   ├── services/                   # Used by /services page
│   │   └── ServiceAccordionItem.tsx
│   ├── ui/                         # Reusable atoms
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   └── AnimatedCounter.tsx
│   └── motion/                     # Reusable animation wrappers
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       ├── StaggerContainer.tsx
│       └── ScrollReveal.tsx
│
├── content/                        # Static data (Phase 1, pre-CMS)
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── team.ts
│
├── lib/
│   ├── utils.ts                    # cn() helper, formatters
│   ├── motionVariants.ts           # Shared animation variants/easings
│   └── constants.ts                # Site-wide constants (nav links, socials)
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── projects/
│   │   └── team/
│   ├── icons/
│   └── fonts/                      # If self-hosting fonts
│
├── types/
│   ├── project.ts
│   ├── service.ts
│   └── testimonial.ts
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.local                      # API keys (email service, analytics)
```

**Why this shape:** `content/` is isolated so it can be swapped for a real CMS later without touching component code. `motion/` wrappers exist so animation logic isn't copy-pasted into every section — you write `<FadeIn>` once and reuse it everywhere, keeping timing/easing consistent site-wide.

---

## 5. Sitemap & Page-by-Page Breakdown

**Confirmed navigation: Home · About Us · Services · Contact Us** (4 pages only — no separate Portfolio, Process, or Blog routes). Project proof and process are folded into Home/About/Services as sections below, so nothing gets lost, it's just not a standalone page yet.

### 5.1 Home (`/`)
| Section | Purpose | Key interaction |
|---|---|---|
| Hero | First impression, core value prop | Animated headline + live-feeling dashboard mockup (reuse your existing device-mockup concept) |
| Services Overview | "What do you do" scan | Cards with hover-lift, icon animation, link to `/services` |
| Featured Projects | Proof — your portfolio, shown as 3–4 best case study cards | Hover reveals project outcome/metric |
| Stats Bar | Quick credibility (projects shipped, clients, years) | Animated count-up on scroll into view |
| Process Teaser | "How do I start" reassurance | Self-contained 3-step visual (Discovery → Build → Launch) |
| Testimonials | Trust | Auto-rotating or draggable carousel |
| Tech Stack Strip | Technical credibility | Logo marquee (subtle infinite scroll) |
| CTA Banner | Final conversion push | Direct link to `/contact` |

### 5.2 About Us (`/about`)
- Company story/mission (why Synchro exists, not generic "we are passionate")
- Team grid (photo, name, role — real faces build trust fast)
- Values section (2–4 values max, each backed by a concrete example, not just a word)
- Optional: a compact "How We Work" step strip (Discovery → Design → Development → Testing → Launch → Support) — this is the natural home for your process now that it isn't a standalone page. Numbered steps are appropriate here since it's genuinely sequential.

### 5.3 Services (`/services`)
Single comprehensive page — all 7 offerings (Web, Mobile, SaaS, Social Media Marketing, UI/UX, AI, Cloud). For each: an expandable/accordion block showing what's included, tools/tech used, and typical timeline, so the page stays scannable instead of becoming a 7-screen scroll. This also doubles as a nice motion moment (expand/collapse animation).

### 5.4 Contact Us (`/contact`)
- Form (name, email, project type, budget range, message)
- Direct contact info + social links
- Optional: embedded calendar booking (Calendly-style) if you want to skip email back-and-forth

### 5.5 Later (not in this build, keep the door open)
If your portfolio grows past 4 projects, a dedicated `/portfolio` page with filtering becomes worth it — the folder structure in section 4 already isolates project data in `content/projects.ts` so adding that page later doesn't require restructuring anything.

---

## 6. Design System Details

### 6.1 Spacing scale
Use Tailwind's default scale (4px base unit) — don't invent a custom one unless there's a specific reason. Consistency matters more than customization here.

### 6.2 Breakpoints
| Name | Width | Notes |
|---|---|---|
| Mobile | `< 640px` | Single column, stacked nav |
| Tablet | `640–1024px` | 2-column grids |
| Desktop | `> 1024px` | Full multi-column layouts |

### 6.3 Motion tokens
Define once in `lib/motionVariants.ts`, reuse everywhere — this keeps every animation across the site feeling like one coherent system instead of scattered effects.

| Token | Value | Used for |
|---|---|---|
| `duration.fast` | 0.2s | Hover states, button feedback |
| `duration.base` | 0.4s | Section fade/slide-ins |
| `duration.slow` | 0.8s | Hero entrance sequence |
| `easing.standard` | `[0.22, 1, 0.36, 1]` (easeOutExpo-ish) | Most transitions |
| `stagger.children` | 0.08s | List/grid item reveals |

**Animation principles (per your "modern, animated, interactive" brief):**
- Orchestrate the hero as one sequence on load (logo → headline → mockup), rather than everything fading in at once — one deliberate moment lands better than many small ones.
- Scroll-reveal sections once, don't re-trigger every time they re-enter viewport (feels jittery on scroll-up).
- Respect `prefers-reduced-motion` — disable non-essential animation for users who've set that OS preference.
- Keep hover micro-interactions under 200ms — anything slower feels laggy, not premium.

### 6.4 Signature element
Since you already build software dashboards for clients, the most authentic "wow" moment isn't a generic stock hero image — it's an **interactive, live-feeling product mockup** in the hero that responds to scroll or cursor movement (e.g., the dashboard numbers subtly animate, a chart line draws in on load). This directly demonstrates your own craft rather than decorating around it.

---

## 7. Content Checklist — what you need to gather before/during build

- [ ] Final logo files (SVG, transparent PNG, favicon set)
- [ ] Real project screenshots/mockups for 4–6 case studies minimum
- [ ] Case study write-ups (problem/approach/result) — even 2–3 for now, more later
- [ ] Team photos + short bios
- [ ] Testimonials (even 2–3 genuine ones outperform 10 generic ones)
- [ ] Client/partner logos (if any, for a trust strip)
- [ ] Final service descriptions (pricing model or "custom quote" — decide messaging)
- [ ] Contact details, social links, business address (for SEO schema)
- [ ] Domain name confirmed + DNS access for Vercel

---

## 8. SEO & Performance Requirements

- Server-render all public pages (Next.js App Router default) — no client-only rendering for indexable content.
- Unique `<title>` and meta description per page — done via an exported `metadata` object (or `generateMetadata()`) inside each `page.tsx`, no separate files needed for this part.
- Open Graph + Twitter card images for social sharing (especially case study pages).
- `next/image` for all images — automatic optimization/lazy-loading.
- Target Lighthouse scores: Performance 90+, Accessibility 95+, SEO 100.
- Structured data (JSON-LD) for Organization + BreadcrumbList at minimum.
- Sitemap.xml + robots.txt via Next.js built-in metadata routes.

---

## 9. Build Phases

| Phase | Scope |
|---|---|
| 1 | Home, About Us, Services, Contact Us — static content, core design system, core animations (this build) |
| 2 | Real content swap-in (case studies, testimonials, team photos) once gathered |
| 3 | Dedicated `/portfolio` page if project count grows past what fits on Home |
| 4 | Analytics, A/B testing CTAs, performance polish |

---

*This document is the single source of truth for design + build decisions. Update it as requirements change rather than letting the code and docs drift apart.*