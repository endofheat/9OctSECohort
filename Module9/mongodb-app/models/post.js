const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postTitle: {type: String, trim: true, required: true },
    imgURL: { type: String, trim: true, required: true },
    description: { type: String, trim:true, required:true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true },
    like: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);