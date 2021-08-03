const router = require("express").Router();
const { parseError } = require("../middlewares/util");
const { isUser, isOwner } = require("../middlewares/guards");
const preloader = require("../middlewares/preloader");
const { remove } = require("../models/Listing");
const { getAll, create, update } = require("../services/listing");
const Listing = require("../models/Listing");

router.get("/", async (req, res) => {
  const data = await getAll();

  res.json(data);
});

// router.get("/search", async (req, res) => {
//   const options = {}
//   if (req.query.search) {
//     options = { $regex: req.query.search, $options: 'i' };
// }
//   const data = await Listing.find(options).lean();
//   res.json(data);
// });

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
    const result = await create(data);
    res.status(201).json(result);
  } catch (err) {
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
    res.status(204).end();
  } catch (err) {
    console.log();
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
