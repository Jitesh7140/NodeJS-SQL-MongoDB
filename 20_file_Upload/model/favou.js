
const path = require('path')
const fs = require('fs')
const { getDb } = require('../utils/database');
const favouritepath = path.join(__dirname, '../', 'data', 'favourite.json')


const mongoose = require('mongoose')


const favouriteSchema = mongoose.Schema({
    favID: { type: mongoose.Schema.Types.ObjectId, ref: 'Home', required: true, unique: true }
})



module.exports = mongoose.model('favourite', favouriteSchema)
  


 