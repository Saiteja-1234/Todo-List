const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    isCompleted: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("todo",todoSchema);