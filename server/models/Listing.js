const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: [true, 'Title is required'] },
  location: { type: String, required: [true, 'Location is required'] },
  img: { type: String, required: [true, 'Image is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  category: { type: String, required:[true, 'Category is required'],  enum: ['house', 'apartment', 'room', 'other'] },
  description: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  reviews: [{type: Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = model("Listing", schema);
