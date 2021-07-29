const router = require("express").Router();
const { getAll } = require("../services/listing");

router.get("/", async (req, res) => {
  const data = await getAll();
  console.log(req.body)
  res.json(data);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body);
  res.end()
});

module.exports = router;
