import nodemailer from "nodemailer";
import { type Contact } from "@shared/schema";

// Create a transporter using environment variables
// If these are not set, the notification will be logged to the console
const transporter = process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })
    : null;

export async function sendContactNotification(contact: Contact) {
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "amutha.licdocbe@gmail.com";

    const mailOptions = {
        from: `"Arivamudham Website" <${process.env.SMTP_USER || "noreply@arivamudham.com"}>`,
        to: recipientEmail,
        subject: `New Contact Form Submission from ${contact.name}`,
        text: `
      You have a new contact form submission:
      
      Name: ${contact.name}
      Email: ${contact.email}
      Phone: ${contact.phone}
      Message: ${contact.message}
    `,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${contact.message.replace(/\n/g, "<br>")}</p>
    `,
    };

    if (transporter) {
        try {
            await transporter.sendMail(mailOptions);
            console.log(`Notification email sent to ${recipientEmail}`);
            return true;
        } catch (error) {
            console.error("Failed to send notification email:", error);
            return false;
        }
    } else {
        console.log("SMTP credentials not configured. Notification details:");
        console.log(mailOptions.text);
        return false;
    }
}
