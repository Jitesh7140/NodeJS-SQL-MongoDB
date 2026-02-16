
const path = require('path')
const Home = require('../model/home')
const favourite = require('../model/favou')

exports.AddHomeGet = (req, res, next) => {
    res.render("host/edit-home", { editing: false });
}

exports.SetHome = (req, res, next) => {
    const { id, title, type, price, location, image } = req.body;
    const home = new Home(id,title, type, price, location, image); 

    home.save().then(()=>{
        console.log('save success')
    });

    res.render("host/HomeAdded", { data: req.body });
}



exports.GetEditHome = (req, res, next) => {

     Home.findById(req.params.homeid).then((HomeData)=>{  
        
        if (!HomeData) {
            res.redirect('/')
        } else {
            res.render("host/edit-home", { home: HomeData, editing: req.query.editing === 'true' });
        }
    })
}

exports.PostEditHome = (req, res, next) => { 

    const { id, title, type, price, location, image } = req.body; 
    const home = new Home(id,title, type, price, location, image); 
    
    home.save() 

    console.log('edit  success')
    res.redirect('/host-home')
}



exports.PostDeleteHome = (req, res, next) => {
    Home.delete(req.params.homeid)

    favourite.DeleteFav(req.params.homeid, (err) => {
        console.log(`erro on delete fav`, err)

    })

    console.log('delete  success id = ' + req.params.homeid)
    res.redirect('/host-home')
}


exports.HostHomeList = (req, res, next) => {
    Home.fetchAll().then((HomeData)=>{ 
        res.render("host/host-home-list", { HomeData: HomeData });
    });
}

