
const Home = require('../model/home')
 
exports.indexPage = (req, res, next) => {
     Home.fetchAll( (HomeData)=>{ 
         res.render("store/index", { HomeData: HomeData }); 
    } );  
} 

exports.getHome = (req, res, next) => {
     Home.fetchAll( (HomeData)=>{ 
         res.render("store/home-list", { HomeData: HomeData }); 
    } );  
} 

exports.bookings = (req, res, next) => { 
         res.render("store/booking",  );  
}

exports.favorites = (req, res, next) => { 
         res.render("store/fav-list",  );   
}

 