import { Resend } from "resend";

// Email Service with Resend
// Note: RESEND_API_KEY must be set in environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailNotification(to: string, name: string) {
    console.log(`Attempting to send user notification email to: ${to}`);

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY missing in environment variables!");
        throw new Error("Resend API Key missing");
    }

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [to],
            subject: "Registration Successful - LIC Career Advisor Program",
            text: `Hello ${name},\n\nThank you for registering for the one-to-one career strategy session. We will contact you shortly to schedule your session.\n\nBest regards,\nThe Team`,
        });
        console.log("Email sent successfully:", data);
        return data;
    } catch (error) {
        console.error("FAILED to send user email:", error);
        throw error;
    }
}

export async function sendAdminEmailNotification(registrationDetails: any) {
    console.log("Attempting to send ADMIN notification email...");

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY missing, skipping admin email notification");
        throw new Error("Resend API Key missing");
    }

    // Default admin email if not set
    const adminEmail = process.env.EMAIL_USER || "amutha.licdocbe@gmail.com";

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [adminEmail],
            subject: "New Registration Alert",
            text: `New registration details:\n\nName: ${registrationDetails.name}\nEmail: ${registrationDetails.email}\nPhone: ${registrationDetails.phone}\nCity: ${registrationDetails.city}`,
        });
        console.log("Admin notification email sent successfully:", data);
        return data;
    } catch (error) {
        console.error("FAILED to send ADMIN email:", error);
        throw error;
    }
}
