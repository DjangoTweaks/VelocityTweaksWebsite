const express = require('express');
const router = express.Router();
const { capturePayPalOrder } = require('../config/paypal'); // Assuming you have a function to capture orders

// Handle PayPal webhook events
router.post('/paypal', async (req, res) => {
    const event = req.body; // Parse the incoming event
    console.log('Received PayPal webhook event:', event);

    // Check for the event type and handle accordingly
    if (event.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
        const orderId = event.resource.id; // Get the order ID from the event
        const captureData = await capturePayPalOrder(orderId);
        console.log('Capture data:', captureData);
    }

    // Respond to PayPal to acknowledge receipt of the event
    res.status(200).send('OK');
});

module.exports = router;
