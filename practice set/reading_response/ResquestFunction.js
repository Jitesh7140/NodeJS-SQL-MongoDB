const homeHandler = require("./homeHandler")
const calculator = require('./calculator')
const sum_function = require('./SumCalculator')
const result = require('./result')


const RequestHandler = (req, res) => {

    if (req.url === '/') {
        homeHandler(res);
    } else if (req.url === '/calculator') {
        calculator(res);
    } else if (req.url === '/sum-calculator') {
        sum_function(req, res);


    } else if (req.url === '/result') {
        sum_function(res, sum);

    }


 
}

module.exports = RequestHandler