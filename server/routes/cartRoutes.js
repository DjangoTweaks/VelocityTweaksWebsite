const express = require("express");
const router = express.Router();
const {
  viewCartFix,
  addToCart,
  viewCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Cart routes
router.post("/add-to-cart", addToCart);
router.get("/cart", viewCart);
router.get("/cart-fix", viewCartFix);
router.post("/cart/increase", updateCart);
router.post("/cart/decrease", removeFromCart);
router.post("/cart/clear", clearCart);

 
module.exports = router;
