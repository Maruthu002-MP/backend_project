const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    user: { id: user._id, email: user.email },
    token: generateToken(user._id)
  });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await user.matchPassword(req.body.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ token: generateToken(user._id) });
};

exports.me = async (req, res) => {
  res.json(req.user);
};
