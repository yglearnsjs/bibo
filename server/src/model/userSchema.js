const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneNumber: { type: Number },
    location: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    token: { type: String },
  },
  {
    collection: "Users",
  }
);
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
