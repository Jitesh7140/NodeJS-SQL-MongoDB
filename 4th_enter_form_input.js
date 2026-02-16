const http = require('http')
const fs = require('fs')

const RequestServer = (req , res ) =>{
    console.log(req.url)
    if(req.url === '/'){
            
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Form Page</title>
                </head>
                <body>
                    <h1>User Form</h1>
                    <form action="/submit-form" method="POST">
                        <label>Name:</label><br>
                        <input type="text" name="username"><br><br>

                        <label>Email:</label><br>
                        <input type="email" name="email"><br><br>

                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
        res.end(); 
    }
    else if (req.url === '/submit-form' && req.method == 'POST'){
        // console.log(" aa hgye bhai")
        // fs.writeFileSync('usernaem.txt' , 'jitesh saini')

        res.statusCode = 302;
        console.log(" code set ho gya h ")
        
        res.setHeader('location' , '/')
        console.log(" location redirect ho gai h  ")


    }

    res.end();
}
    


http.createServer(RequestServer).listen(3001, ()=>{
    console.log(`Server is starting at: http://localhost:3001`) 
})