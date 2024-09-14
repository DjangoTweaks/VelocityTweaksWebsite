const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Store the user's Google ID here
  items: [{
    productName: { type: String, required: true },
    priceId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 }
  }],
  totalAmount: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('cart', cartSchema);
