const paypalClient = require('../config/paypal');
const Order = require("../model/order");
const Cart = require("../model/cart");

const URL = process.env.URL;

const processPayPalCheckout = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.googleId });
    
        if (!cart || cart.items.length === 0) {
            return res.send('<h1>Your cart is empty.</h1>');
        }

        // Build PayPal order request
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: cart.totalAmount // Ensure totalAmount is calculated in your cart model
                }
            }],
            application_context: {
                return_url: `${URL}/checkout/paypal/success`,
                cancel_url: `${URL}/checkout/paypal/cancel`
            }
        });

        // Send request to PayPal
        const order = await paypalClient.execute(request);
        res.redirect(order.result.links.find(link => link.rel === 'approve').href);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const paypalCheckoutSuccess = async (req, res) => {
    const { token } = req.query;

    try {
        const request = new paypal.orders.OrdersCaptureRequest(token);
        request.requestBody({});
        const capture = await paypalClient.execute(request);

        // Save the order to your database, similar to Stripe
        const order = new Order({
            userId: req.user.googleId,
            paymentMethod: 'paypal',
            amount: capture.result.purchase_units[0].amount.value,
            currency: capture.result.purchase_units[0].amount.currency_code,
            paymentStatus: capture.result.status,
            customerEmail: req.user.email,
            purchasedAt: new Date(),
            paymentIntentId: capture.result.id
        });

        await order.save();

        res.send('<h1>Payment successful</h1>');
    } catch (error) {
        console.error('Error capturing PayPal order:', error);
        res.status(500).json({ error: 'Error capturing PayPal payment' });
    }
};

const paypalCheckoutCancel = (req, res) => {
    res.send('<h1>Payment cancelled</h1>');
};

module.exports = {
    processPayPalCheckout,
    paypalCheckoutSuccess,
    paypalCheckoutCancel
};
