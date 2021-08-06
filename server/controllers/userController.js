const router = require("express").Router();

const { register, login } = require("../services/user");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username) {
      throw new Error("Username is required!");
    }
    if (!email) {
      throw new Error("Email is required!");
    }
    if (password.trim().length < 3) {
      throw new Error("Password must be at least 4 characters!");
    }
    const userData = await register(username, email, password);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await login(email, password);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/logout", (req, res) => {
  res.status(204).end();
});

module.exports = router;
