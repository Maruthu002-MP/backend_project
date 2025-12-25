const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 200 },
    description: String,
    status: {
      type: String,
      enum: ["todo", "in-progress", "completed", "archived"],
      default: "todo"
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },
    dueDate: Date,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    completedAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
