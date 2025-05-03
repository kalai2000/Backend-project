const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");
const { authenticateToken } = require("../middleware/authMiddleware");  // Optional: For JWT protection

// Add item to cart
router.post("/add", authenticateToken, cartController.addToCart);

// Get all cart items for a user
router.get("/", authenticateToken, cartController.getCart);

// Update cart item (change quantity)
router.put("/update", authenticateToken, cartController.updateCartItem);

// Remove item from cart
router.delete("/remove/:productId", authenticateToken, cartController.removeFromCart);

module.exports = router;
