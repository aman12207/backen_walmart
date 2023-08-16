const catchAsyncError = require("../middleware/catchAsyncError");
const Bill = require('../models/billModel');

exports.createBills = catchAsyncError(async (req, res) => {
  const createdBill = await Bill.create(req.body);
  console.log(req.body);
  res.status(201).json({
    success: true,
    createdBill
  });
});