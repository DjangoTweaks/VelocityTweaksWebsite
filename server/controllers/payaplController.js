const { createPayPalOrder, capturePayPalOrder } = require('../config/paypal');
const { getPayPalAccessToken } = require('../config/paypal');
const Order = require("../model/order");
const Cart = require("../model/cart");
const nodemailer = require('nodemailer');
const axios = require('axios');
const URL = process.env.URL;

const processPayPalCheckout = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.googleId });

        if (!cart || cart.items.length === 0) {
            return res.send('<h1>Your cart is empty.</h1>');
        }

        // Map cart items to PayPal format
        const items = cart.items.map(item => ({
            name: item.productName,
            unit_amount: {
                currency_code: "USD",
                value: item.price
            },
            quantity: item.quantity
        }));

        // Calculate total amount
        const totalAmount = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Create PayPal order
        const order = await createPayPalOrder(items, totalAmount, `${URL}/checkout/paypal/success`, `${URL}/checkout/paypal/cancel`);
        
        // Redirect user to approve the payment
        const approvalLink = order.links.find(link => link.rel === 'approve').href;
        res.redirect(approvalLink);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PayPal Checkout Success Handler
const paypalCheckoutSuccess = async (req, res) => {
    const { orderId } = req.body; // Assuming orderId is sent in the request body
    const googleId = req.user.googleId;

    try {
        // Get the PayPal access token
        const accessToken = await getPayPalAccessToken();

        // Capture PayPal order using the orderId
        const captureResponse = await axios({
            url: `${process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com'}/v2/checkout/orders/${orderId}/capture`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        const capturedOrder = captureResponse.data;

        // Log captured order details
        console.log('Captured Order:', capturedOrder);

        // Product name mapping for license key generation
        const productMapping = {
            "WittCepter Product 1": "Basic Utility",
            "WittCepter Product 2": "Premium Utility",
        };

        // Extract product details and map to internal names
        const purchasedProducts = capturedOrder.purchase_units[0].items.map(item => ({
            productId: item.sku,
            productName: productMapping[item.name] || item.name, // Fallback to PayPal name if no mapping
        }));

        // Loop through purchased products and generate a license key for each
        const licenseKeys = await Promise.all(
            purchasedProducts.map(async product => {
                let mask;
                if (product.productName === 'Basic Utility') {
                    mask = 'BASIC-****-*****-****-****';
                } else if (product.productName === 'Premium Utility') {
                    mask = 'ADVANCED-****-*****-****-****';
                } else {
                    console.error(`Unknown product: ${product.productName}`);
                    mask = 'UNKNOWN-****-*****-****-****'; // Default for unknown products
                }

                const keyAuthResponse = await axios.get('https://keyauth.win/api/seller/', {
                    params: {
                        sellerkey: 'YOUR_SELLER_KEY', // Update with your seller key
                        type: 'add',
                        format: 'json',
                        expiry: 10,
                        mask: mask,
                        amount: 1,
                        owner: 'Xsd9awYPQD',
                        character: 2,
                        note: `Generated for ${product.productName}`
                    }
                });

                const licenseKey = keyAuthResponse.data.key;
                return { productName: product.productName, licenseKey };
            })
        );

        // Log purchased products and license keys
        console.log('Purchased Products:', purchasedProducts);
        console.log('Generated License Keys:', licenseKeys);

        // Send license keys via email
        await sendLicenseKeysEmail(req.user.email, purchasedProducts, licenseKeys);

        // Save order details to the database
        const order = new Order({
            userId: googleId || 'unknown_user',
            amount: capturedOrder.purchase_units[0].payments.captures[0].amount.value,
            currency: capturedOrder.purchase_units[0].payments.captures[0].amount.currency_code,
            status: capturedOrder.status,
            paymentIntentId: capturedOrder.id,
            customerEmail: capturedOrder.payer.email_address,
            customerName: `${capturedOrder.payer.name.given_name} ${capturedOrder.payer.name.surname}`,
            paymentMethodTypes: ['paypal'],
            purchasedAt: new Date(),
            purchasedProducts,
            licenseKeys,
        });

        await order.save();
        console.log('Order saved:', order);

        // Clear the cart for the user
        await Cart.findOneAndDelete({ userId: googleId || 'unknown_user' });

        res.status(200).json({ message: 'Payment successful and order processed.' });
    } catch (err) {
        console.error('Error handling PayPal payment:', err.message);
        res.status(500).json({ error: 'Payment processing failed.' });
    }
};

// Function to send the license key email
const sendLicenseKeysEmail = (email, purchasedProducts, licenseKeys) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Product License Keys',
        html: `
            <h1>Thank you for your purchase!</h1>
            <p>Here are your license keys for the products you purchased:</p>
            <ul>
                ${licenseKeys.map(key => `<li>${key.productName}: ${key.licenseKey}</li>`).join('')}
            </ul>
            <p>Enjoy your products!</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};


const paypalCheckoutCancel = (req, res) => {
    res.send('<h1>Payment cancelled</h1>');
};

module.exports = {
    processPayPalCheckout,
    paypalCheckoutSuccess,
    paypalCheckoutCancel
};
