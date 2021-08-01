const { TOKEN_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

module.exports = () => (req, res, next) => {
  const token = req.headers["x-authorization"];
  try {
      if(token){
        const userData = jwt.verify(token, TOKEN_SECRET);
        req.user = userData;
      }
  
    next();
  } catch (err) {
      res.status(400).json({message: 'Invalid access token!'})
  }
};
