function isUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(400).json({ message: "Please sign in." });
    }
  };
}

function isGuest() {
  return (req, res, next) => {
  
    if (!req.user) {
      next();
    } else {
      res.status(400).json({ message: "Already signed in." });
    }
  };
}

function isOwner() {
  return (req, res, next) => {
    const item = req.data;

    if (req.user._id != item.owner) {
      res.status(400).json({ message: "You cannot modify this item." });
    } else {
      next();
    }
  };
}

module.exports = {
  isUser,
  isGuest,
  isOwner,
};
