const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Store the user's Google ID here
  checkoutSessionId: { type: String,  },
  amount: { type: Number },
  currency: { type: String },
  status: { type: String },
  paymentIntentId: { type: String },
  customerEmail: { type: String },
  customerName: { type: String },
  paymentMethodTypes: { type: [String] },
  purchasedAt: { type: Date, default: Date.now },
  purchasedProducts: [
    {
      productId: { type: String, required: true },
      productName: { type: String, required: true }
    }
  ],
  licenseKeys: [
    {
      productName: String,
      licenseKey: String,
    }
  ]
});

module.exports = mongoose.model('Order', orderSchema);
