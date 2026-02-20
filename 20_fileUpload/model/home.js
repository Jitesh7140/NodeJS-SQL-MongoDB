 const  mongoose = require('mongoose')


 const HomeSchema = mongoose.Schema({
    title: {type:String, required: true},
    type: {type:String, required: true},
    price: {type:Number, required: true},
    location: {type:String, required: true},
    image: {type:String, required: true}
 })

module.exports = mongoose.model('Home', HomeSchema)

// constructor(_id, title, type, price, location, image) {
//     if (_id) {
//         this.id = _id
//     }
//     this.title = title
//     this.type = type
//     this.price = price
//     this.location = location
//     this.image = image
// }