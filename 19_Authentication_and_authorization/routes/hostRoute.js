const express = require('express')
const path = require('path')
const hostRoute = express.Router()

const homeController = require('../controller/hostcontroller')

hostRoute.get('/host/AddHome' ,homeController.AddHomeGet ) 
 

hostRoute.post('/host/AddHome' ,homeController.SetHome ) 

hostRoute.get('/host/edit-home/:homeid' ,homeController.GetEditHome )
hostRoute.post('/host/edit-home/' ,homeController.PostEditHome )
hostRoute.post('/host/delete-home/:homeid' ,homeController.PostDeleteHome )

hostRoute.get('/host/host-home' ,homeController.HostHomeList )

exports.hostRoute = hostRoute
 