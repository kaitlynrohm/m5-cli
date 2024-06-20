const mongoose = require("mongoose");

const mongoDbConnection = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/auction");
    console.log("Connected to auction");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

module.exports = mongoDbConnection;
