const { getPayPalAccessToken } = require('../config/paypal'); // Import the access token function
const Order = require('../model/order');
const Cart = require('../model/cart');
const nodemailer = require('nodemailer');
const axios = require('axios');

// Webhook handler function for PayPal
const handlePayPalWebhook = async (req, res) => {
    const eventBody = req.body;

    try {
        // Get the PayPal access token
        const accessToken = await getPayPalAccessToken();

        // Check if the event type is a successful order capture
        if (eventBody.event_type === 'CHECKOUT.ORDER.APPROVED') {
            const orderId = eventBody.resource.id;

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
            const googleId = req.user.googleId;

            // Log captured order details
            console.log('Captured Order:', capturedOrder);
            console.log('Purchase Units:', capturedOrder.purchase_units[0]);
             // Product name mapping for license key generation
        const productMapping = {
          "WittCepter Product 1": "Basic Utility",
          "WittCepter Product 2": "Premium utility",
      };

              // Extract product details and map to internal names
        const purchasedProducts = capturedOrder.purchase_units[0].items.map(item => ({
          productId: item.sku,
          productName: productMapping[item.name] || item.name,  // Fallback to PayPal name if no mapping
      }));

            // Loop through purchased products and generate a license key for each
            const licenseKeys = await Promise.all(
                purchasedProducts.map(async product => {
                    let mask;
                    if (product.productName === 'Basic Utility') {
                        mask = 'BASIC-****-*****-****-****';
                    } else if (product.productName === 'Premium utility') {
                        mask = 'ADVANCED-****-*****-****-****';
                    } else {
                        console.error(`Unknown product: ${product.productName}`);
                        mask = 'UNKNOWN-****-*****-****-****'; // Default for unknown products
                    }

                    const keyAuthResponse = await axios.get('https://keyauth.win/api/seller/', {
                        params: {
                            sellerkey: '41c53e856284893fe769ebad06c0bdd4',
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
            //await sendLicenseKeyEmail(capturedOrder.payer.email_address, licenseKeys);
            await sendLicenseKeysEmail('dawkarad2002@gmail.com', purchasedProducts, licenseKeys);

            // Save order details to the database
            const order = new Order({
                userId: googleId || 'unknown_user', // Set this to the user identifier
      
                amount: capturedOrder.purchase_units[0].payments.captures[0].amount.value,
                currency: capturedOrder.purchase_units[0].payments.captures[0].amount.currency_code,
                status: capturedOrder.status,
                paymentIntentId: capturedOrder.id,
                customerEmail: capturedOrder.payer.email_address,
                customerName: capturedOrder.payer.name.given_name + ' ' + capturedOrder.payer.name.surname,
                paymentMethodTypes: ['paypal'],
                purchasedAt: new Date(),
                purchasedProducts,
                licenseKeys,
            });

            await order.save();
            console.log('Order saved:', order);

            // Clear the cart for the user
            await Cart.findOneAndDelete({ userId: googleId || 'unknown_user' });

            res.sendStatus(200);
        } else {
            console.log('Unhandled event type:', eventBody.event_type);
            res.sendStatus(200);
        }
    } catch (err) {
        console.error('Error handling PayPal webhook event:', err.message);
        res.sendStatus(400);
    }
};

// Function to send the license key email
const sendLicenseKeyEmail = (email, licenseKeys) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
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
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
    handlePayPalWebhook,
};
