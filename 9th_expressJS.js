const http = require('http')
const express = require('express'); 

const app = express();

app.use('/',(req , res,next)=>{ 
    next()
})

app.use( '/', (req , res,next)=>{ 
    next()
})  

app.get( '/', (req , res,next)=>{
    console.log("this is third midalware: ",  req.url  ,req.method  )
    res.send(`<h1>this is the home page</h1>
        <br><br>
        <a href='/contect' >contect us</a>
        `) 
})

app.get( '/contect', (req , res,next)=>{
    console.log("this is get contect midalware: ",  req.url  , req.method )
    res.send(`<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>this is the conect page</h1><br><br>

    <form action="/contect" method="POST">
        <input type="text" name="name" placeholder="Enter the name" id=""><br><br><br>
        <input type="email" name="email" placeholder="Enter the email" id=""><br><br><br>
        <button type="submit">Submit btn</button><br><br><br>
    </form>

</body>

</html>`)
    
})  

app.post( '/contect', (req , res,next)=>{
    console.log("this is post contect midalware: ",  req.url  , req.method )
    res.send(` <h1>submit page</h1> 
        
        <a href="/contect" >contect back</a>
        `)
    
    
})  



const port = 3000

app.listen(port , ()=>{
     console.log(`server start at: http://localhost:${port}`)
})





