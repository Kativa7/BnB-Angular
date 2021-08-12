const Listing = require("../models/Listing");
const User = require("../models/User");

async function getAll() {
  const listings = Listing.find().lean();

  return listings;
}

async function getById(id) {
  return Listing.findById(id);
}

async function create(data, userId) {
  const user = await User.findById(userId);
  const result = new Listing(data);
  await result.save();
  user.offered.push(result);
  await user.save();
  return result;
}

async function update(original, updated) {
  Object.assign(original, updated);
  await original.save();
  return original;
}

async function remove(id) {
  return await Listing.findByIdAndDelete(id);
}

async function book(listingId, userId) {
  const user = await User.findById(userId);
  user.booked.push(listingId);
  return user.save();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  book,
};
