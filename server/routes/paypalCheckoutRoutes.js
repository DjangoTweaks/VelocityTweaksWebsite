const express = require('express');
const router = express.Router();
const { processCheckout, checkoutSuccess, processPayPalCheckout, paypalCheckoutSuccess, paypalCheckoutCancel } = require('../controllers/checkoutController');

// Stripe Routes
router.post('/', processCheckout);
router.get('/success', checkoutSuccess);

// PayPal Routes
router.post('/paypal', processPayPalCheckout);
router.get('/paypal/success', paypalCheckoutSuccess);
router.get('/paypal/cancel', paypalCheckoutCancel);

module.exports = router;
