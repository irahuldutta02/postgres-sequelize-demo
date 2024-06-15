const Address = require("../models/Address.js");

// Create a new address
exports.createAddress = async (req, res) => {
  const { street, city, state, zip, type, address1 } = req.body;

  try {
    const address = await Address.create({
      street,
      city,
      state,
      zip,
      type,
      address1,
    });
    res.json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Address could not be created" });
  }
};

// Update an existing address
exports.updateAddress = async (req, res) => {
  const { id } = req.params;
  const { street, city, state, zip, type, address1 } = req.body;

  try {
    const address = await Address.findByPk(id);
    if (address) {
      address.street = street;
      address.city = city;
      address.state = state;
      address.zip = zip;
      address.type = type;
      address.address1 = address1;
      await address.save();
      res.json(address);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Address could not be updated" });
  }
};

// Delete an address
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;

  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.destroy();
      res.json(address);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Address could not be deleted" });
  }
};

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.json(addresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch addresses" });
  }
};

// Get a specific address by ID
exports.getAddressById = async (req, res) => {
  const { id } = req.params;

  try {
    const address = await Address.findByPk(id);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch address" });
  }
};
