// db/index.js

const { Sequelize } = require("sequelize");
const { Client } = require("pg");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

// Function to create the database if it doesn't exist
async function createDatabase() {
  const dbName = process.env.DB_NAME;

  // PostgreSQL connection configuration
  const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  };

  const client = new Client(config);

  try {
    await client.connect(); // Connect to PostgreSQL server

    // Check if the database already exists
    const result = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`
    );

    if (result.rows.length === 0) {
      // Create the database if it doesn't exist
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database '${dbName}' created!`);
    } else {
      console.log(`Database '${dbName}' already exists.`);
    }
  } catch (error) {
    console.error("Error creating or checking database:", error.message);
    throw error;
  } finally {
    await client.end(); // Close the client connection
  }
}

// Export sequelize instance and the function to create database
module.exports = {
  sequelize,
  createDatabase,
};
