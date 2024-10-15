const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "manager", "admin"], // You can specify other roles if needed
    },
  },
  { timestamps: true }
);

// Create the model from the schema
module.exports = mongoose.model("User", UserSchema);
