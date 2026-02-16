const http = require('http')

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */


const RequestFunction = (req , res )=>{
    console.log(`Url is:` , req.url )
    console.log(`Method is:` ,req.method )
    console.log(`Header is:` ,req.headers )

       if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>This is Home Page</h1>');
        res.write('<p>This page is designed using Node.js response</p>');
        res.write('</body>');
        res.write('</html>');
        res.end();

    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>');
        res.write('<h1>About Us</h1>');
        res.write('<p>This is the about page of our website.</p>');
        res.write('</body>');
        res.write('</html>');
        res.end();

    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Products</title></head>');
        res.write('<body>');
        res.write('<h1>Our Products</h1>');
        res.write('<ul>');
        res.write('<li>Product 1</li>');
        res.write('<li>Product 2</li>');
        res.write('<li>Product 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>404</title></head>');
        res.write('<body>');
        res.write('<h1>404 Page Not Found</h1>');
        res.write('<p>Sorry, page does not exist.</p>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }


   
    res.end()
    
}

const port = 3001;

http.createServer(RequestFunction).listen(port , ()=>{
    console.log(`Server Listing at url: http://localhost:${port}`)
})