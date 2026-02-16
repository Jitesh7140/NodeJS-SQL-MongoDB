

module.exports = calculator = ( res) =>{
    res.setHeader('Content-Type' , 'text/html')
    res.write(`
        <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="/sum-calculator"  method="post">
        <input type="number" name="number1" placeholder="number1" id=""><br><br>
        <input type="number" name="number2" placeholder="number2" id=""><br><br>

        <button type="submit">Sum</button>
    </form>

</body>

</html>
        `)

}