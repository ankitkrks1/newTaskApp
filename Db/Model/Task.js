const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskname: {
      type: String,
      trim: true,
      unique:true
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
