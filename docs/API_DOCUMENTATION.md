# API Documentation

## Overview
Base URL: `http://localhost:5000/api` (configurable via environment variables). All responses adhere to standard JSON formats with standardized HTTP status codes.

---

## Health & Status Endpoint

### `GET /api/health`
- **Purpose**: Server health check and database connection status verification.
- **Query Parameters**: None
- **Headers**: None
- **Response**: `200 OK`
```json
{
  "status": "success",
  "message": "Portfolio API Server is running smoothly",
  "environment": "development",
  "timestamp": "2026-09-19T18:05:00.000Z",
  "database": "connected"
}
```

---

## Contact Form Endpoint

### `POST /api/contact`
- **Purpose**: Receives inquiries submitted via the frontend contact form, performs validation/sanitization, stores the entry in MongoDB, and triggers an email alert service.
- **Rate Limit**: Maximum 5 submissions per IP per 15-minute window.
- **Request Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Website Redesign Project Inquiry",
  "message": "Hello, I loved your portfolio and would like to discuss a custom web design project for Q4."
}
```

#### Validation Rules:
- `name`: String, required, 2-100 characters, trimmed.
- `email`: String, required, valid email format, trimmed.
- `subject`: String, required, 3-150 characters, trimmed.
- `message`: String, required, 10-2000 characters, trimmed.

#### Success Response (`201 Created`):
```json
{
  "success": true,
  "message": "Thank you! Your message has been received successfully. I will get back to you shortly.",
  "data": {
    "id": "66f38a19b84e123456789abc",
    "createdAt": "2026-09-19T18:05:00.000Z"
  }
}
```

#### Error Responses:

- `400 Bad Request` (Validation Failure):
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request payload attributes",
    "details": [
      {
        "field": "email",
        "message": "Please provide a valid email address"
      },
      {
        "field": "message",
        "message": "Message must be at least 10 characters long"
      }
    ]
  }
}
```

- `429 Too Many Requests` (Rate Limit Exceeded):
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many message submissions from this IP. Please try again after 15 minutes."
  }
}
```

- `500 Internal Server Error`:
```json
{
  "success": false,
  "error": {
    "code": "SERVER_ERROR",
    "message": "An unexpected error occurred while processing your request."
  }
}
```

---

## Projects Endpoint (Optional Backend Dynamic Fetching)

### `GET /api/projects`
- **Purpose**: Fetches the list of featured portfolio projects from MongoDB (or falls back to static dataset).
- **Query Parameters**:
  - `featured` (optional, boolean): Filter only featured items (`?featured=true`).
  - `category` (optional, string): Filter by category (`?category=UI/UX`).
- **Response**: `200 OK`
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": "1",
      "slug": "brandzen-studio",
      "title": "BRANDZEN STUDIO",
      "category": "Brand Identity & Website",
      "description": "Comprehensive branding system and responsive web platform for a creative agency.",
      "image": "/assets/projects/brandzen.jpg",
      "tags": ["Figma", "React", "Tailwind CSS"],
      "featured": true,
      "githubUrl": "https://github.com/example/brandzen",
      "liveUrl": "https://brandzen.example.com",
      "order": 1
    }
  ]
}
```

---

## Testimonials Endpoint (Optional Backend Dynamic Fetching)

### `GET /api/testimonials`
- **Purpose**: Fetches client feedback testimonials.
- **Response**: `200 OK`
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": "1",
      "quote": "Working with Marino was an absolute pleasure. The designs were not only stunning but also effective.",
      "author": "JAMES LEE",
      "role": "CEO, BrandZen Studio",
      "avatar": "/assets/testimonials/james.jpg",
      "rating": 5
    }
  ]
}
```
