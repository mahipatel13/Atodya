const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Save to database first
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Try to send email, but don't fail if email configuration is not set up
    try {
      console.log('Checking email configuration...');
      console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
      console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
      console.log('EMAIL_USER value:', process.env.EMAIL_USER);
      
      // Only attempt to send email if credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS && 
          process.env.EMAIL_USER !== 'your-gmail-address@gmail.com') {
        
        console.log('Attempting to send email...');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'info@atodya.in',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><em>This message was sent from the Atodya website contact form.</em></p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to info@atodya.in');
      } else {
        console.log('❌ Email credentials not configured, skipping email sending');
      }
    } catch (emailError) {
      console.log('❌ Email sending failed, but contact was saved:', emailError.message);
      console.log('Full error:', emailError);
      // Don't fail the entire request if email fails
    }

    res.status(201).json({ success: true, message: 'Message received. We will get back to you shortly!' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
