/**
 * dbSeeder.js
 * This script seeds the database with demo data.
 */

const sequelize = require("./db");
const Address = require("./models/Address.js");
const User = require("./models/User.js");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Drop existing tables and re-sync database

    // Seed addresses
    const addresses = await Address.bulkCreate([
      {
        street: "12 MG Road",
        city: "Bangalore",
        state: "Karnataka",
        zip: "560001",
        type: "HOME",
      },
      {
        street: "45 FC Road",
        city: "Pune",
        state: "Maharashtra",
        zip: "411016",
        type: "OFFICE",
      },
      {
        street: "78 Linking Road",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400050",
        type: "HOME",
      },
      {
        street: "34 Park Street",
        city: "Kolkata",
        state: "West Bengal",
        zip: "700016",
        type: "OFFICE",
      },
      {
        street: "90 Anna Salai",
        city: "Chennai",
        state: "Tamil Nadu",
        zip: "600002",
        type: "HOME",
      },
      {
        street: "56 Sector 18",
        city: "Noida",
        state: "Uttar Pradesh",
        zip: "201301",
        type: "OFFICE",
      },
      {
        street: "23 Janpath",
        city: "Delhi",
        state: "Delhi",
        zip: "110001",
        type: "HOME",
      },
      {
        street: "67 MG Road",
        city: "Hyderabad",
        state: "Telangana",
        zip: "500003",
        type: "OFFICE",
      },
      {
        street: "89 Brigade Road",
        city: "Bangalore",
        state: "Karnataka",
        zip: "560025",
        type: "HOME",
      },
      {
        street: "100 Banjara Hills",
        city: "Hyderabad",
        state: "Telangana",
        zip: "500034",
        type: "OFFICE",
      },
    ]);

    // Seed users
    const users = await User.bulkCreate([
      {
        name: "Amit Sharma",
        email: "amit.sharma@example.com",
        addressId: addresses[0].id,
      },
      {
        name: "Priya Singh",
        email: "priya.singh@example.com",
        addressId: addresses[1].id,
      },
      {
        name: "Ravi Kumar",
        email: "ravi.kumar@example.com",
        addressId: addresses[2].id,
      },
      {
        name: "Sita Verma",
        email: "sita.verma@example.com",
        addressId: addresses[3].id,
      },
      {
        name: "Vijay Patel",
        email: "vijay.patel@example.com",
        addressId: addresses[4].id,
      },
      {
        name: "Anjali Mehta",
        email: "anjali.mehta@example.com",
        addressId: addresses[5].id,
      },
      {
        name: "Rahul Gupta",
        email: "rahul.gupta@example.com",
        addressId: addresses[6].id,
      },
      {
        name: "Sunita Rao",
        email: "sunita.rao@example.com",
        addressId: addresses[7].id,
      },
      {
        name: "Karan Joshi",
        email: "karan.joshi@example.com",
        addressId: addresses[8].id,
      },
      {
        name: "Nidhi Desai",
        email: "nidhi.desai@example.com",
        addressId: addresses[9].id,
      },
    ]);

    console.log("Demo data added successfully:", { users, addresses });
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
}

seedDatabase();
