const express = require("express");
const BodyParser = require("body-parser");
const app = express();
const path  = require("path");


const adminRoutes = require("./routes/admin");
const blogsRoutes = require("./routes/blogs");
const errorController = require("./controller/error")

const sequelize = require("./connection/database");
const User = require("./models/user");


app.use(BodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")))
app.use(adminRoutes);
app.use(blogsRoutes);

app.use(errorController.errorpage);

sequelize
.sync()
.then(res=>{
    console.log("Success")
})
.catch(err=>{
    console.log(err);
})


app.listen(3001);
