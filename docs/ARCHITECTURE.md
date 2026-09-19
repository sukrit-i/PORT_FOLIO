# System Architecture Documentation

## Overview
This portfolio is built as a high-performance, modular full-stack application following strict separation of concerns between the React frontend and Node.js/Express backend with MongoDB database integration.

```
+-----------------------------------------------------------------------+
|                            BROWSER (CLIENT)                           |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                 React + TypeScript + Vite                      |   |
|   |                                                               |   |
|   |  - Static Portfolio Data (frontend/src/data/portfolio.ts)      |   |
|   |  - Editorial Visual System (Tailwind CSS + Custom Variables)  |   |
|   |  - Framer Motion Micro-Interactions                           |   |
|   |  - Reusable Modular Component Architecture                   |   |
|   |  - Form handling & Validation (Axios / Fetch)                 |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------||----------------------------------+
                                    || HTTP REST API
                                    \/
+-----------------------------------------------------------------------+
|                          EXPRESS SERVER (BACKEND)                     |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | Router (routes/contact.routes.ts, routes/project.routes.ts)   |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   
|                                   \/                                  
|   +---------------------------------------------------------------+   |
|   | Controller (controllers/contact.controller.ts, etc.)           |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   
|                                   \/                                  
|   +---------------------------------------------------------------+   |
|   | Service (services/email.service.ts, services/db.service.ts)   |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   
|                                   \/                                  
|   +---------------------------------------------------------------+   |
|   | Model (models/contact.model.ts, models/testimonial.model.ts)  |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------||----------------------------------+
                                    || Mongoose ODM
                                    \/
+-----------------------------------------------------------------------+
|                           MONGODB DATABASE                            |
|                                                                       |
|   - ContactSubmissions Collection                                    |
|   - Projects Collection (Optional dynamic override)                   |
|   - Testimonials Collection (Optional dynamic override)               |
+-----------------------------------------------------------------------+
```

## Architectural Decoupling & Rationale

### Why Frontend & Backend are Separated
1. **Security**: Sensitive MongoDB connection URIs, API keys, and SMTP server credentials reside exclusively in the backend runtime environment (`backend/.env`).
2. **Independent Scaling & Deployment**: The frontend bundle can be served over CDN edges (Vercel, Netlify, Cloudflare Pages), while the Express server runs on Node environments (Render, Railway, AWS ECS).
3. **Data Responsibility**:
   - **Static Content**: Core personal bio, skills list, process workflow, and baseline projects are bundled in `frontend/src/data/portfolio.ts` for instant zero-latency loading.
   - **Dynamic Content & Form Submissions**: Contact form inquiries, live messaging, rate-limiting tracking, and optional backend-driven testimonials/projects rely on the Node.js API and MongoDB database.

## System Components
1. **Frontend**: React 18+, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React.
2. **Backend**: Node.js, Express, TypeScript, Mongoose, Express Validator, Helmet, CORS, Rate Limiters.
3. **Database**: MongoDB (Local or Atlas) managed via Mongoose schemas.
