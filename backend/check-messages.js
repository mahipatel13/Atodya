const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/atodya')
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Define Contact schema (same as in the backend)
    const ContactSchema = new mongoose.Schema({
      name: String,
      email: String,
      message: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const Contact = mongoose.model('Contact', ContactSchema);
    
    // Find all messages
    Contact.find().sort({ createdAt: -1 })
      .then(messages => {
        console.log(`Found ${messages.length} messages:`);
        messages.forEach((msg, index) => {
          console.log(`\n${index + 1}. Name: ${msg.name}`);
          console.log(`   Email: ${msg.email}`);
          console.log(`   Message: ${msg.message}`);
          console.log(`   Date: ${msg.createdAt}`);
        });
        
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error fetching messages:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
