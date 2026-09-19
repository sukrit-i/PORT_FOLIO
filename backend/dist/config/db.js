"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db';
    try {
        const conn = await mongoose_1.default.connect(mongoURI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`[MongoDB] Database Connected Successfully: ${conn.connection.host}`);
    }
    catch (error) {
        console.warn(`[MongoDB Warning] Could not connect to MongoDB instance: ${error.message}`);
        console.warn(`[MongoDB Warning] Operating in in-memory / static mode fallback.`);
    }
};
exports.connectDB = connectDB;
