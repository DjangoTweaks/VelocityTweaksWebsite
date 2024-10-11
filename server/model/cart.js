// model/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productName: { type: String, required: true },
      priceId: { type: String, required: true },
      price: { type: Number,  }, // Add price field
      quantity: { type: Number, default: 1 },
    },
  ],
  totalAmount: { type: Number, default: 0 },
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
