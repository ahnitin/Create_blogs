const path  = require("path");

exports.getAddblog = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-blog.html"));
}

exports.postAddblog = (req,res,next)=>{
    console.log(req.body);
    res.redirect("/blogs")
}