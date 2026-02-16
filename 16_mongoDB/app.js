//core Modules
const express = require('express');
const path = require('path')

//local Modules
const {StoreRoute} = require('./routes/storeRoute')
const {hostRoute} = require('./routes/hostRoute')
const rootDir = require('./utils/pathJS')
const {mongoConnection} = require('./utils/database')
const ErrorController = require('./controller/error')
const { error } = require('console');

const app = express()
app.use(express.urlencoded())

app.set('view engine' , 'ejs')
// app.set('views' , path.join(rootDir , 'views'))

app.use(StoreRoute)
app.use(hostRoute)

 


app.use(ErrorController.PageNotFound)

mongoConnection(() => {
    app.listen(3000 , ()=>{
        console.log(`Server start at url: http://127.0.0.1:3000`)
    })

    
})