const Company = require("../models/Company");
const Address = require("../models/Address"); // Assuming Address model is defined
const { sequelize } = require("../db");

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: [{ model: Address, as: "address" }],
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get company by ID
const getCompanyById = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findByPk(id, {
      include: [{ model: Address, as: "address" }],
    });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new company
const createCompany = async (req, res) => {
  const { name, addressId } = req.body;

  try {
    const newCompany = await Company.create({ name, addressId });
    const populatedCompany = await Company.findByPk(newCompany.id, {
      include: [{ model: Address, as: "address" }],
    });
    res.status(201).json(populatedCompany);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update company by ID
const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { name, addressId } = req.body;
  try {
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    await company.update({
      name: name || company.name,
      addressId: addressId || company.addressId,
    });
    
    const updatedCompany = await Company.findByPk(id, {
      include: [{ model: Address, as: "address" }],
    });
    res.json(updatedCompany);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete company by ID
const deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    await company.destroy();
    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
