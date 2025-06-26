import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (to, name) => {
  await client.messages.create({
    body: `Hello ${name}, thank you for submitting your contact information. We get intouch with you soon, just chill!`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};