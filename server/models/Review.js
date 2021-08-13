const { Schema, model } = require("mongoose");

const schema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  listingId: { type: Schema.Types.ObjectId, ref: "Listing" },

});

module.exports = model("Review", schema);
