const express = require("express");
const products = require("../models/index")
const router = express.Router();
const productController = require("../Controller/productController")

router.post("/product", productController.addproduct);

router.route('/products').get(productController.get);

router.route('/products/:productIndex').get(productController.getSingleProduct);

router.route('/products/:productIndex').put(productController.changeProduct);

router.route('/products/:productIndex').delete(productController.changeProduct);

module.exports = router;