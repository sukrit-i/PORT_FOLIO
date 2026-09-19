# Frontend Development Guide

## Overview
The frontend is constructed with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons. It implements a custom design system meticulously matching the magazine/editorial visual aesthetic from the design reference.

---

## Design System & Theme Configuration

### Color Palette (Tailwind & CSS Variables)
Defined in `frontend/src/styles/index.css` and `frontend/tailwind.config.js`:

- **Primary Canvas / Background**: Off-white / Cream (`#F6F4EE` / `#FAF8F5`)
- **Primary Typography**: Dark Espresso Brown (`#231F20` / `#2A2421`)
- **Golden Accent**: Vibrant Sun Yellow (`#F0BE3C` / `#EBB832`)
- **Blue Accent**: Soft Editorial Blue (`#4B7897` / `#3B6989`)
- **Card Backgrounds**: Crisp Pure White (`#FFFFFF`) with subtle border lines (`#E5E0D8`)

### Typography Hierarchy
- **Display Oversized**: Custom high-impact condensed serif font for "PORTFOLIO" title banner (responsive, fluid scaling via `clamp()`).
- **Headings (H1/H2/H3)**: Bold sans-serif/serif editorial headings with uppercase letter-spacing.
- **Body & Captions**: Clean, high-legibility sans-serif (`Inter` / `Outfit` / `Plus Jakarta Sans`).

---

## Content Customization (`portfolio.ts`)

All portfolio content is stored centrally in:
`frontend/src/data/portfolio.ts`

### How to Add a New Project
Open `frontend/src/data/portfolio.ts` and append an object to the `projects` array:

```typescript
{
  id: "05",
  title: "NEW PROJECT TITLE",
  category: "Web Application",
  description: "Brief description of the solution and visual identity.",
  image: "https://images.unsplash.com/photo-...",
  tags: ["React", "TypeScript", "Tailwind"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://example.com"
}
```

### How to Modify Personal Bio or Stats
Modify the `personalInfo` object in `frontend/src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "MARINO VALERIE",
  title: "DESIGNING DIGITAL EXPERIENCES THAT CONNECT AND CONVERT.",
  location: "BALI, INDONESIA",
  availability: "AVAILABLE FOR FREELANCE",
  stats: [
    { label: "YEARS OF EXPERIENCE", value: "5+" },
    { label: "PROJECTS COMPLETED", value: "80+" },
    { label: "HAPPY CLIENTS", value: "40+" },
    { label: "INDUSTRIES SERVED", value: "10+" }
  ]
};
```

---

## How Component & API Integration Works

1. **Static Sections**: Sections such as `HeroSection`, `SkillsSection`, `ProcessSection` read directly from `portfolio.ts`.
2. **Contact Form (`ContactSection`)**:
   - Manages state via custom hook `useContactForm`.
   - Sends payload to `frontend/src/services/api.ts`.
   - `api.ts` dispatches a `POST` request to `http://localhost:5000/api/contact`.
   - Displays real-time validation, loading spinners, and success toast messages.

---

## Animation Rules (Framer Motion)
- **Hero Reveal**: Staggered text opacity and slide-up entrance on load.
- **Scroll Reveal**: Sections gently fade up using standard Framer Motion `whileInView` with `viewport={{ once: true }}`.
- **Card Hover**: Soft lift effect (`translateY(-4px)`), smooth scale-up on thumbnails, and subtle badge glows.
- **Accessibility**: All animations automatically respect `prefers-reduced-motion`.
