const { buffer } = require("stream/consumers")

const Calculator = (req, res) => {
    const DataBody = []
    let sum = 0

    req.on("data", (chunk) => {
        DataBody.push(chunk)
    })

    req.on("end", () => {
        const fullDataBody = Buffer.concat(DataBody).toString()
        const parambody = new URLSearchParams(fullDataBody)

        for (const [, value] of parambody) {
            sum += Number(value)
        }

        // res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`<h1>Sum is : ${sum}</h1>`)
        res.write(`<br><br><br><br>`)
        res.write(`<a href='/calculator' >Go to Calculator</a>`)
    })
}

module.exports = Calculator


module.exports = Calculator