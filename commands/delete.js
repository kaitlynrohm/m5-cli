const mongoDbConnection = require("../dbConnection.js");
const AuctionItem = require("../model/auctionItem.js");

const deleteData = async () => {
  await mongoDbConnection();

  const name = "Pyramid";

  try {
    const item = await AuctionItem.findOne({ title: name });
    item
      ? await AuctionItem.deleteOne({ title: name })
      : console.log(`Error, There is no item with the title ${name}`);
    process.exit(0);
  } catch (err) {
    console.log("Error when deleting the data.", err);
    process.exit(1);
  }
};

deleteData();
