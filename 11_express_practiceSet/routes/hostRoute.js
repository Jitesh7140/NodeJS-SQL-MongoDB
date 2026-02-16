const express = require('express')
const path = require('path')
const hostRoute = express.Router()

hostRoute.get('/AddHome' , (req , res ,next)=>{
    console.log("Add Home get  Router")
    res.sendFile(path.join(__dirname , '../' , 'views' , 'AddHome.html'))

})

const HomeData = []

hostRoute.post('/AddHome' , (req , res ,next)=>{
    console.log("add home post Router" , req.body)
    HomeData.push(req.body)
    res.render("HomeAdded", { data: req.body });

})

exports.hostRoute = hostRoute
exports.HomeData = HomeData