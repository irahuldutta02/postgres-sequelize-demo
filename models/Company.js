const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const Address = require("./Address");

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Company.belongsTo(Address, { foreignKey: "addressId", as: "address" });

module.exports = Company;
