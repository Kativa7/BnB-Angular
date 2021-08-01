const { Schema, model } = require("mongoose");

const schema = new Schema({
  username: { type: String },
  email: { type: String },
  hashedPassword: { type: String },
});

module.exports = model("User", schema);
