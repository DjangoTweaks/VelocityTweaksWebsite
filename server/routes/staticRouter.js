const express = require("express")
const {handleUserSignUP, handleUserlogin,} = require("../controllers/user")
const {submitReview} = require("../controllers/reviewController")
const router= express.Router()
//const Product = require("../model/products");
router.get("/", (req, res)=>{
    res.render("home")
})

router.get('/store', async (req, res) => {
    try {
      const products = await Product.find(); // Fetch products from the database
      res.render('store', { products }); // Pass products to the template
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Internal Server Error');
    }
  });

router.get("/faq", (req, res)=>{
    res.render("faq")
})

router.get("/review", (req, res)=>{
  res.render("review", {user:req.user});
})

router.post("/submit-review", submitReview)

module.exports = router;