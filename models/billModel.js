const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  products: [
    {
      product: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      market_price: {
        type: Number,
        required: true,
      },
      total_price: {
        type: Number,
        required: true,
      },
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Bill", billSchema);