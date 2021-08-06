const { Schema, model } = require("mongoose");

const schema = new Schema({
  username: { type: String },
  email: { type: String },
  hashedPassword: { type: String },
  booked: [{type: Schema.Types.ObjectId, ref: "Listing", default: []}],
  offered: [{type: Schema.Types.ObjectId, ref: "Listing"}],
});

module.exports = model("User", schema);
