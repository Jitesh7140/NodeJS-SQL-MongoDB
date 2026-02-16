
const { getDb } = require('../utils/database');
const { ObjectId } = require('mongodb');

module.exports = class Home {
    constructor(_id, title, type, price, location, image) {
        if (_id) {
            this.id = _id
        }
        this.title = title
        this.type = type
        this.price = price
        this.location = location
        this.image = image
    }


    save() {
        const db = getDb();
        
        if (this.id) {
            return db.collection('homes').updateOne({ _id: new ObjectId(String(this.id)) }, { $set: this })
        } else {
            return db.collection('homes').insertOne(this)
        }


    }

    static findById(Homeid) {
        const db = getDb();
        return db.collection('homes').find({ _id: new ObjectId(String(Homeid)) }).next()
    }


    static delete(deleteID) {
        const db = getDb();
        return db.collection('homes').deleteOne({ _id: new ObjectId(String(deleteID)) })
    }

    static fetchAll() {
        const db = getDb()
        return db.collection('homes').find().toArray()
    }


}

