const http = require("http");
const RequestFunction = require('./ResquestFunction')



http.createServer(RequestFunction).listen(3001 , ()=>{
    console.log("Server start at url: http://localhost:3001")
})