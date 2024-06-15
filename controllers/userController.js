const User = require("../models/User");
const Address = require("../models/Address");
const Company = require("../models/Company");

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, addressId, companyId } = req.body;

  try {
    const user = await User.create({ name, email, addressId, companyId });
    const populatedUser = await User.findByPk(user.id, {
      include: [
        { model: Address, as: "address" },
        {
          model: Company,
          as: "company",
          include: [{ model: Address, as: "address" }],
        },
      ],
    });
    res.status(201).json(populatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, addressId, companyId } = req.body;

  try {
    let user = await User.findByPk(id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.addressId = addressId || user.addressId;
      user.companyId = companyId || user.companyId;
      await user.save();

      user = await User.findByPk(id, {
        include: [
          { model: Address, as: "address" },
          {
            model: Company,
            as: "company",
            include: [{ model: Address, as: "address" }],
          },
        ],
      });
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
    const users = await User.findAll({
      include: [
        { model: Address, as: "address" },
        {
          model: Company,
          as: "company",
          include: [{ model: Address, as: "address" }],
        },
      ],
    });
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
    const user = await User.findByPk(id, {
      include: [
        { model: Address, as: "address" },
        {
          model: Company,
          as: "company",
          include: [{ model: Address, as: "address" }],
        },
      ],
    });
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
