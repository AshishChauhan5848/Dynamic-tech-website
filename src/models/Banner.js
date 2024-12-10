const mongoose = require("mongoose")
const Banner = new mongoose.Schema({
    imgUrl1:String,
    imgUrl2:String,
    Heading1:String,
    Paragraph1:String,
    Heading2:String,
    Paragraph2:String
    
});

module.exports= mongoose.model("banners",Banner)