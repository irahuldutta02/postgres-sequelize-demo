// server.js

const express = require("express");
const { sequelize, createDatabase } = require("./db");
const userRoutes = require("./routes/users");
const addressRoutes = require("./routes/addresses");
const companyRoutes = require("./routes/companies");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/addresses", addressRoutes);
app.use("/companies", companyRoutes);

// Function to start server after creating database (if necessary)
async function startServer() {
  try {
    await createDatabase(); // Ensure the database exists before syncing tables

    // Sync Sequelize models with the database
    await sequelize.sync({ force: false });
    console.log("Database & tables synced!");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1); // Exit with error
  }
}

// Start the server
startServer();
