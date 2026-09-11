const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Best Practice: Pass function reference instead of Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User", // Review ke author ka User Model se link
    },
});

module.exports = mongoose.model("Review", reviewSchema);