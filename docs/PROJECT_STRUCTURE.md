# Comprehensive Project Directory & Dependency Structure

## Overview
This document outlines the entire file tree for both `frontend/` and `backend/`, explicitly mapping the role of each directory, component, service, and utility file alongside their dependency flow.

```
portfolio/
│
├── frontend/                     # React + Vite + TypeScript Frontend Application
│   ├── public/                   # Static assets (favicons, fonts, images)
│   ├── src/
│   │   ├── assets/               # Local graphical assets & illustrations
│   │   ├── components/           # Reusable UI components by section
│   │   │   ├── common/           # Shared UI elements (Buttons, Badges, Cards, Tags)
│   │   │   ├── layout/           # Header, Navigation, Footer, Container Layouts
│   │   │   ├── hero/             # Hero typography banner, profile frame, quick stats
│   │   │   ├── projects/         # Selected Works grid & individual Project Cards
│   │   │   ├── skills/           # Design tools & technical skills grid
│   │   │   ├── process/          # 5-Step process roadmap (Discover -> Deliver)
│   │   │   ├── testimonials/     # Client feedback carousel / grid
│   │   │   └── contact/          # Interactive Contact form & CTA blocks
│   │   ├── data/                 # Centralized portfolio dataset
│   │   │   └── portfolio.ts      # Primary data source for bio, skills, projects, experience
│   │   ├── hooks/                # Custom React hooks (e.g. useContactForm, useScrollReveal)
│   │   ├── services/             # API HTTP client layer (Axios / Fetch)
│   │   │   └── api.ts            # Centralized API service for contact form submission
│   │   ├── styles/               # Global CSS & Tailwind custom design system
│   │   │   └── index.css         # Theme variables, typography rules, color tokens
│   │   ├── types/                # Shared TypeScript interfaces & types
│   │   │   └── index.ts          # Portfolio, Project, Testimonial, Contact form types
│   │   ├── utils/                # Utility helpers (classnames, animation variants)
│   │   ├── App.tsx               # Root component rendering header, main sections, footer
│   │   └── main.tsx              # Application entry point
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js        # Design system tokens (Cream, Off-black, Gold, Blue)
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/                      # Node.js + Express + TypeScript Backend API
│   ├── src/
│   │   ├── config/               # Environment & database connection setup
│   │   │   └── db.ts             # MongoDB Mongoose connector
│   │   ├── controllers/          # Express route handler business logic
│   │   │   ├── contact.controller.ts  # Handles contact form payload validation & dispatch
│   │   │   ├── project.controller.ts  # Handles optional dynamic project API requests
│   │   │   └── testimonial.controller.ts # Handles testimonial fetch API
│   │   ├── middleware/           # Express middleware handlers
│   │   │   ├── error.middleware.ts    # Global structured error handler
│   │   │   ├── rateLimiter.ts         # Contact form anti-spam rate limiter
│   │   │   └── validate.middleware.ts # Input validation error extractor
│   │   ├── models/               # Mongoose database models & schemas
│   │   │   ├── contact.model.ts       # Contact message schema
│   │   │   ├── project.model.ts       # Project schema
│   │   │   └── testimonial.model.ts   # Testimonial schema
│   │   ├── routes/               # Express endpoint definitions
│   │   │   ├── contact.routes.ts      # /api/contact endpoints
│   │   │   ├── project.routes.ts      # /api/projects endpoints
│   │   │   └── testimonial.routes.ts  # /api/testimonials endpoints
│   │   ├── services/             # Low-level service implementations
│   │   │   ├── email.service.ts       # Transporter abstraction for sending email alerts
│   │   │   └── contact.service.ts     # Database persistence service
│   │   ├── types/                # Backend TypeScript types
│   │   ├── utils/                # Backend helper utilities (logger, response formatters)
│   │   └── server.ts             # Express application bootstrapping & listener
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                         # Full project documentation suite
│   ├── ARCHITECTURE.md           # High-level architecture & decoupling
│   ├── PROJECT_STRUCTURE.md      # File-by-file detail & dependency flow
│   ├── API_DOCUMENTATION.md      # API spec, payloads, responses, status codes
│   ├── FRONTEND_GUIDE.md         # React + Tailwind design system setup & customization
│   ├── BACKEND_GUIDE.md          # Express routes, controllers, models guide
│   ├── DATABASE.md               # MongoDB schemas, connections, indexes
│   ├── DEBUGGING_GUIDE.md        # Troubleshooting & debugging checklist
│   └── DEVELOPMENT_WORKFLOW.md   # Step-by-step local development workflow
│
├── .gitignore
└── README.md                     # Main entry guide
```

---

## Detailed Component Breakdown

### Frontend Components

#### `frontend/src/data/portfolio.ts`
- **Purpose**: Acts as the single source of truth for all personal content (Name, Title, Bio, Stats, Projects, Tools, Process Steps, Testimonials, Contact Info, Social Links).
- **Receives**: Static data constants.
- **Renders**: Pure data exports.
- **Depends On**: `frontend/src/types/index.ts`.
- **Common Modifications**: Update text, replace project items, modify stats numbers, edit skills list.

#### `frontend/src/components/common/Header.tsx`
- **Purpose**: Editorial navigation top bar with brand mark, decorative sun icon, tagline ("LET'S CREATE SOMETHING BRIGHT"), and smooth jump links.
- **Receives**: Navigation items from `portfolio.ts`.
- **Renders**: Sticky editorial header, mobile drawer toggle, call to action link.
- **Depends On**: `frontend/src/data/portfolio.ts`, Lucide icons.

#### `frontend/src/components/hero/HeroSection.tsx`
- **Purpose**: Primary visual hero area capturing the exact reference style.
- **Receives**: Hero details from `portfolio.ts`.
- **Renders**:
  - Oversized condensed display header ("PORTFOLIO")
  - Tag pills ("UI/UX • BRANDING • WEB DESIGN")
  - Asymmetric two-column container: Left bio card with badges ("HELLO, I'M...", "AVAILABLE FOR FREELANCE"), Right frame with profile image and floating stamps ("THINK BRIGHT ☼", "CREATIVE WITH PURPOSE 😊")
  - Dark brown stats bar (Years of Experience, Completed Projects, Happy Clients, Industries Served).
- **Depends On**: `frontend/src/data/portfolio.ts`, Framer Motion.

#### `frontend/src/components/projects/ProjectsSection.tsx`
- **Purpose**: Container for "SELECTED WORKS" section with header badge and grid layout.
- **Receives**: Project items list from `portfolio.ts` or API fetch fallback.
- **Renders**: Section header banner with golden accent, grid of `ProjectCard` components.
- **Depends On**: `ProjectCard.tsx`, `frontend/src/data/portfolio.ts`.

#### `frontend/src/components/projects/ProjectCard.tsx`
- **Purpose**: Individual project presentation card matching reference layout.
- **Receives**: `project` object (title, category, image, description, tags, githubUrl, liveUrl, number index).
- **Renders**: Card with image mockup hover effect, index pill (01, 02...), title, category, tech stack tags, interactive action buttons.
- **Depends On**: `frontend/src/types/index.ts`, Lucide icons.

#### `frontend/src/components/skills/SkillsSection.tsx`
- **Purpose**: Visual presentation of design tools and core technical proficiencies.
- **Receives**: Tools list from `portfolio.ts`.
- **Renders**: Split container with blue accent backdrop, icon badges for Figma, Photoshop, Illustrator, Webflow, After Effects, React, Tailwind, Node.js, and decorative sun rays graphic.
- **Depends On**: `portfolio.ts`.

#### `frontend/src/components/process/ProcessSection.tsx`
- **Purpose**: Editorial 5-step process walkthrough (Discover, Define, Design, Develop, Deliver).
- **Receives**: Process steps list from `portfolio.ts`.
- **Renders**: Dark brown rounded panel with numbered circular step indicators connected by subtle flow lines and descriptive captions.
- **Depends On**: `portfolio.ts`.

#### `frontend/src/components/testimonials/TestimonialsSection.tsx`
- **Purpose**: Showcase client reviews and feedback.
- **Receives**: Testimonial list from `portfolio.ts` (or backend API).
- **Renders**: Grid of white quote cards with avatar images, reviewer names, titles, star ratings, and subtle quote graphics.
- **Depends On**: `portfolio.ts`.

#### `frontend/src/components/contact/ContactSection.tsx`
- **Purpose**: Dual-card CTA and contact interaction container.
- **Receives**: Contact info from `portfolio.ts`, submit handler from `useContactForm`.
- **Renders**:
  - Left card: Golden yellow background with ray graphics ("LET'S BUILD SOMETHING AMAZING", Discovery call CTA, availability badge).
  - Right card: Blue background with contact items (email, website, social handles, location) and real interactive contact form modal/inline form with validation feedback.
- **Depends On**: `frontend/src/services/api.ts`, `frontend/src/hooks/useContactForm.ts`.

---

## Dependency Flow Map

```
portfolio.ts (Central Data)
    │
    ├──► HeroSection.tsx ──► Header / StatsBar
    │
    ├──► ProjectsSection.tsx ──► ProjectCard.tsx
    │
    ├──► SkillsSection.tsx
    │
    ├──► ProcessSection.tsx
    │
    ├──► TestimonialsSection.tsx ──► TestimonialCard.tsx
    │
    └──► ContactSection.tsx ──► api.ts ──► [POST /api/contact] ──► Express Backend
```
