const path  = require("path");
exports.errorpage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","404.html"))
}