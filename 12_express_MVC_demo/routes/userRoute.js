const express = require('express')
const path = require('path')
const userRoute = express.Router() 

const {HomeData} = require('./hostRoute')
const homeController = require('../controller/home')

userRoute.get('/' ,homeController.getHome )

exports.userRoute = userRoute