require('dotenv').config();
const Order = require("../model/order");
const Cart =  require("../model/cart");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const URL = process.env.URL;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PRODUCT_ID_1 = process.env.PRODUCT_ID_1;
const PRODUCT_ID_2 = process.env.PRODUCT_ID_2;

const processCheckout = async (req, res) => {
    // Checkout Route

    try {
        const cart = await Cart.findOne({ userId: req.user.googleId });
    
        if (!cart || cart.items.length === 0) {
          return res.send('<h1>Your cart is empty.</h1>');
        }
    
        const lineItems = cart.items.map(item => ({
          price: item.priceId,
          quantity: item.quantity
        }));
    
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: `http://localhost:5173/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `http://localhost:5173/checkout/cancel`,
          metadata: {
            googleId: req.user.googleId // Pass the googleId (or userId) here
        }
        });
        res.status(200).json(session.url);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
};

const checkoutSuccess = async (req, res) => {
    const sessionId = req.query.session_id;
  console.log(sessionId)
  if (!sessionId) {
    
    return res.send('<h1>No session found</h1>'); //status code for FE.
  }

  // Find the order using the new `checkoutSessionId` field
  const order = await Order.findOne({ checkoutSessionId: sessionId });
  if (!order) {
    //console.log(checkoutSessionId)
    return res.send('<h1>No order found</h1>');  //status code for FE.
  }

  let downloadLinks = '<h1>Thanks for your order!</h1><h2>Download your products:</h2><ul>';
  order.purchasedProducts.forEach(product => {
    // Create a secure download link for each product
    downloadLinks += `<li><a href="/download/${product.productId}">${product.productName}</a></li>`;
  });
  downloadLinks += '</ul>';

  res.send(`<html><body>${downloadLinks}</body></html>`);
};

module.exports = {
    processCheckout,
    checkoutSuccess,
};
