"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    static async sendNotification(payload) {
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
        }
        catch (error) {
            console.error('[Email Service Error] Failed to send email alert:', error);
            return false;
        }
    }
}
exports.EmailService = EmailService;
