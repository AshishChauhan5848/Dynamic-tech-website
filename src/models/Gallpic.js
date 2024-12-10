const mongoose = require("mongoose")
const Gallpic = new mongoose.Schema({
    
    Url:String
    
});

module.exports= mongoose.model("gallpic",Gallpic)