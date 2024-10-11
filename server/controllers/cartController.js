require("dotenv").config();
const Cart = require("../model/cart");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const URL = process.env.URL;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PRODUCT_ID_1 = process.env.PRODUCT_ID_1;
const PRODUCT_ID_2 = process.env.PRODUCT_ID_2;

// View Cart Route
const viewCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.googleId });

  if (!cart || cart.items.length === 0) {
    return res.send("<h1>Your cart is empty.</h1>");
  }

  let cartHTML = `<h1>Your Cart</h1><ul>`;
  cart.items.forEach((item) => {
    cartHTML += `
      <li>${item.productName} - x ${item.quantity}
        <form action="/cart/cart/decrease" method="POST" style="display:inline;">
          <input type="hidden" name="productName" value="${item.productName}">
          <input type="hidden" name="price" value="10">
          <button type="submit">-</button>
        </form>
        <form action="/cart/cart/increase" method="POST" style="display:inline;">
          <input type="hidden" name="productName" value="${item.productName}">
          <input type="hidden" name="price" value="25">
          <button type="submit">+</button>
        </form>
      </li>`;
  });
  cartHTML += `</ul>`;
  cartHTML += `<form action="/checkout" method="POST"><input type="submit" value="Buy Now"></form>`;
  cartHTML += `<form action="/checkout/choose-payment" method="GET">
    <button type="submit">choose payment method</button>
</form>`

  res.send(cartHTML);
};

const viewCartFix = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.googleId });

  if (!cart || cart.items.length === 0) {
    return res.status(200).json({
      msg: "Your Cart is Empty",
      items: [],
    });
  }

  const cartItems = cart.items.map((item, index) => ({
    id: index,
    productName: item.productName,
    quantity: item.quantity,
  }));

  res.status(200).json({
    msg: "Your Cart",
    items: cartItems,
  });
};

// Add to Cart Route
const addToCart = async (req, res) => {
  const { productName, priceId, price } = req.body; // Add price to destructuring

  let cart = await Cart.findOne({ userId: req.user.googleId });

  if (!cart) {
    cart = new Cart({ userId: req.user.googleId, items: [], totalAmount: 0 });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productName === productName
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cart.items.push({ productName, priceId, price, quantity: 1 }); // Include price here
  }

  await cart.save();
  res.redirect("/products");
};

// Route to increase quantity
const updateCart = async (req, res) => {
  const { productName } = req.body;

  let cart = await Cart.findOne({ userId: req.user.googleId });

  if (cart) {
    const itemIndex = cart.items.findIndex(
      (item) => item.productName === productName
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
      await cart.save();
    }
  }

  res.redirect("/cart/cart");
};

// Route to decrease quantity
const removeFromCart = async (req, res) => {
  const { productName } = req.body;

  let cart = await Cart.findOne({ userId: req.user.googleId });

  if (cart) {
    const itemIndex = cart.items.findIndex(
      (item) => item.productName === productName
    );

    if (itemIndex > -1) {
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1); // Remove item if quantity is less than 1
      }
      await cart.save();
    }
  }

  res.redirect("/cart/cart");
};

const clearCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.googleId });

  if (!cart) {
    return res.status(404).json({
      msg: "Cart Not Found",
    });
  }

  cart.items = [];
  await cart.save();

  res.status(200).json({
    msg: "Cleared Cart Successfully"
  });
};

module.exports = {
  viewCart,
  addToCart,
  updateCart,
  removeFromCart,
  viewCartFix,
  clearCart,
};
