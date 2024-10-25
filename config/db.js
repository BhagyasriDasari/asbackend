const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./contacts.db', (err) => {
    if (err) console.error('Error opening database:', err);
    else console.log('Connected to SQLite database');
});

db.serialize(() => {
    db.run("PRAGMA foreign_keys = ON"); // Enforces foreign key constraints

    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        is_verified INTEGER DEFAULT 0 CHECK(is_verified IN (0, 1))
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        phone TEXT,
        address TEXT,
        timezone TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        is_deleted INTEGER DEFAULT 0 CHECK(is_deleted IN (0, 1)),
        FOREIGN KEY (user_id) REFERENCES users (id)
    )`);
});

module.exports = db;