import nodemailer from "nodemailer";

// Email Service
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendEmailNotification(to: string, name: string) {
    console.log(`Attempting to send user notification email to: ${to}`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("CRITICAL: Email credentials missing in environment variables!");
        console.log("EMAIL_USER present:", !!process.env.EMAIL_USER);
        console.log("EMAIL_PASS present:", !!process.env.EMAIL_PASS);
        return;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: "Registration Successful - LIC Career Advisor Program",
        text: `Hello ${name},\n\nThank you for registering for the one-to-one career strategy session. We will contact you shortly to schedule your session.\n\nBest regards,\nThe Team`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", to);
        console.log("Message ID:", info.messageId);
    } catch (error) {
        console.error("FAILED to send user email:");
        console.error(error);
    }
}

export async function sendAdminEmailNotification(registrationDetails: any) {
    console.log("Attempting to send ADMIN notification email...");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("CRITICAL: Email credentials missing, skipping admin email notification");
        return;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self/admin
        subject: "New Registration Alert",
        text: `New registration details:\n\nName: ${registrationDetails.name}\nEmail: ${registrationDetails.email}\nPhone: ${registrationDetails.phone}\nCity: ${registrationDetails.city}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Admin notification email sent successfully.");
        console.log("Message ID:", info.messageId);
    } catch (error) {
        console.error("FAILED to send ADMIN email:");
        console.error(error);
    }
}
