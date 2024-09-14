require('dotenv').config();
const express = require ("express")
const app = express ();
const path = require('path');
const Product = require('../model/product');
const Order = require("../model/order");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const URL = process.env.URL;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PRODUCT_ID_1 = process.env.PRODUCT_ID_1;
const PRODUCT_ID_2 = process.env.PRODUCT_ID_2;

app.use(express.urlencoded({ extended: true }));
console.log('Product ID 1:', PRODUCT_ID_1);
console.log('Product ID 2:', PRODUCT_ID_2);

const downloadProduct = async (req, res) => {
    const { productId } = req.params;

    // Fetch the order to verify if the product was purchased
    const order = await Order.findOne({ "purchasedProducts.productId": productId });

    if (!order) {
        return res.status(403).send('Unauthorized access');
    }

    // Map productId to actual file name or path
    const productMap = {
        [PRODUCT_ID_1]: 'product1.exe',
        [PRODUCT_ID_2]: 'product2.exe'
    };

    const fileName = productMap[productId];
    if (!fileName) {
        return res.status(404).send('Product not found');
    }

    const filePath = path.join(__dirname, 'downloads', fileName);

    // Serve the file for download
    res.download(filePath, fileName, err => {
        if (err) {
            console.error('File download error:', err);
            res.status(500).send('Error downloading file');
        }
    });
};


module.exports = {
    downloadProduct,
};
