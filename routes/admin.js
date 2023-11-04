const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();
const blogsController = require("../controller/blogs");

router.get("/add-blogs",blogsController.getAddblog)

router.post("/add-blogs",blogsController.postAddblog);
module.exports = router;