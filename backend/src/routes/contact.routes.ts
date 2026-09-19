import { Router } from 'express';
import { handleContactSubmission } from '../controllers/contact.controller';
import { contactValidationRules, validate } from '../middleware/validate.middleware';
import { contactRateLimiter } from '../middleware/rateLimiter';

const router = Router();

// POST /api/contact
router.post('/', contactRateLimiter, contactValidationRules, validate, handleContactSubmission);

export default router;
