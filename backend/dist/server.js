"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./config/db");
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
// Connect to MongoDB
(0, db_1.connectDB)();
// Security & Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Portfolio API Server is running smoothly',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
        database: mongoose_1.default.connection.readyState === 1 ? 'connected' : 'disconnected/fallback',
    });
});
// API Routes
app.use('/api/contact', contact_routes_1.default);
app.use('/api/projects', project_routes_1.default);
// Error Handling Middleware
app.use(error_middleware_1.notFoundHandler);
app.use(error_middleware_1.errorHandler);
// Start Listener
app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`[Express] Backend API Server running on port ${PORT}`);
    console.log(`[Express] Client Allowed Origin: ${CLIENT_URL}`);
    console.log(`[Express] Health Check: http://localhost:${PORT}/api/health`);
    console.log(`====================================================`);
});
exports.default = app;
