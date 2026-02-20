
const Home = require('../model/home')
const User = require('../model/user');
const { Double } = require('mongodb');
const path = require('path')


exports.indexPage = (req, res, next) => {
    // console.log('session in index page: ', req.user);
    // console.log('session in isLogin page: ', req.isLogin);
    Home.find().then((HomeData) => {
        res.render("store/index", { HomeData: HomeData, isLogin: req.isLogin, user: req.user });
    })
}

exports.getHome = (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }
    Home.find().then((HomeData) => {
        res.render("store/home-list", { user: req.user, isLogin: req.isLogin, HomeData: HomeData });
    })
}

exports.bookings = (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }
    res.render("store/booking", { isLogin: req.isLogin, user: req.user });
}

exports.getfavorites = async (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }

    const userID = req.user._id;
    const user = await User.findById(userID).populate('favorites')

    res.render("store/fav-list", { isLogin: req.isLogin, favData: user.favorites, user: req.user });

}
exports.Postfavorites = async (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }
    const favid = { favID: req.body.favItem };
    const userID = req.session.user._id;
    const user = await User.findById(userID);
    if (user.favorites.includes(favid.favID)) {
        console.log('Home is already in favorites');
        return res.redirect('/favorites');
    }
    user.favorites.push(favid.favID);
    await user.save();
    console.log('Successfully added favorite home for user:', user.username);
    res.redirect('/favorites');

}
exports.RemovieFavorites = async (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }
    const userID = req.session.user._id;
    const favID = req.params.favids;
    const user = await User.findById(userID)
    if (user.favorites.includes(favID)) {
        user.favorites.pull(favID);
        await user.save();
    }
    console.log('delete fav sucess')
    res.redirect('/favorites')

}

exports.getHomeDetails = (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }

    Home.findById(req.params.homeID).then((HomeData) => {
        // console.log('home data in controller:', HomeData)
        res.render("store/home-details", { isLogin: req.isLogin, HomeData: HomeData, user: req.user, });
    })


}


exports.getHomeRules = (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    }

    const homeID = req.params.homeID;
    const filename = 'hpl_team.pdf';
    const filepath = path.join(__dirname, '../', 'rules', filename);
    res.download(filepath, 'rules.pdf', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            return res.status(500).send('Error downloading file');
        }
        console.log('File downloaded successfully');
    });


}

