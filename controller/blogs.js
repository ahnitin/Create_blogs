const path  = require("path");
const User = require('../models/user');

exports.getAddblog = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-blog.html"));
}

exports.postAddblog = (req,res,next)=>{
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;

    User.create({
        title:title,
        author:author,
        content:content,
    })
    .then(result=>{
        console.log(res)
        res.redirect("/");
    })
    .catch(err=>{
        console.log(err);
    }) 
}

exports.getblogs = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,"../","views","blog.html"));
    User.findAll()
    .then(blogs=>{
        res.render('blog',{
            pageTitle: "allblogs",
            blogg: blogs,
        })
    })
    .catch(err=>{
        console.log(err);
    })
    
}