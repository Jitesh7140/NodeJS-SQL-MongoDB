
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

            if (this.id) {   // EDIT CASE

                RegisterHome = RegisterHome.map((home) => {
                    if (home._id === this.id) {
                        return this
                    }
                    return home
                })

            } else {   // ADD CASE
                this.id = Math.random().toString()
                RegisterHome.push(this)
            }

            fs.writeFile(filepath, JSON.stringify(RegisterHome, null, 2), (err) => {
                if (err) console.log(err)
            })

        })
    }


    static delete(deleteID) {
        Home.fetchAll((RegisterHome) => {

            const updatedHomes = RegisterHome.filter(home => home._id != deleteID);
            console.log('delete successfully')

            fs.writeFile(filepath, JSON.stringify(updatedHomes, null, 2), (err) => {
                if (err) console.log(err)
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

