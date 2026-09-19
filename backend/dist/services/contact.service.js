"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_model_1 = require("../models/contact.model");
const email_service_1 = require("./email.service");
const mongoose_1 = __importDefault(require("mongoose"));
// In-memory fallback store if MongoDB is not connected
const memoryStore = [];
class ContactService {
    static async saveContactMessage(data) {
        let savedEntry;
        if (mongoose_1.default.connection.readyState === 1) {
            const contactDoc = new contact_model_1.ContactModel(data);
            const result = await contactDoc.save();
            savedEntry = { id: result._id.toString(), createdAt: result.createdAt };
        }
        else {
            // In-memory fallback
            const fallbackId = `mem_${Date.now()}`;
            const createdAt = new Date();
            memoryStore.push({ _id: fallbackId, createdAt, ...data });
            savedEntry = { id: fallbackId, createdAt };
            console.log(`[ContactService] Saved to fallback memory store (${memoryStore.length} total)`);
        }
        // Trigger asynchronous email alert
        email_service_1.EmailService.sendNotification({
            to: process.env.EMAIL_TO || 'marino@example.com',
            from: process.env.EMAIL_FROM || 'noreply@example.com',
            subject: `New Portfolio Inquiry: ${data.subject}`,
            text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
        });
        return savedEntry;
    }
}
exports.ContactService = ContactService;
