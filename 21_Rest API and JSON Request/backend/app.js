//core Modules
const express = require('express');
const { mongoose } = require('mongoose')    
const mongo_url = 'mongodb+srv://root:root@newmongodb.mliecuf.mongodb.net/todo?appName=NewMongoDB';

//local Modules
const ErrorController = require('./controller/error');   
const {todorouter} = require('./routes/todoRoutes')
const cors = require('cors')

const app = express()
 
app.use(cors())
app.use(express.json())
app.use('/api/todo', todorouter)

// Last me 404 handler
app.use(ErrorController.PageNotFound)

mongoose.connect(mongo_url).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log(`Server start at url: http://127.0.0.1:3000`)
    })
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
}
);
