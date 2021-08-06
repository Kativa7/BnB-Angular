const Listing = require("../models/Listing");

async function getAll() {

  const listings = Listing.find().lean();

  return listings;
}


async function getById(id) {
  return Listing.findById(id);
}

async function create(data) {
  const result = new Listing(data);
 
  await result.save();

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

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  
};
