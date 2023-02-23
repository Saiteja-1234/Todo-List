// const mongoose = require("mongoose");
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    isCompleted: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

// module.exports = mongoose.model("todo",todoSchema);
const todoModel = mongoose.model("todo",todoSchema);//same as above
export default todoModel;