const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const dataset = require("../dataset.json");
const Predicted = require("../models/predictedData");
const bills = require("../bills.json");
const Bill = require("../models/billModel");

exports.showProductsByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  const predictedData = await Predicted.findOne({
    category: req.params.category,
  });
  let predictedProduct;
  if (predictedData) {
    predictedProduct = products.filter(
      (prd) => prd.product === predictedData.predicted_product
    )[0];
  }
  res.status(201).json({
    success: true,
    products,
    offer: predictedData
      ? {
          product: predictedProduct,
          quantity: 2,
          discount: 20,
        }
      : null,
  });
};

exports.createProducts = catchAsyncError(async (req, res) => {
  const newBills = await Promise.all(
    bills.bills.map(async (bill) => {
      const newProducts = await Promise.all(
        bill.products.map(async (item) => {
          const product = await Product.findOne({ product: item.product });
          // console.log(item,item.total_price);
          return { ...item, productId: product._id };
        })
      );
      const createdBill = await Bill.create({ ...bill, products: newProducts });
      console.log(createdBill);
      return createdBill;
    })
  );
  res.status(201).json({
    success: true,
    newBills,
  });
});
