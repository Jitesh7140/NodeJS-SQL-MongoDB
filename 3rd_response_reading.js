const http = require("http");
const fs = require('fs')

/** 
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 */

const ResquestFunction = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
      <body>
    <form action="/submit-form" method='POST'>
        <input type="text" name="username" id=""><br><br>
        <input type="text" name="username" id=""><br><br>
        <input type="text" name="username" id=""><br><br>
        <input type="password" name="password" id=""><br><br>

        <button type="submit">Submit form</button><br><br>

    </form>
    </body>
    </html>`);
    res.end(); 
  } else if (req.url === '/submit-form' && req.method == 'POST')  {
    const body = [];
    req.on("data" , (chunk)=>{
      console.log(chunk)

      // console.log(chunk.toString())
      body.push(chunk)
    })

    req.on('end' , ()=>{
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody)

     const parambodyentries = new URLSearchParams(fullbody)
     console.log(parambodyentries.entries())

    //  const objectbody = {}
    //  for( const [key , value] of parambody.entries()){
    //   objectbody[key] = value
    //  }


    const objectbody = Object.fromEntries(parambodyentries)
    console.log(objectbody)

    fs.writeFileSync('newfile.txt' , JSON.stringify(objectbody))
      




    })

    res.statusCode = 302;
    res.setHeader('Location' , '/')


    console.log("data aa gya h ")
 
  }
  res.end()
};

http.createServer(ResquestFunction).listen(3001, () => {
  console.log("Server start at url: http://localhost:3001");
});
