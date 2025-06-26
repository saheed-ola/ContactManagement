import Contact from '../models/contactModel.js';
import { sendEmail } from '../services/emailService.js';
import { sendSMS } from '../services/smsService.js';

export const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newContact = await Contact.create({ name, email, phone });
    await sendEmail(email, name);
    await sendSMS(phone, name);
    res.status(201).json({ message: 'Contact added and notifications sent.', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error adding contact or sending notifications.', error: error.message });
  }
};       