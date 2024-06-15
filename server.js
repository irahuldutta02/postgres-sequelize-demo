const express = require("express");
const sequelize = require("./db");
const userRoutes = require("./routes/users");
const addressRoutes = require("./routes/addresses");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/addresses", addressRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
