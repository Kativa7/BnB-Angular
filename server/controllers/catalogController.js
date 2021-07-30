const router = require("express").Router();
const { getAll, getById, create } = require("../services/listing");

router.get("/", async (req, res) => {
  const data = await getAll();
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = {
    title: req.body.title,
    location: req.body.location,
    img: req.body.img,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description
  }

  const result = await create(data);
  res.status(201).json(result);
  });


router.get('/:id', async(req, res) => {
  const item = await getById(req.params.id);
  res.json(item);
})

module.exports = router;
