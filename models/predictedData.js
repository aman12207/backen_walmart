const { mongoose } = require("mongoose");
const predictedProductSchema = mongoose.Schema({
  predicted_product: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  productId: {
    type: mongoose.Schema.ObjectId,
  },
});

module.exports = mongoose.model("predicted_data", predictedProductSchema);
