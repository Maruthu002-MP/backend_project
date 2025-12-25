const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  color: String,
  taskCount: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Category", categorySchema);
