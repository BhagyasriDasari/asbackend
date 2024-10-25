Contacts Management Application
This is a Contacts Management Application built with Node.js and SQLite. The application allows users to register, log in, and manage their contacts efficiently.

Features
User Authentication: Users can register and log in securely.
Contact Management: Users can create, retrieve, update, and delete their contacts.
JWT Authentication: Secure access to protected routes using JSON Web Tokens (JWT).
SQLite Database: All user and contact data is stored in a lightweight SQLite database.
Getting Started
Prerequisites
Node.js
SQLite
Installation
Clone the repository:


bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add your environment variables:
makefile
Copy code
JWT_SECRET=your_jwt_secret
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add your environment variables:
makefile
Copy code
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
node server.js
API Endpoints
POST /api/register: Register a new user.
POST /api/login: Log in an existing user.
GET /api/contacts: Retrieve a list of contacts (protected route).
POST /api/contacts: Add a new contact (protected route).
PUT /api/contacts/
: Update a contact (protected route).
DELETE /api/contacts/
: Delete a contact (protected route).


deployed link:https://asbackend.onrender.com/