//core Modules
const express = require('express');
const path = require('path')
const {mongoose} = require('mongoose')
const { error } = require('console');

//local Modules
const {StoreRoute} = require('./routes/storeRoute')
const {hostRoute} = require('./routes/hostRoute')
const rootDir = require('./utils/pathJS')
const {mongoConnection} = require('./utils/database')
const ErrorController = require('./controller/error')

const app = express()
app.use(express.urlencoded())


app.set('view engine' , 'ejs')
// app.set('views' , path.join(rootDir , 'views'))

app.use(StoreRoute)
app.use(hostRoute)  

app.use(ErrorController.PageNotFound)

const mongo_url = 'mongodb+srv://root:root@newmongodb.mliecuf.mongodb.net/?appName=NewMongoDB';
 


mongoose.connect(mongo_url).then(()=>{
    console.log('Connected to MongoDB');
      app.listen(3000 , ()=>{
        console.log(`Server start at url: http://127.0.0.1:3000`)
    })
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
}
);
