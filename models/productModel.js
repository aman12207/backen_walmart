const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  market_price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  type: {
    type: String,
    required: [true, "Please Enter Product Type"],
  },
  offer: {
    discount: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    code: {
      type: String,
    },
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
