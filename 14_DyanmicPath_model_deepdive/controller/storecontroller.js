
const Home = require('../model/home')
const favourite = require('../model/favou')

exports.indexPage = (req, res, next) => {
    Home.fetchAll((HomeData) => {
        res.render("store/index", { HomeData: HomeData });
    });
}

exports.getHome = (req, res, next) => {
    Home.fetchAll((HomeData) => {
        res.render("store/home-list", { HomeData: HomeData });
    });

}

exports.bookings = (req, res, next) => {
    res.render("store/booking",);
}

exports.getfavorites = (req, res, next) => {

    favourite.GetFav((GetFavData) => {
        Home.fetchAll((HomeData) => {  
            const favHomeData= HomeData.filter( (home) =>{
                 return GetFavData.includes(home._id)
            }) 

            res.render("store/fav-list", { favData: favHomeData });

        })
    })

}

exports.Postfavorites = (req, res, next) => {

    favourite.AddFav(req.body.favItem, (FavData) => {
        // console.log(`file writing sucessfully`)
    });
    res.redirect('/favorites')
}

exports.RemovieFavorites = (req, res, next) => {

    favourite.DeleteFav(req.params.favids , (err)=>{
        console.log(`erro on delete fav`, err)
    }) 
    res.redirect('/favorites')
}

exports.getHomeDetails = (req, res, next) => {
    // console.log(req.params.homeID)
    Home.fetchAll((HomeData) => {
        res.render("store/home-details", { HomeData: HomeData, ID: req.params.homeID });
    });

}

