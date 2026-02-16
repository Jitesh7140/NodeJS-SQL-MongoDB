//core Modules
const express = require('express');
const path = require('path')

//local Modules
const {userRoute} = require('./routes/userRoute')
const {hostRoute} = require('./routes/hostRoute')
const rootDir = require('./utils/pathJS')


const app = express()
app.use(express.urlencoded())

app.set('view engine' , 'ejs')
app.set('views' , path.join(rootDir , 'views'))

app.use(userRoute)
app.use(hostRoute)

app.use((req , res ,next)=>{
    // console.log("404 Not Found")
    res.sendFile(path.join(__dirname , './' , 'views' , '404.html'))
})

app.listen(3000 , ()=>{
    console.log(`Server start at url: http://127.0.0.1:3000`)
})