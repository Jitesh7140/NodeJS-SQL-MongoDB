const http = require("http");
/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */

const RequestFunction = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
            <head><title>Flipkart</title></head>
            <body>
                <div>
                    <a href='/' >Home</a>
                    <a href='/men' >Men</a>
                    <a href='/women' >Women</a>
                    <a href='/kids' >Kids</a>
                    <a href='/cart' >Cart</a>
                </div>
            </body>
            </html> 
            `); 
        res.end();
  } else if (req.url === "/men") {
    res.write(`
            <html>
            <head><title>Flipkart</title></head>
            <body>
                <div>
                    <h1>Men's Section </h1>
                </div>
            </body>
            </html> 
            `);
            res.end();

  }
   else if (req.url === "/women") {
    res.write(`
            <html>
            <head><title>Flipkart</title></head>
            <body>
                <div>
                    <h1>Women Section </h1>
                </div>
            </body>
            </html> 
            `);
            res.end();
  }
   else if (req.url === "/kids") {
    res.write(`
            <html>
            <head><title>Flipkart</title></head>
            <body>
                <div>
                    <h1>Kid's Section </h1>
                </div>
            </body>
            </html> 
            `);
            res.end();
  }
  else if (req.url === "/cart") {
    res.write(`
            <html>
            <head><title>Flipkart</title></head>
            <body>
                <div>
                    <h1>cart Section </h1>
                </div>
            </body>
            </html> 
            `);
            res.end();
  }
};

const PORT = 3001
http.createServer(RequestFunction).listen(PORT, () => {
  console.log(" ");
  console.log(`Server listing at url: http://localhost:${PORT}`);
  console.log(" ");
});
