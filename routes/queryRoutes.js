const express = require("express");

const router = express.Router();

const {submitQuery} = require("../controller/queryController")

router.post('/', submitQuery);

router.get("/", (req, res)=>{
    res.send("hi this is query route")
})
module.exports = router;