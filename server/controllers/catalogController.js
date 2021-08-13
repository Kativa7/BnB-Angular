const router = require("express").Router();
const { parseError } = require("../middlewares/util");
const { isUser, isOwner } = require("../middlewares/guards");
const preloader = require("../middlewares/preloader");
const { getAll, create, update, remove, book, postReview, getReviews } = require("../services/listing");
const Listing = require("../models/Listing");

router.get("/", async (req, res) => {
  const data = await getAll();

  res.json(data);
});

router.post("/", isUser(), async (req, res) => {
  const data = {
    title: req.body.title,
    location: req.body.location,
    img: req.body.img,
    price: Number(req.body.price),
    category: req.body.category,
    description: req.body.description,
    owner: req.user._id,
  };
  try {
    const result = await create(data, req.user._id);

    res.status(201).json(result);
  } catch (err) {
    console.log(req.body);
    const message = parseError(err);

    res.status(400).json({ message });
  }
});

router.get("/:id", preloader(), async (req, res) => {
  const item = req.data.toObject();

  //item._ownerId = item.owner && item.owner.toString()

  res.json(item);
});

router.put("/:id", isUser(), preloader(), isOwner(), async (req, res) => {
  const updated = {
    title: req.body.title,
    location: req.body.location,
    img: req.body.img,
    price: Number(req.body.price),
    category: req.body.category,
    description: req.body.description,
  };
  try {
    const result = await update(req.data, updated);
    res.status(200).json(result);
  } catch (err) {
    const message = parseError(err);

    res.status(400).json({ message });
  }
});

router.delete("/:id", isUser(), preloader(), isOwner(), async (req, res) => {
  try {
    await remove(req.params.id);

    res.status(204).json({
      success: true,
      message: 'Furniture deleted successfully!'
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/book/:id", isUser(), async (req, res) => {
  try {
    const result = await book(req.params.id, req.user._id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

router.post('/reviews/:id/create', isUser(), async (req, res) => {
  const listingId = req.params.id;
  const review = {
    author: req.body.author,
    content: req.body.content,
    listingId: req.params.id
  }
  try{
    const result = await postReview(listingId, review);
    res.status(201).json(result);

  }catch(err){
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
})

router.get('/reviews/:id/create',  async (req, res) => {
  const listingId = req.params.id;
  
  try{
    const result = await getReviews(listingId);
    res.status(200).json(result);

  }catch(err){
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;
