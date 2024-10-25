const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const registerUser = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run(`INSERT INTO users (email, password_hash) VALUES (?, ?)`, [email, hashedPassword], function (err) {
        if (err) return res.status(400).json({ error: 'Email already exists' });
        
        // Send verification email here (e.g., with a verification token)
        res.status(201).json({ message: 'User registered, verification email sent' });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err || !user || !bcrypt.compareSync(password, user.password_hash)) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};

module.exports = { registerUser, loginUser };