const express = require('express')
const path = require('path')
const hostRoute = express.Router()

const homeController = require('../controller/home')

hostRoute.get('/AddHome' ,homeController.AddHomeGet ) 
 

hostRoute.post('/AddHome' ,homeController.SetHome )

exports.hostRoute = hostRoute
