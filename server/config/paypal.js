const axios = require('axios');
const { access } = require('fs');

// PayPal API URLs
const PAYPAL_API_BASE_URL = process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com'; // For live, switch to the live PayPal API
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

// Get PayPal access token
async function getPayPalAccessToken() {
    const response = await axios({
        url: `${PAYPAL_API_BASE_URL}/v1/oauth2/token`,
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET,
        },
        params: {
            grant_type: 'client_credentials'
        }
    });
   
    //return response.data.access_token;
    const accessToken = response.data.access_token;
    console.log('PayPal Access Token:', accessToken);

    return accessToken;

    
}

// Create PayPal order
async function createPayPalOrder(items, totalAmount, returnUrl, cancelUrl) {
    const accessToken = await getPayPalAccessToken();

    const response = await axios({
        url: `${PAYPAL_API_BASE_URL}/v2/checkout/orders`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        data: {
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: totalAmount.toFixed(2),
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: totalAmount.toFixed(2),
                        },
                    },
                },
                items: items,
            }],
            application_context: {
                return_url: returnUrl,
                cancel_url: cancelUrl,
            },
        },
    });

    return response.data;
}

// Capture PayPal order
async function capturePayPalOrder(orderId) {
    const accessToken = await getPayPalAccessToken();
    console.log(accessToken);
    const response = await axios({
        url: `${PAYPAL_API_BASE_URL}/v2/checkout/orders/${orderId}/capture`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    return response.data;
}

module.exports = {
    createPayPalOrder,
    capturePayPalOrder,
};
