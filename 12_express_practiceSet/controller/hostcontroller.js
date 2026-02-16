 
const path = require('path') 
const Home = require('../model/home')


exports.AddHomeGet = (req, res, next) => {
    res.render("host/AddHome" , );
}

exports.SetHome = (req, res, next) => {
    const { title, type, price, location, image } = req.body;
    const home = new Home(title, type, price, location, image);
    home.save();
 
    res.render("host/HomeAdded", { data: req.body });
}

 
exports.HostHomeList = (req, res, next) => {
     Home.fetchAll( (HomeData)=>{ 
         res.render("host/host-home-list", { HomeData: HomeData }); 
    } );  
} 

