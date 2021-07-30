const Listing = require("../models/Listing");

async function getAll() {
  return Listing.find({}).lean();
}

async function getById(id) {
  return Listing.findById(id).lean();
}

async function create(data) {
  const result = new Listing(data);
  await result.save();

  return result;
}

module.exports = {
  getAll,
  getById,
  create,
};
