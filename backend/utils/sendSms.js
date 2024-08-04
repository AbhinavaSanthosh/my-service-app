// const twilio = require('twilio');
// require('dotenv').config(); // Ensure you have dotenv package installed

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = new twilio(accountSid, authToken);

// const sendSms = async (mobile, message) => {
//     try {
//         await client.messages.create({
//             body: message,
//             from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number, formatted as +1234567890
//             to: `+${mobile}`
//         });
//         console.log('OTP sent successfully');
//     } catch (error) {
//         console.error(`Error sending OTP: ${error.message}`);
//     }
// };

// module.exports = sendSms;
