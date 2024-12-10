const express = require("express")
const {route} = require("express/lib/application")
const Contact = require("../models/contact")
const Detail = require("../models/Details")
const Slider =require("../models/slider")
const Service = require("../models/Service")
const Banner = require("../models/Banner")
const Gallpic =require("../models/Gallpic")


const routes =express.Router() 

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id":"6530e2664483ad57bcaa37c6"})
    const slides =await Slider.find()
    const services =await Service.find()
    const ban = await Banner.find()
    
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        ban:ban
    })
    
})

routes.get("/gallery",async(req,res)=>{
    const gallpics = await Gallpic.find()
     const details = await Detail.findOne({"_id":"6530e2664483ad57bcaa37c6"})
    res.render("gallery",{
    details:details,
    gallpics:gallpics

})

})

routes.post("/process-contact-form",async(req,res)=>{
    
    console.log("submitted")
    // console.log(req.body)
    
    try {
        
        const data= await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    } catch (error) {
        console.log(e)
        res.redirect("/")

    }


})


module.exports = routes