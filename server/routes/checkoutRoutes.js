const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const authRoutes = require("../routes/auth")
router.post('/', checkoutController.processCheckout);
router.get('/success', checkoutController.checkoutSuccess);

module.exports = router;
