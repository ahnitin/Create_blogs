const path  = require("path");
const User = require('../models/user');
const Comments = require("../models/comments");

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

exports.getblogs= (req,res,next)=>{
    User.findAll({
        include:Comments
    })
    .then((blogs)=>{
        Comments.findAll()
        .then(comment=>{
            console.log(comment)
            res.render('show-comments',{
            pageTitle: "allblogs",
            blogg: blogs,
            cot:comment,
        })
        })

    })
    .catch(err=>{
        console.log(err);
    })
    
}

exports.postcomments = (req,res,next)=>{
    const comments = req.body.comments;
    const id = req.body.id;

    User.findByPk(id)
    .then(user=>{
        return user.createComment({
            comments:comments,
        })
    })
    .then(comment=>{
        //console.log(comment);
    })
    .catch(err=>{
        console.log(err);
    })
    console.log(comments,id);
    res.redirect("/")
}