import { Request, Response, NextFunction } from 'express';
import { ContactService } from '../services/contact.service';

export const handleContactSubmission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const result = await ContactService.saveContactMessage({
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
  } catch (error) {
    return next(error);
  }
};
