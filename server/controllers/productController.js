const Product = require('../model/product');

const listProducts = async (req, res) => {
    try {
        res.render('products', { 
            product1: process.env.PRODUCT_ID_1, 
            product2: process.env.PRODUCT_ID_2 
          });  // You can replace this with rendering a view if needed
        
    } catch (error) {
        res.status(500).send('An error occurred while fetching products');
    }
};

const productDetails = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.json(product);  // You can replace this with rendering a view if needed
    } catch (error) {
        res.status(500).send('An error occurred while fetching product details');
    }
};

module.exports = {
    listProducts,
    productDetails,
};
