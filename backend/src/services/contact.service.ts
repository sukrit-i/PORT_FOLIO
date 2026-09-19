import { ContactModel, IContact } from '../models/contact.model';
import { EmailService } from './email.service';
import mongoose from 'mongoose';

export interface CreateContactDTO {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// In-memory fallback store if MongoDB is not connected
const memoryStore: Array<CreateContactDTO & { _id: string; createdAt: Date }> = [];

export class ContactService {
  public static async saveContactMessage(data: CreateContactDTO) {
    let savedEntry: { id: string; createdAt: Date };

    if (mongoose.connection.readyState === 1) {
      const contactDoc = new ContactModel(data);
      const result = await contactDoc.save();
      savedEntry = { id: result._id.toString(), createdAt: result.createdAt };
    } else {
      // In-memory fallback
      const fallbackId = `mem_${Date.now()}`;
      const createdAt = new Date();
      memoryStore.push({ _id: fallbackId, createdAt, ...data });
      savedEntry = { id: fallbackId, createdAt };
      console.log(`[ContactService] Saved to fallback memory store (${memoryStore.length} total)`);
    }

    // Trigger asynchronous email alert
    EmailService.sendNotification({
      to: process.env.EMAIL_TO || 'marino@example.com',
      from: process.env.EMAIL_FROM || 'noreply@example.com',
      subject: `New Portfolio Inquiry: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    });

    return savedEntry;
  }
}
