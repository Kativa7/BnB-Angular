const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true,  enum: ['House', 'Apartment', 'Room'] },
  description: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Listing", schema);
