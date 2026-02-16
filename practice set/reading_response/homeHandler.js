
module.exports = homeHandler = (res ) =>{
    res.setHeader('Content-Type' , 'text/html')
    res.write(`
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <div>
        <h1>Welcome to Calculator</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis neque eum quis nesciunt autem nihil
            tempore consequatur. Sint temporibus natus explicabo, laboriosam fugit, aut quia, quaerat sed dolorum ipsa
            pariatur possimus soluta deserunt a cupiditate quos? Porro sit alias veniam modi velit, obcaecati
            praesentium, recusandae necessitatibus nesciunt, earum iste ducimus?</p>
    </div>
    <br><br><br><br>

    <a href="/calculator">
        <button type="submit">Calculator</button>
    </a>

</body>

</html>
        `)

}