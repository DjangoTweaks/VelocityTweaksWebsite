require('dotenv').config();
const paypal = require('@paypal/checkout-server-sdk');

// Environment
const Environment = paypal.core.SandboxEnvironment; // or LiveEnvironment for production
const paypalClient = new paypal.core.PayPalHttpClient(new Environment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET));

module.exports = paypalClient;
