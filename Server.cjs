const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Twilio credentials
const accountSid = 'your_twilio_account_sid'; // Replace with your Twilio Account SID
const authToken = 'your_twilio_auth_token';   // Replace with your Twilio Auth Token
const verifyServiceSid = 'your_verify_service_sid'; // Replace with your Verify Service SID

const client = twilio(accountSid, authToken);

app.use(bodyParser.json());

// Endpoint to send OTP
app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  try {
    const verification = await client.verify.services(verifyServiceSid)
      .verifications
      .create({ to: email, channel: 'email' });
    res.status(200).send('OTP sent');
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send('Error sending OTP');
  }
});

// Endpoint to verify OTP
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const verificationCheck = await client.verify.services(verifyServiceSid)
      .verificationChecks
      .create({ to: email, code: otp });

    if (verificationCheck.status === 'approved') {
      res.status(200).send('OTP verified');
    } else {
      res.status(400).send('Invalid OTP');
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).send('Error verifying OTP');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
