const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, trim: true, required: true, unique: true },
    emailId: { type: String, trim: true, required: true, unique: true },
    cardID: { type: mongoose.Schema.Types.ObjectId, ref: "Card" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);