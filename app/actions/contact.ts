"use server";

import { BrevoClient } from "@getbrevo/brevo";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return { success: false, error: "Invalid form data provided." };
    }

    const { name, email, message } = validatedData.data;

    const apiKey = process.env.BREVO_API_KEY;
    const receiverEmail = process.env.NOTIFICATION_RECEIVER;
    const senderEmail = process.env.SENDER_EMAIL;

    if (!apiKey || !receiverEmail || !senderEmail) {
      console.error("Missing Brevo environment variables");
      return { success: false, error: "Server configuration error." };
    }

    const brevo = new BrevoClient({ apiKey });

    await brevo.transactionalEmails.sendTransacEmail({
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FCFC; color: #071A20; line-height: 1.6; margin: 0; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(15, 157, 149, 0.05), 0 1px 3px rgba(0,0,0,0.05); border: 1px solid rgba(15, 157, 149, 0.15);">
          
          <!-- Header -->
          <div style="background-color: #0F9D95; padding: 32px 40px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Inquiry</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 15px;">You have a new message from the Synchro Solutions website.</p>
          </div>
          
          <!-- Body -->
          <div style="padding: 40px;">
            <div style="margin-bottom: 24px;">
              <p style="margin: 0 0 4px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #527078; font-weight: 600;">Contact Details</p>
              <p style="margin: 0 0 8px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1677C8; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid rgba(15, 157, 149, 0.15);">
              <p style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #527078; font-weight: 600;">Message</p>
              <div style="background-color: #F3F9FB; padding: 24px; border-radius: 8px; font-size: 15px; color: #071A20; border-left: 4px solid #0F9D95;">
                <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #F8FCFC; padding: 24px; text-align: center; border-top: 1px solid rgba(15, 157, 149, 0.1);">
            <p style="margin: 0; font-size: 13px; color: #527078;">
              This email was generated automatically by the Synchro Solutions Contact Form.
            </p>
          </div>
          
        </div>
      </body>
      </html>
    `,
      sender: { name: "Synchro Solutions Website", email: senderEmail },
      to: [{ email: receiverEmail }],
      replyTo: { email: email, name: name }
    });

    return { success: true, error: null };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
