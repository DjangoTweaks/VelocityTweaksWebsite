const express = require('express');
const router = express.Router();
const { addToCart, viewCart, updateCart,     removeFromCart,
} = require('../controllers/cartController');
const isAuthenticated = require('../middlewares/isAuthenticated');

// Cart routes
router.post('/add-to-cart', addToCart);
router.get('/cart',  viewCart);
router.post('/cart/increase',  updateCart);
router.post('/cart/decrease',      removeFromCart,
);

module.exports = router;
