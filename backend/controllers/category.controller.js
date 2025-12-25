const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  const category = await Category.create({
    ...req.body,
    user: req.user._id
  });
  res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find({ user: req.user._id });
  res.json(categories);
};

exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
