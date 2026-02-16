const express = require('express')
const path = require('path') 

const userRoute = express.Router()
const rootDir = require('../utils/pathUtils')
const {HomeArray} = require("./hostRoute")



userRoute.get( "/", (req,res,next)=>{
    
console.log("home array is: " ,HomeArray)
    console.log("first middleware" , req.url)
    // res.sendFile(path.join(rootDir ,'views', 'home.ejs'))

    res.render('home' , {HomeArray})
    
    
})

module.exports = userRoute;