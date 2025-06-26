import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Contact Submission Received',
    text: `Hello ${name},\n\nThank you for submitting your contact information!`,
  };
  await transporter.sendMail(mailOptions);
};