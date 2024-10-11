require('dotenv').config();
const stripe = require('../config/stripe');
const Order = require('../model/order');
const Cart =  require("../model/cart");
const nodemailer = require("nodemailer");
const axios = require('axios');

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;


// Webhook handler function
const handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];

    try {
      const event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // Log session details
        console.log('Session Details:', session);
        // Check if googleId is present in session metadata
        const userId = session.metadata ? session.metadata.googleId : null;

        if (!userId) {
          console.error('Missing googleId in session metadata');
          return res.status(400).send('User ID is required');
      }
        // Fetching session details
        const sessionDetails = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ['line_items']
        });

  // Log session details to identify product info
        console.log('Session Details:', sessionDetails);
        const purchasedProducts = sessionDetails.line_items.data.map(item => ({
            productId: item.price.id,
            productName: item.description
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
                  // Optional: Set a default mask or handle unknown products
                  mask = 'UNKNOWN-****-*****-****-****';
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

        // Send the license keys via email
        await sendLicenseKeyEmail(session.customer_details.email, licenseKeys);

        // Save order details to the database
        const order = new Order({
          // userId should be set based on your logic, perhaps stored in session metadata or elsewhere
          userId: session.metadata ? session.metadata.googleId : 'unknown_user',
          checkoutSessionId: session.id, 
          amount: session.amount_total,
          currency: session.currency,
          status: session.payment_status,
          paymentIntentId: session.payment_intent,
          customerEmail: session.customer_details.email,
          customerName: session.customer_details.name,
          paymentMethodTypes: session.payment_method_types,
          purchasedAt: new Date(),
          purchasedProducts,
          licenseKeys,
        });

        await order.save();
        console.log('Order saved:', order);


        const downloadLinks = purchasedProducts.map(product => {
          return {
              productId: product.productId,
              downloadLink: `${process.env.URL}/download/${product.productId}`, 
          };
      });
      
      // Log or send the download links as needed
      console.log('Download Links:', downloadLinks);

        // Clear the cart for the user
        await Cart.findOneAndDelete({ userId: session.metadata.googleId || 'unknown_user' });

          // Send success response with download links
          return res.status(200).json({
            success: true,
            message: 'Webhook processed successfully',
            downloadLinks: downloadLinks,
        });


      } else {
        console.log('Unhandled event type:', event.type);
      }

      res.sendStatus(200)
    } catch (err) {
      console.error('Error handling webhook event:', err.message);
      res.sendStatus(400);
    }
};

// Function to send the license key email
const sendLicenseKeyEmail = (email, licenseKeys) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS // Your email password
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
    handleWebhook,
}
