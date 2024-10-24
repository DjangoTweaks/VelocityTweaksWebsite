const express = require('express');
const router = express.Router();

// Render the page to select a payment method
router.get('/choose-payment', (req, res) => {
    res.render('choosePaymentMethod');  // This will render the page to choose the payment method
});

module.exports = router;
