const express = require("express");
const router = express.Router();
const {
  showProductsByCategory,
  createProducts,
} = require("../controllers/productController");

router.route("/products/:category").get(showProductsByCategory);
router.route("/products/new").get(createProducts);

module.exports = router;
