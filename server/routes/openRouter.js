const express = require("express")
const {handleUserSignUP, handleUserlogin,} = require("../controllers/user")
const router= express.Router()



router.get("/", (req, res)=>{
    res.render("open");
})


router.get("/home", (req, res)=>{
    res.render("homeOpen")
})

router.get("/store", (req, res)=>{
    res.render("storeOpen")
})


router.get("/faq", (req, res)=>{
    res.render("faqOpen")
})

module.exports = router;

