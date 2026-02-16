
const path = require('path')
const fs = require('fs')
const favouritepath = path.join(__dirname, '../', 'data', 'favourite.json')

module.exports = class favourite {


    static AddFav(favID, CallBackFunction) {
        favourite.GetFav((favouriteHomes) => {
            if (favouriteHomes.includes(favID)) {
                console.log("Home already in favourites")

            } else {
                favouriteHomes.push(favID)
                fs.writeFile(favouritepath, JSON.stringify(favouriteHomes), CallBackFunction)
            }
        })

    }


    static DeleteFav(favID, CallBackFunction) {
        console.log(`fav id `, favID)
        favourite.GetFav((favouriteHomes) => {
            const updatedFavHomes = favouriteHomes.filter(favHome => favHome != favID); 

            fs.writeFile(favouritepath, JSON.stringify(updatedFavHomes), CallBackFunction)
        })

    }

    static GetFav(CallBackFunction) {

        fs.readFile(favouritepath, (err, data) => {
            if (!err) {
                CallBackFunction(JSON.parse(data))
            } else {
                CallBackFunction([])
            }
        })
    }




}

