const mongoDbConnection = require("../dbConnection.js");
const AuctionItem = require("../model/auctionItem.js");
const seedData = require("../data/seedData.json");

const seedDataIntoDb = async () => {
  await mongoDbConnection();

  try {
    await AuctionItem.deleteMany();
    await AuctionItem.insertMany(seedData);
    process.exit(0);
  } catch (err) {
    console.log("Error seeding data", err);
    process.exit(1);
  }
};

seedDataIntoDb();
