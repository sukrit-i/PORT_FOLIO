import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { connectDB } from './config/db';
import contactRoutes from './routes/contact.routes';
import projectRoutes from './routes/project.routes';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Connect to MongoDB
connectDB();

// Security & Middleware
app.use(helmet());
app.use(
  cors({
    origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Portfolio API Server is running smoothly',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected/fallback',
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Listener
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`[Express] Backend API Server running on port ${PORT}`);
  console.log(`[Express] Client Allowed Origin: ${CLIENT_URL}`);
  console.log(`[Express] Health Check: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});

export default app;
