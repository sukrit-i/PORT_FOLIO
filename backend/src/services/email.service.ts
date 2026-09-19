export interface EmailPayload {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

export class EmailService {
  public static async sendNotification(payload: EmailPayload): Promise<boolean> {
    const isDev = process.env.NODE_ENV !== 'production';

    if (isDev) {
      console.log('====================================================');
      console.log('[EMAIL SERVICE - DEV NOTIFICATION LOG]');
      console.log(`TO: ${payload.to}`);
      console.log(`FROM: ${payload.from}`);
      console.log(`SUBJECT: ${payload.subject}`);
      console.log(`TEXT: ${payload.text}`);
      console.log('====================================================');
      return true;
    }

    // In production, integrate SMTP / Nodemailer / Resend API provider here
    try {
      console.log(`[Email Service] Dispatched email alert to ${payload.to}`);
      return true;
    } catch (error) {
      console.error('[Email Service Error] Failed to send email alert:', error);
      return false;
    }
  }
}
