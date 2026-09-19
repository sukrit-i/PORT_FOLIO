# Editorial Personal Portfolio Website

A production-grade, magazine/editorial style personal portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express**, and **MongoDB**.

Inspired by premium editorial design systems featuring oversized typography, warm cream and off-black palettes, golden accents, soft blue section blocks, asymmetric grid compositions, and responsive micro-interactions.

---

## Visual Reference & Screenshots
> Placeholder for visual screenshots comparing desktop, tablet, and mobile layouts.

---

## Features
- **Editorial Design System**: Custom typography scale, warm off-white canvas, golden/blue accent highlights, rounded cards, and decorative badges.
- **Oversized Display Typography**: Impactful responsive "PORTFOLIO" headline banner.
- **Hero & Profile Showcase**: Asymmetric hero layout with bio card, profile frame, floating badges ("THINK BRIGHT", "CREATIVE WITH PURPOSE"), and quick stats counter bar.
- **Selected Works Showcase**: Grid of project cards with thumbnail hover effects, category tags, interactive action buttons (GitHub & Live Demo), and responsive layout.
- **Design Tools & 5-Step Process**: Split layout highlighting design tool capabilities (Figma, Photoshop, Illustrator, Webflow, After Effects) and an interactive 5-step workflow (Discover -> Define -> Design -> Develop -> Deliver).
- **Client Testimonials**: Dynamic feedback grid with avatars, ratings, and quotes.
- **Interactive Contact Form & CTA**: Real-time form connected to Express API with rate limiting, input validation, and MongoDB submission logging.
- **Decoupled Architecture**: Strict separation of concerns between React frontend and Express backend.
- **Comprehensive Documentation Suite**: Complete documentation for maintenance, API testing, database setup, and frontend/backend customization.

---

## Tech Stack

### Frontend
- **Framework**: React 18 with Vite & TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js + Express with TypeScript
- **Database**: MongoDB (via Mongoose ODM)
- **Validation**: Express Validator
- **Security & Utilities**: Helmet, CORS, Express Rate Limit

---

## Project Folder Structure

```
portfolio/
├── frontend/                     # React Vite TypeScript frontend
│   ├── src/
│   │   ├── components/           # Modular section components
│   │   ├── data/                 # Centralized portfolio dataset (portfolio.ts)
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API HTTP client layer
│   │   ├── styles/               # Design system & Tailwind rules
│   │   └── types/                # TypeScript interfaces
├── backend/                      # Node.js Express TypeScript backend
│   ├── src/
│   │   ├── config/               # Database connection
│   │   ├── controllers/          # API route handler logic
│   │   ├── middleware/           # Input validation & error handlers
│   │   ├── models/               # Mongoose schema definitions
│   │   ├── routes/               # Express endpoint routes
│   │   └── services/             # Email & database service logic
├── docs/                         # Detailed project guides
└── README.md
```

---

## Installation & Environment Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (running locally or MongoDB Atlas connection string)

### 1. Clone & Setup Frontend
```bash
cd frontend
npm install
```

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
```
Edit `backend/.env` with your MongoDB URI and port configuration.

---

## Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
# Server running at http://localhost:5000
```

### Start Frontend Server
```bash
cd frontend
npm run dev
# Application running at http://localhost:5173
```

---

## API Overview
- `GET /api/health` - Server & database health check
- `POST /api/contact` - Submits contact form inquiries with validation & rate limiting
- `GET /api/projects` - Fetches dynamic project catalog (optional backend override)
- `GET /api/testimonials` - Fetches dynamic testimonials (optional backend override)

*For full API request/response specifications, see [docs/API_DOCUMENTATION.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/API_DOCUMENTATION.md)*.

---

## Documentation Index
- [ARCHITECTURE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/ARCHITECTURE.md) - System design & decoupling
- [PROJECT_STRUCTURE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/PROJECT_STRUCTURE.md) - Detailed file tree & dependency flow
- [FRONTEND_GUIDE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/FRONTEND_GUIDE.md) - React component customization & data editing
- [BACKEND_GUIDE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/BACKEND_GUIDE.md) - Express controllers, services & middleware
- [DATABASE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/DATABASE.md) - MongoDB schemas, indexes & connection strings
- [DEBUGGING_GUIDE.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/DEBUGGING_GUIDE.md) - Comprehensive troubleshooting table
- [DEVELOPMENT_WORKFLOW.md](file:///c:/Users/Sukriti%20Sonam/OneDrive/Desktop/Portfolio/docs/DEVELOPMENT_WORKFLOW.md) - Branching, testing & deployment rules
