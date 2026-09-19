# Debugging & Troubleshooting Guide

## Overview
This document provides a step-by-step diagnostic guide for testing, inspecting, and resolving issues across both the React frontend and Node/Express backend.

---

## Quick-Start Services Check

### 1. Start Frontend
```bash
cd frontend
npm run dev
# Running on http://localhost:5173
```

### 2. Start Backend
```bash
cd backend
npm run dev
# Running on http://localhost:5000
```

---

## Systematic Diagnostics Checklist

### 1. Environment Variables Configuration Check
- Ensure `backend/.env` exists and contains valid key-value pairs (compare against `backend/.env.example`).
- If changing `.env`, restart the backend development server (`npm run dev`). Node environment variables are loaded at startup.

### 2. MongoDB Connection Troubleshooting
- Verify MongoDB daemon status: `mongod --version` or inspect MongoDB service.
- If using MongoDB Atlas, test connection string via Mongo Shell / Compass.
- Check backend console logs on startup. Look for `MongoDB Connected Successfully`.

### 3. Debugging CORS (Cross-Origin Resource Sharing) Errors
- **Symptom**: Browser console outputs `Access to XMLHttpRequest at 'http://localhost:5000/api/contact' from origin 'http://localhost:5173' has been blocked by CORS policy`.
- **Where to Look**: `backend/src/server.ts` or `backend/src/config/cors.ts`.
- **Fix**: Ensure `CLIENT_URL` in `backend/.env` matches the exact frontend URL (including port `http://localhost:5173`).

### 4. Inspecting API Requests in Browser DevTools
- Open Chrome DevTools (`F12` or `Ctrl+Shift+I`).
- Go to the **Network** tab -> Filter by `Fetch/XHR`.
- Submit the Contact Form.
- Inspect the payload under the **Payload** sub-tab and the server JSON output under **Response**.

---

## Master Troubleshooting Table

| Problem | Where to Look | Likely Cause | How to Fix |
| :--- | :--- | :--- | :--- |
| **Frontend fails to compile** | Frontend terminal output | Missing NPM packages or TS type mismatch | Run `npm install` inside `frontend/`. Check TypeScript error output in terminal. |
| **Contact form submit hangs indefinitely** | Browser Network Tab & Backend logs | Backend server is not running or CORS blocked | Ensure backend is running (`npm run dev` in `backend/`). Verify `VITE_API_URL` in frontend. |
| **`400 Bad Request` on contact form submission** | Network Tab -> Response Payload | Validation failure (e.g. invalid email or short message) | Ensure form fields satisfy validation limits (email format, message >= 10 chars). |
| **`500 Internal Server Error` on API** | Backend console logs | MongoDB disconnected or email transporter error | Verify MongoDB service is running (`mongod`). Check `MONGODB_URI` in `backend/.env`. |
| **Images or icons fail to display** | Browser Console / Network Tab | Invalid asset path or missing Lucide icon import | Check image paths in `portfolio.ts` or imports in component files. |
| **Animations look glitchy or jumpy** | Component file (`Framer Motion`) | Layout shift or unconstrained width | Wrap animated components in `overflow-hidden` containers and set fixed/responsive heights. |
| **Font styles not applying** | `frontend/src/styles/index.css` | Google Fonts CSS import link missing or Tailwind layer uncompiled | Verify font `@import` links in `index.css` and font family utility classes in `tailwind.config.js`. |
