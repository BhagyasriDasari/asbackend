const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Contact Management API');
});

app.use('/api/auth', authRoutes);      // Ensure this is here
app.use('/api/contacts', contactRoutes);

module.exports = app;