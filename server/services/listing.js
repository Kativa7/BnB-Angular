const Listing = require("../models/Listing");
const User = require("../models/User");
const Review = require("../models/Review");

async function getAll() {
  const listings = Listing.find().sort({price: -1}).lean();

  return listings;
}

async function getById(id) {
  return Listing.findById(id).populate('reviews');
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

async function postReview(id, review){
const listing = await Listing.findById(id);
 const newReview = new Review(review);
 await newReview.save();

 listing.reviews.push(newReview);
 return listing.save();

}

async function getReviews(id){
const reviews = await Review.find({listingId: id});
return reviews;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  book,
  postReview,
  getReviews
};
