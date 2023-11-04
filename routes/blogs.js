const express = require("express");
const router = express.Router();
const path = require("path");
const blogsController = require("../controller/blogs")

router.get("/",blogsController.getblogs);

router.post("/comments",blogsController.postcomments)

router.get("/details/:id",blogsController.showComments);

module.exports  = router;