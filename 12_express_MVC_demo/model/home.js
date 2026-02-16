
const path = require('path')
const fs = require('fs')
const filepath = path.join(__dirname, '../', 'data', 'home.json')

module.exports = class Home {
    constructor(title, type, price, location, image) {
        this.title = title
        this.type = type
        this.price = price
        this.location = location
        this.image = image
    }


    save() {
        Home.fetchAll((RegisterHome) => {
            RegisterHome.push(this)
            fs.writeFile(filepath, JSON.stringify(RegisterHome), (err) => {
                console.log(err)
            })
        })




    }

    static fetchAll(CallBackFunction) {

        fs.readFile(filepath, (err, data) => {
            if (!err) {
                CallBackFunction(JSON.parse(data))
            } else {
                CallBackFunction([])
            }


        })
    }
}

