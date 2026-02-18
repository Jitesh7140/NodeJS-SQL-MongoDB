
const Home = require('../model/home')
const favourite = require('../model/favou');
const { Double } = require('mongodb');

exports.indexPage = (req, res, next) => {
    Home.find().then((HomeData) => {
        res.render("store/index", {  isLogin:req.isLogin,HomeData: HomeData  , isLogin:req.isLogin});
    }) 
}

exports.getHome = (req, res, next) => { 
    if(!req.isLogin){
        return res.redirect('/login')
    }
    Home.find().then((HomeData) => {
        res.render("store/home-list",  {isLogin:req.isLogin, HomeData: HomeData ,isLogin:req.isLogin });
    }) 
}

exports.bookings = (req, res, next) => {
      if(!req.isLogin){
        return res.redirect('/login')
    }
    res.render("store/booking", {isLogin:req.isLogin});
}

exports.getfavorites = (req, res, next) => {
  if(!req.isLogin){
        return res.redirect('/login')
    }

    favourite.find().then((favhomes) => {

        const newFavArrya = favhomes.map(homes => homes.favID.toString())

        Home.find().then((HomeData) => {
            const favHomeData = HomeData.filter((home) => {
                return newFavArrya.includes(home._id.toString())
            })

            res.render("store/fav-list", { isLogin:req.isLogin,favData: favHomeData });
        })
    })
}

exports.Postfavorites = (req, res, next) => {
      if(!req.isLogin){
        return res.redirect('/login')
    }
    const favid = { favID: req.body.favItem } 
    
    favourite.findOne({ favID: favid.favID }).then((existingFav) => {
        if (existingFav) {
            console.log('Home is already in favorites');
            return res.redirect('/favorites');
        } else {
            const favhome = new favourite(favid);
            favhome.save().then(() => {
                console.log('Home added to favorites successfully');
                res.redirect('/favorites');
            }
            ).catch((err) => {
                console.log('Error adding home to favorites:', err);
                res.redirect('/favorites');
            });
        }

    })
}
exports.RemovieFavorites = (req, res, next) => {
  if(!req.isLogin){
        return res.redirect('/login')
    }
    favourite.deleteOne({ favID: req.params.favids }).then(() => {
        console.log('delete fav sucess')
        res.redirect('/favorites')
    })
}

exports.getHomeDetails = (req, res, next) => {
      if(!req.isLogin){
        return res.redirect('/login')
    }
    // console.log(req.params.homeID)
    Home.findById(req.params.homeID).then((HomeData) => {
        console.log('home data in controller:', HomeData)
        res.render("store/home-details", { isLogin:req.isLogin,HomeData: HomeData });
    })


}

