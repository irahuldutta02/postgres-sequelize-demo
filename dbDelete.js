/**
 * dbDelete.js
 * This script deletes the PostgreSQL database specified in the .env file.
 */

const { Client } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// PostgreSQL connection configuration
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
};

const client = new Client(config);

async function deleteDatabase() {
  try {
    await client.connect(); // Connect to PostgreSQL server

    // Drop the database if it exists
    await client.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
    console.log(`Database '${process.env.DB_NAME}' deleted successfully!`);
  } catch (error) {
    console.error("Error deleting database:", error.message);
  } finally {
    await client.end(); // Close the client connection
  }
}

deleteDatabase();
