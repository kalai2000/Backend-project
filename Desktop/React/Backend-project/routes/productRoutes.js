const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
 

// PUBLIC ROUTES
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// PROTECTED ROUTES (Optional if using JWT)
router.post("/",   productController.createProduct);
router.put("/:id",  productController.updateProduct);
router.delete("/:id",  productController.deleteProduct);

module.exports = router;
