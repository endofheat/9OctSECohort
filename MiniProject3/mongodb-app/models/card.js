const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardName: {type: String, trim: true, required: true },
    imgURL: { type: String, trim: true, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    notes: { type: String, trim:true, required:true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("card", cardSchema);