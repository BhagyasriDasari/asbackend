// userModel.js
const { Sequelize, DataTypes } = require('sequelize');

// Set your database connection string in the .env file and reference it here
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'sqlite', // Change this to 'mysql', 'postgres', etc., based on your database
});

// Define the User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
