const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `db connected : ${connect.connection.host} , ${connect.connection.name}`
    );
  } catch (error) {
    console.log("failed to connect to mongodb");
  }
};

module.exports = dbconnect;
