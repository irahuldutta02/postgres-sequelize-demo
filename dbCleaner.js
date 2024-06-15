/**
 * dbCleaner.js
 * This script cleans the database by deleting all data from the user and address tables.
 */

// dbCleaner.js

const { sequelize } = require("./db");
const Address = require("./models/Address.js");
const User = require("./models/User.js");
const Company = require("./models/Company.js");

async function cleanDatabase() {
  try {
    await sequelize.sync(); // Sync database structure without dropping tables

    await User.destroy({ where: {} }); // Delete all users
    console.log("All users deleted.");

    await Company.destroy({ where: {} }); // Delete all companies
    console.log("All companies deleted.");

    await Address.destroy({ where: {} }); // Delete all addresses
    console.log("All addresses deleted.");

    console.log("Database cleaned successfully.");
  } catch (error) {
    console.error("Error cleaning database:", error);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
}

cleanDatabase();
