const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config");

async function register(username, email, password) {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User with this email already exists!");
  }

  const hashedPassord = await bcrypt.hash(password, 10);
  const user = new User({ username, email, hashedPassword });
  await user.save();

  return{
      _id: user._id,
      username: user.username,
      email: user.email,
      accessToken: generateToken(user)
  };
}

async function login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Incorrect name or password!");
    }
  
    const match = await bcrypt.compare(password, user.hashedPassord);

    if(!match){
      throw new Error("Incorrect name or password!");
    }
    
    return{
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: generateToken(user)
    };
  }
  
function generateToken(user) {
  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
    TOKEN_SECRET
  );

  return token;
}

module.exports = {
  register,
  login
};
