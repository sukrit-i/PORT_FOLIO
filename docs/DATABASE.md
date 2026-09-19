# Database Documentation

## Overview
The application utilizes **MongoDB** as its primary NoSQL database, interfaced via **Mongoose ODM** in the Express backend.

---

## Database Schema & Collections

### 1. `contacts` Collection
Stores user submissions submitted through the contact form.

#### Mongoose Schema Definition:
```typescript
import { Schema, model, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'archived' | 'replied';
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    status: { 
      type: String, 
      enum: ['unread', 'read', 'archived', 'replied'], 
      default: 'unread' 
    },
    ipAddress: { type: String, select: false }
  },
  { timestamps: true }
);

// Indexes
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

export const ContactModel = model<IContact>('Contact', ContactSchema);
```

---

### 2. `projects` Collection (Optional Dynamic Collection)
Stores project details if dynamic database fetching is enabled.

#### Schema Fields:
- `title` (String, required)
- `slug` (String, required, unique)
- `category` (String, required)
- `description` (String, required)
- `image` (String, required)
- `tags` (Array of Strings)
- `featured` (Boolean, default: false)
- `githubUrl` (String)
- `liveUrl` (String)
- `order` (Number, default: 0)
- `timestamps` (createdAt, updatedAt)

---

### 3. `testimonials` Collection (Optional Dynamic Collection)
Stores client feedback.

#### Schema Fields:
- `author` (String, required)
- `role` (String, required)
- `quote` (String, required)
- `avatar` (String)
- `rating` (Number, min: 1, max: 5, default: 5)
- `order` (Number, default: 0)

---

## Connection Setup

### Local MongoDB Instance
Ensure MongoDB Community Server is installed and running locally:
```bash
# Windows MongoDB Service
net start MongoDB
```

Set environment variable in `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio_db
```

### MongoDB Atlas (Cloud Cluster)
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Database Access: Create a user with Read & Write privileges.
3. Network Access: Whitelist your IP (or `0.0.0.0/0` for development).
4. Update `MONGODB_URI` in `backend/.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/portfolio_db?retryWrites=true&w=majority
```
