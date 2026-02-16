const express = require('express')
const path = require('path')
const hostRoute = express.Router()

const homeController = require('../controller/hostcontroller')

hostRoute.get('/AddHome' ,homeController.AddHomeGet ) 
 

hostRoute.post('/AddHome' ,homeController.SetHome )

hostRoute.get('/host-home' ,homeController.HostHomeList )

exports.hostRoute = hostRoute
