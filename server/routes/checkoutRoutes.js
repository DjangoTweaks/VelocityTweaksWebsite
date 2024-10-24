const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const paypalController = require('../controllers/payaplController');


const { processPayPalCheckout, paypalCheckoutSuccess, paypalCheckoutCancel } = require('../controllers/checkoutController');

const authRoutes = require("../routes/auth")
router.post('/', checkoutController.processCheckout);
router.get('/success', checkoutController.checkoutSuccess);


// PayPal Routes
router.post('/paypal', paypalController.processPayPalCheckout);
router.get('/paypal/success', paypalController.paypalCheckoutSuccess);
router.get('/paypal/cancel', paypalController.paypalCheckoutCancel);
module.exports = router;
