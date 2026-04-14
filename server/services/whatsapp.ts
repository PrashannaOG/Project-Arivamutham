import twilio from "twilio";

// WhatsApp notification service using Twilio
// Note: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_NUMBER must be set in environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER || "whatsapp:+14155238886"; // Default Twilio sandbox number
const adminWhatsApp = process.env.ADMIN_WHATSAPP_NUMBER; // The admin's personal WhatsApp number

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendAdminWhatsAppNotification(registrationDetails: any) {
    console.log("Attempting to send ADMIN WhatsApp notification...");

    if (!client) {
        console.warn("SKIP: Twilio credentials missing, skipping WhatsApp notification");
        return null;
    }

    if (!adminWhatsApp) {
        console.warn("SKIP: ADMIN_WHATSAPP_NUMBER missing, skipping WhatsApp notification");
        return null;
    }

    try {
        const message = await client.messages.create({
            from: whatsappNumber,
            to: `whatsapp:${adminWhatsApp.startsWith("+") ? adminWhatsApp : "+" + adminWhatsApp}`,
            body: `🚀 *New Registration Alert*\n\n*Name:* ${registrationDetails.name}\n*Email:* ${registrationDetails.email}\n*Phone:* ${registrationDetails.phone}\n*City:* ${registrationDetails.city}\n\n_Sent via LIC Career Advisory System_`,
        });
        console.log("Admin WhatsApp notification sent successfully:", message.sid);
        return message;
    } catch (error) {
        console.error("FAILED to send ADMIN WhatsApp message:", error);
        // We don't throw here to avoid failing the whole registration process if WhatsApp fails
        return null;
    }
}
