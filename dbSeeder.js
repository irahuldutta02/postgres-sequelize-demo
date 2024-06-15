const { sequelize } = require("./db");
const Address = require("./models/Address.js");
const User = require("./models/User.js");
const Company = require("./models/Company.js");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Drop existing tables and re-sync database

    // Seed addresses
    const addresses = await Address.bulkCreate([
      {
        street: "12 MG Road",
        city: "Bangalore", // Ensure city is populated
        state: "Karnataka",
        zip: "560001",
        type: "HOME",
      },
      {
        street: "45 FC Road",
        city: "Pune", // Ensure city is populated
        state: "Maharashtra",
        zip: "411016",
        type: "OFFICE",
      },
      {
        street: "78 Linking Road",
        city: "Mumbai", // Ensure city is populated
        state: "Maharashtra",
        zip: "400050",
        type: "HOME",
      },
      {
        street: "34 Park Street",
        city: "Kolkata", // Ensure city is populated
        state: "West Bengal",
        zip: "700016",
        type: "OFFICE",
      },
      {
        street: "90 Anna Salai",
        city: "Chennai", // Ensure city is populated
        state: "Tamil Nadu",
        zip: "600002",
        type: "HOME",
      },
      {
        street: "56 Sector 18",
        city: "Noida", // Ensure city is populated
        state: "Uttar Pradesh",
        zip: "201301",
        type: "OFFICE",
      },
      {
        street: "23 Janpath",
        city: "Delhi", // Ensure city is populated
        state: "Delhi",
        zip: "110001",
        type: "HOME",
      },
      {
        street: "67 MG Road",
        city: "Hyderabad", // Ensure city is populated
        state: "Telangana",
        zip: "500003",
        type: "OFFICE",
      },
      {
        street: "89 Brigade Road",
        city: "Bangalore", // Ensure city is populated
        state: "Karnataka",
        zip: "560025",
        type: "HOME",
      },
      {
        street: "100 Banjara Hills",
        city: "Hyderabad", // Ensure city is populated
        state: "Telangana",
        zip: "500034",
        type: "OFFICE",
      },
    ]);

    // Seed companies
    const companies = await Company.bulkCreate([
      { name: "ABC Corporation", addressId: addresses[0].id },
      { name: "XYZ Enterprises", addressId: addresses[1].id },
      { name: "PQR Industries", addressId: addresses[2].id },
      { name: "LMN Ltd", addressId: addresses[3].id },
      { name: "RST Inc", addressId: addresses[4].id },
      { name: "JKL Pvt Ltd", addressId: addresses[5].id },
      { name: "GHI Corporation", addressId: addresses[6].id },
      { name: "DEF Enterprises", addressId: addresses[7].id },
      { name: "MNO Industries", addressId: addresses[8].id },
      { name: "STU Ltd", addressId: addresses[9].id },
    ]);

    // Seed users with companyId
    const users = await User.bulkCreate([
      {
        name: "Amit Sharma",
        email: "amit.sharma@example.com",
        addressId: addresses[0].id,
        companyId: companies[0].id,
      },
      {
        name: "Priya Singh",
        email: "priya.singh@example.com",
        addressId: addresses[1].id,
        companyId: companies[1].id,
      },
      {
        name: "Ravi Kumar",
        email: "ravi.kumar@example.com",
        addressId: addresses[2].id,
        companyId: companies[2].id,
      },
      {
        name: "Sita Verma",
        email: "sita.verma@example.com",
        addressId: addresses[3].id,
        companyId: companies[3].id,
      },
      {
        name: "Vijay Patel",
        email: "vijay.patel@example.com",
        addressId: addresses[4].id,
        companyId: companies[4].id,
      },
      {
        name: "Anjali Mehta",
        email: "anjali.mehta@example.com",
        addressId: addresses[5].id,
        companyId: companies[5].id,
      },
      {
        name: "Rahul Gupta",
        email: "rahul.gupta@example.com",
        addressId: addresses[6].id,
        companyId: companies[6].id,
      },
      {
        name: "Sunita Rao",
        email: "sunita.rao@example.com",
        addressId: addresses[7].id,
        companyId: companies[7].id,
      },
      {
        name: "Karan Joshi",
        email: "karan.joshi@example.com",
        addressId: addresses[8].id,
        companyId: companies[8].id,
      },
      {
        name: "Nidhi Desai",
        email: "nidhi.desai@example.com",
        addressId: addresses[9].id,
        companyId: companies[9].id,
      },
    ]);

    console.log("Demo data added successfully:", {
      users,
      addresses,
      companies,
    });
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
}

seedDatabase();
