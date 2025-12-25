const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user._id });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).populate("category");
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user.id)
    return res.status(403).json({ message: "Forbidden" });
  res.json(task);
};

exports.updateStatus = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.status = req.body.status;
  if (req.body.status === "completed") task.completedAt = new Date();
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
