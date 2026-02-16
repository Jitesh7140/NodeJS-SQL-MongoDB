
const path = require('path')
const fs = require('fs')
const { getDb } = require('../utils/database');
const favouritepath = path.join(__dirname, '../', 'data', 'favourite.json')

module.exports = class favourite {
    constructor(HouseID) {
        this.HouseID = HouseID
    }

    static  AddFav(favID) {
        const db = getDb();
        console.log('the fav id = ', favID)
        return this.GetFav().then((favHomeData) => {
            const favExist = favHomeData.find((home) => {
                if (home.favID == favID.favID) {
                    return true
                } 
            })
            if (favExist) {
                console.log('favid alreay exist')
                return;

            } else {
                console.log('add sucess')
                return db.collection('favo').insertOne(favID)
            }

        })
 
    }





    static DeleteFav(RemoviefavID) {
        console.log(`fav id `, RemoviefavID)
        const db = getDb();
        return db.collection('favo').deleteOne({ favID: RemoviefavID })


    }

    static GetFav() {
        const db = getDb()
        return db.collection('favo').find().toArray()

    }




}

