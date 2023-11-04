const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/blogs",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","blog-list.html"));
})

module.exports  = router;