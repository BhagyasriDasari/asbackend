const db = require('../config/db');

const addContact = (req, res) => {
    const { name, email, phone, address, timezone } = req.body;
    const userId = req.user.id;  // Set from authMiddleware

    db.run(
        `INSERT INTO contacts (user_id, name, email, phone, address, timezone) VALUES (?, ?, ?, ?, ?, ?)`,
        [userId, name, email, phone, address, timezone],
        function (err) {
            if (err) return res.status(400).json({ error: 'Email already exists' });
            res.status(201).json({ message: 'Contact added successfully' });
        }
    );
};

const getContacts = (req, res) => {
    const userId = req.user.id;
    db.all(`SELECT * FROM contacts WHERE user_id = ? AND is_deleted = 0`, [userId], (err, contacts) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve contacts' });
        res.json(contacts);
    });
};

module.exports = { addContact, getContacts };