import nodemailer from "nodemailer";

// Email Service with Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function sendEmailNotification(to: string, name: string) {
    console.log(`Attempting to send user notification email to: ${to}`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("CRITICAL: EMAIL_USER or EMAIL_PASS missing in environment variables!");
        throw new Error("Email credentials missing");
    }

    try {
        const info = await transporter.sendMail({
            from: `"LIC Career Advisor" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: "Registration Successful - LIC Career Advisor Program",
            text: `Hello ${name},\n\nThank you for registering for the one-to-one career strategy session. We will contact you shortly to schedule your session.\n\nBest regards,\nThe Team`,
        });
        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("FAILED to send user email:", error);
        throw error;
    }
}

export async function sendAdminEmailNotification(registrationDetails: any) {
    console.log("Attempting to send ADMIN notification email...");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("CRITICAL: EMAIL_USER or EMAIL_PASS missing, skipping admin email notification");
        throw new Error("Email credentials missing");
    }

    try {
        const info = await transporter.sendMail({
            from: `"LIC Career Advisor" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Registration Alert",
            text: `New registration details:\n\nName: ${registrationDetails.name}\nEmail: ${registrationDetails.email}\nPhone: ${registrationDetails.phone}\nCity: ${registrationDetails.city}`,
        });
        console.log("Admin notification email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("FAILED to send ADMIN email:", error);
        throw error;
    }
}
