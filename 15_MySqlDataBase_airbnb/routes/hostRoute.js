const express = require('express')
const path = require('path')
const hostRoute = express.Router()

const homeController = require('../controller/hostcontroller')

hostRoute.get('/AddHome' ,homeController.AddHomeGet ) 
 

hostRoute.post('/AddHome' ,homeController.SetHome )

hostRoute.get('/edit-home/:homeid' ,homeController.GetEditHome )
hostRoute.post('/edit-home/' ,homeController.PostEditHome )
hostRoute.post('/delete-home/:homeid' ,homeController.PostDeleteHome )

hostRoute.get('/host-home' ,homeController.HostHomeList )

exports.hostRoute = hostRoute
