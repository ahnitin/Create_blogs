const express = require("express");
const router = express.Router();
const path = require("path");
const blogsController = require("../controller/blogs")

router.get("/",blogsController.getblogs);

module.exports  = router;