# Backend Development Guide

## Overview
The backend service is built with Node.js, Express, TypeScript, Mongoose (MongoDB ODM), Express Validator, CORS, Helmet, and Rate-Limiter middleware.

---

## Architectural Flow: Request to Response

```
Incoming Client Request (e.g. POST /api/contact)
       │
       ▼
[1] Express App (`server.ts`)
       │ (Applies Helmet, CORS, Body Parser, Rate Limiter)
       ▼
[2] Route Definition (`routes/contact.routes.ts`)
       │ (Runs input validation schema via Express Validator)
       ▼
[3] Controller (`controllers/contact.controller.ts`)
       │ (Extracts request body, checks validation errors)
       ▼
[4] Service (`services/contact.service.ts`)
       │ (Performs business logic & interacts with database/email transporter)
       ▼
[5] Model (`models/contact.model.ts`)
       │ (Interacts with MongoDB via Mongoose schema)
       ▼
[6] Database Execution (MongoDB)
       │
       ▼
[7] Controller JSON Response (`201 Created` / `400 Bad Request`)
```

---

## Detailed Directory Roles

### `backend/src/config/db.ts`
Establishes a connection to MongoDB using Mongoose. Connects to `MONGODB_URI` specified in environment variables and logs connection lifecycle events.

### `backend/src/routes/`
Defines API routes and maps them to controllers and validation middleware.
- Example: `contact.routes.ts` maps `POST /` to `validateContactInput`, `rateLimiter`, and `handleContactSubmission`.

### `backend/src/controllers/`
Encapsulates HTTP handling logic: parsing parameters, running validator checks, delegating to services, and returning formatted JSON responses.

### `backend/src/services/`
Contains reusable business logic.
- `contact.service.ts`: Handles document creation in MongoDB.
- `email.service.ts`: Abstracted provider interface for email alerts (console logger in dev mode, SMTP/Nodemailer/Resend provider interface for production).

### `backend/src/models/`
Mongoose schemas defining object structure, field validation, defaults, and timestamps in MongoDB collections.

### `backend/src/middleware/`
- `error.middleware.ts`: Intercepts unhandled errors, formats structured JSON responses, and hides stack traces in production.
- `rateLimiter.ts`: Prevents spamming on public endpoints.

---

## Environment Variable Setup
All secrets and environment configs reside in `backend/.env` (cloned from `backend/.env.example`):

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/portfolio_db
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_username
SMTP_PASS=your_password
EMAIL_FROM=noreply@example.com
EMAIL_TO=marino@example.com
```
