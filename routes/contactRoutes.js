const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Your existing routes
const { addContact, getContacts } = require('../controllers/contactController');
router.post('/', authenticateToken, addContact);
router.get('/', authenticateToken, getContacts);

// Add a new protected route
router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'You have accessed a protected route!' });
});

module.exports = router;
