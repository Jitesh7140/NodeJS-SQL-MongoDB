const express = require('express') 
const StoreRoute = express.Router() 


const {HomeData} = require('./hostRoute')
const storecontroller = require('../controller/storecontroller')

StoreRoute.get('/' ,storecontroller.indexPage ) 
StoreRoute.get('/home-list' ,storecontroller.getHome )
StoreRoute.get('/bookings' ,storecontroller.bookings )
StoreRoute.get('/favorites' ,storecontroller.favorites )

exports.StoreRoute = StoreRoute