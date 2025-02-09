'use server'

// LIBRARIES
import { Resend } from 'resend';

// SCHEMA
import { contactFormSchema } from '@/zod/contactFormSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactInformation(formData: FormData) {
    try {
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        const validationResult = contactFormSchema.safeParse(data);

        if (!validationResult.success) {
            return { success: false, message: "Bad request!" };
        }

        const { name, email, message } = validationResult.data;

        await resend.emails.send({
            from: 'Vocal Aura <noreply@vocalaura.com>',
            to: ['info@vocalaura.com'],
            subject: `Vocalaura - New Contact Form from ${name}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email (Send back to this email):</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return { success: true, message: "Contact form sent successfully!" };
    } catch {
        return { success: false, message: "Contact form failed to send!" };
    }
}