
const db = require('../utils/database');


module.exports = class Home {
    constructor(id, title, type, price, location, image) {
        this.id = id
        this.title = title
        this.type = type
        this.price = price
        this.location = location
        this.image = image
    }


    save() {
        if (!this.id) {
            // New data case (INSERT)
            return db.execute(
                "INSERT INTO homes (title, type, price, location, image) VALUES (?, ?, ?, ?, ?)",
                [this.title, this.type, this.price, this.location, this.image]
            );
        } else {
            // Edit case (UPDATE)
            return db.execute(
                `UPDATE homes 
                SET title = ?, type = ?, price = ?, location = ?, image = ?
                 WHERE id = ?`,
                [
                    this.title,
                    this.type,
                    this.price,
                    this.location,
                    this.image,
                    this.id
                ]
            );
        }
    }



    static delete(deleteID) {
        return db.execute("DELETE FROM homes WHERE id = ?", [deleteID]);

    }

    static fetchAll() {
        return db.execute("SELECT * FROM homes")

    }




}

