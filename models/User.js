const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const Address = require("./Address");
const Company = require("./Company");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.belongsTo(Address, {
  foreignKey: "addressId",
  as: "address",
  allowNull: false,
});
User.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
  allowNull: false,
});

module.exports = User;
