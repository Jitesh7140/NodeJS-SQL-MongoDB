// const HomeData = []

const path = require('path')
const Home = require('../model/home')



exports.AddHomeGet = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'AddHome.html'))
}

exports.SetHome = (req, res, next) => {
    const { title, type, price, location, image } = req.body;
    const home = new Home(title, type, price, location, image);
    home.save();
 
    res.render("HomeAdded", { data: req.body });
}

exports.getHome = (req, res, next) => {
     Home.fetchAll( (HomeData)=>{ 
         res.render("Home", { HomeData: HomeData }); 
    } ); 
 
   
}


