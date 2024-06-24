const express = require("express");

const router = express.Router();

const {submitReview} = require("../controller/reviewController")

router.post('/', submitReview);

router.get("/", (req, res)=>{
    res.send("hi")
})
module.exports = router;