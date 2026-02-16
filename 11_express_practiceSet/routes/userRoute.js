const express = require('express')
const path = require('path')
const userRoute = express.Router()

const rootDir = require('../utils/pathJS')

const {HomeData} = require('./hostRoute')

userRoute.get('/' , (req , res ,next)=>{
    console.log("user Router" , HomeData )
    res.render("Home", { HomeData: HomeData });

})

exports.userRoute = userRoute