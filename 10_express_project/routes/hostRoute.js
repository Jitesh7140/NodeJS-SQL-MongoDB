const express = require('express')
const path = require('path') 
const hostRoute = express.Router()


const rootDir = require('../utils/pathUtils')


hostRoute.get( '/host/add-home' , (req,res,next)=>{
    console.log("2nd middleware" , req.url)
    res.sendFile(path.join(rootDir,'views' , 'addHome.html' ))
})

hostRoute.post( '/host/add-home' , (req,res,next)=>{
    console.log("3nd middleware" , req.url , req.body)
    res.sendFile(path.join(rootDir , 'views' , 'homeAdded.html'))
})



module.exports = hostRoute;