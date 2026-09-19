# Local Development & Engineering Workflow

## Overview
This document outlines the standard development process for modifying, extending, testing, and maintaining the portfolio application.

---

## Step-by-Step Feature Implementation Workflow

### 1. Branch Management
Always create a clean, descriptive feature branch before implementing new functionality:
```bash
git checkout -b feature/add-project-modal
```

### 2. Updating Data or Config
- **Adding or editing personal information**: Modify `frontend/src/data/portfolio.ts` exclusively.
- **Adding backend environment variables**: Update `backend/.env.example` first, then add secrets to `backend/.env`.

### 3. Concurrent Local Development
Run both frontend and backend development servers concurrently:

#### Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

#### Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

### 4. Code Quality & Linting Verification
Before committing code, run type checks and linter rules across both projects:

```bash
# Frontend lint & type check
cd frontend
npm run lint
npm run build # Validates TypeScript types without errors

# Backend lint & type check
cd backend
npm run lint
npm run build
```

### 5. Running Automated Test Suites
Execute backend and frontend test suites to verify business logic integrity:

```bash
# Backend unit & integration tests
cd backend
npm test

# Frontend component & utility tests
cd frontend
npm test
```

### 6. Git Commit Conventions
Follow structured semantic commit messages:
- `feat(frontend): add interactive project filter pills`
- `fix(backend): resolve contact form rate limiting edge case`
- `docs(api): update contact endpoint response schema`

---

## Core Guidelines: Files NOT to Modify Unless Necessary

To preserve architectural stability and prevent runtime regressions, avoid modifying these core setup files unless explicitly upgrading core dependencies:

1. `frontend/vite.config.ts`: Modifying build plugins or server proxies can break asset resolution.
2. `frontend/src/styles/index.css`: Design system tokens and baseline CSS variable declarations.
3. `backend/src/middleware/error.middleware.ts`: Global error formatting engine.
4. `backend/src/config/db.ts`: Database connector boilerplate.
