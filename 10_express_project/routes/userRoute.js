const express = require('express')
const path = require('path') 

const userRoute = express.Router()
const rootDir = require('../utils/pathUtils')

userRoute.get( "/", (req,res,next)=>{
    console.log("first middleware" , req.url)
    res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'))
    
})

module.exports = userRoute;