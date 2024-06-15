const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companiesController");

// Routes for Companies
router.get("/", companiesController.getAllCompanies);
router.get("/:id", companiesController.getCompanyById);
router.post("/", companiesController.createCompany);
router.put("/:id", companiesController.updateCompany);
router.delete("/:id", companiesController.deleteCompany);

module.exports = router;
