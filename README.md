# Contact Management System Backend

A Node.js, Express, and MongoDB backend for managing contacts, with automated SMS and email notifications using Twilio and Nodemailer.

## Features
- RESTful API for contact management
- MongoDB for data storage
- Sends email notifications via Nodemailer
- Sends SMS notifications via Twilio
- Environment variables for sensitive configuration

## Project Structure
```
/controllers
  contactController.js
/models
  contactModel.js
/routes
  contactRoutes.js
/services
  emailService.js
  smsService.js
.env
.gitignore
app.js
package.json
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB Atlas account or local MongoDB
- Twilio account (for SMS)
- Gmail or SMTP credentials (for email)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/saheed-ola/ContactManagementSystem.git
   cd ContactManagementSystem
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_NUMBER=+234XXXXXXXXXX
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password_or_app_password
   ```
4. Add `.env` to your `.gitignore` to keep secrets safe.

### Running the Server
```sh
npm start
```

## API Endpoints

### POST /api/contacts
Create a new contact and send notifications.

**Request Body:**
```json
{
  "name": "Bola Tinubu",
  "email": "Tinubu@asorock.com",
  "phone": "+234805475399"
}
```

**Response:**
- `201 Created` on success
- `400 Bad Request` if required fields are missing
- `500 Internal Server Error` on failure

## Notifications
- **Email:** Sent to the contact's email address
- **SMS:** Sent to the contact's phone number (must be in +234 format)

## Security
- Never commit your `.env` file or secrets to version control
- Rotate credentials if secrets are ever exposed

## License
This project is licensed under the MIT License.
