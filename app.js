const express = require("express");
const BodyParser = require("body-parser");
const app = express();
const path  = require("path");


const adminRoutes = require("./routes/admin");
const blogsRoutes = require("./routes/blogs");
const errorController = require("./controller/error")

const sequelize = require("./connection/database");
const User = require("./models/user");
const Comments = require("./models/comments");

app.use(BodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,"public")))
app.use(adminRoutes);
app.use(blogsRoutes);

app.use(errorController.errorpage);

User.hasMany(Comments);
Comments.belongsTo(User);

sequelize
.sync()
// .sync({force:true})
.then(res=>{
    console.log("Success")
})
.catch(err=>{
    console.log(err);
})


app.listen(3001);
