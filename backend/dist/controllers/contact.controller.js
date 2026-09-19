"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleContactSubmission = void 0;
const contact_service_1 = require("../services/contact.service");
const handleContactSubmission = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;
        const result = await contact_service_1.ContactService.saveContactMessage({
            name,
            email,
            subject,
            message,
        });
        return res.status(201).json({
            success: true,
            message: 'Thank you! Your message has been received successfully. I will get back to you shortly.',
            data: result,
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.handleContactSubmission = handleContactSubmission;
