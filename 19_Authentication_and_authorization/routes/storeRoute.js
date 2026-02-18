const express = require('express') 
const StoreRoute = express.Router() 


const {HomeData} = require('./hostRoute')
const storecontroller = require('../controller/storecontroller')

StoreRoute.get('/' ,storecontroller.indexPage ) 
StoreRoute.get('/home-list' ,storecontroller.getHome )
StoreRoute.get(`/home-list/:homeID` ,storecontroller.getHomeDetails )

StoreRoute.get('/bookings' ,storecontroller.bookings )

StoreRoute.get('/favorites' ,storecontroller.getfavorites )
StoreRoute.post('/favorites' ,storecontroller.Postfavorites ) 

StoreRoute.post('/favorites/remove/:favids' ,storecontroller.RemovieFavorites )

exports.StoreRoute = StoreRoute 