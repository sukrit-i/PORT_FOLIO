"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.contactValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.contactValidationRules = [
    (0, express_validator_1.body)('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
    (0, express_validator_1.body)('email')
        .trim()
        .notEmpty().withMessage('Email address is required')
        .isEmail().withMessage('Please provide a valid email address'),
    (0, express_validator_1.body)('subject')
        .trim()
        .notEmpty().withMessage('Subject is required')
        .isLength({ min: 3, max: 150 }).withMessage('Subject must be between 3 and 150 characters'),
    (0, express_validator_1.body)('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters'),
];
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = errors.array().map((err) => ({
        field: err.path || err.param,
        message: err.msg,
    }));
    return res.status(400).json({
        success: false,
        error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request payload attributes',
            details: extractedErrors,
        },
    });
};
exports.validate = validate;
