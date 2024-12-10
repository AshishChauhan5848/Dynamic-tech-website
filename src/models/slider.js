const mongoose = require("mongoose")
const Slider = new mongoose.Schema({
    title:String,
    subtitle:String,
    imageUrl:String,
    class:String
    
});

module.exports= mongoose.model("slider",Slider)