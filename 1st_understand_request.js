const http = require("http")

function RequestFunction(req , res ){
    // console.log(req)

    // console.log(process.cpuUsage().user)

    console.log(`Url is:` , req.url )
    console.log(`Method is:` ,req.method )
    console.log(`Header is:` ,req.headers )

    // process.exit()                         stop listing
}
// console.log(http)

let PORT = 3001

http.createServer(RequestFunction).listen(PORT , ()=>{
    console.log(" ")
    console.log(`Server is listing at Port: ${PORT}`)
    console.log(" ")
})