const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Stock owned by user, (Ex. ticker: AAPL, quantity: 10 (shares))
const holdingSchema = new Schema({
  ticker: {type: String},
  quantity: {type: Number}
});

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;
