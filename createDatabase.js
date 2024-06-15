const pgtools = require("pgtools");
const { Sequelize } = require("sequelize");
require("dotenv").config(); // Ensure .env file is loaded

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const dbName = process.env.DB_NAME;

async function createDatabase() {
  try {
    await pgtools.createdb(config, dbName);
    console.log(`Database ${dbName} created successfully!`);
  } catch (err) {
    if (err.name === "duplicate_database") {
      console.log(`Database ${dbName} already exists.`);
    } else {
      console.error("Error creating database:", err);
      process.exit(1);
    }
  }
}

module.exports = createDatabase;
