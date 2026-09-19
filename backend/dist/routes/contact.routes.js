"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const validate_middleware_1 = require("../middleware/validate.middleware");
const rateLimiter_1 = require("../middleware/rateLimiter");
const router = (0, express_1.Router)();
// POST /api/contact
router.post('/', rateLimiter_1.contactRateLimiter, validate_middleware_1.contactValidationRules, validate_middleware_1.validate, contact_controller_1.handleContactSubmission);
exports.default = router;
