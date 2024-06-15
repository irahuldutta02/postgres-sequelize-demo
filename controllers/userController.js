const User = require("../models/User.js");
const Address = require("../models/Address.js");

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, addressId } = req.body;

  try {
    const user = await User.create({ name, email, addressId });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, addressId } = req.body;

  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.email = email;
      user.addressId = addressId;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User could not be updated" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User could not be deleted" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: Address });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch users" });
  }
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id, { include: Address });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch user" });
  }
};
