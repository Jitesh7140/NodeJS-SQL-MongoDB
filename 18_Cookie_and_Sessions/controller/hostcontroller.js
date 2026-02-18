
const path = require('path')
const Home = require('../model/home')
const favourite = require('../model/favou')

exports.AddHomeGet = (req, res, next) => {
    console.log('isLogin in add home get' , req.isLogin)
    res.render("host/edit-home", { editing: false ,isLogin:req.isLogin });
}

exports.SetHome = (req, res, next) => {
    const { title, type, price, location, image } = req.body;
    const home = new Home({title, type, price, location, image}); 

    home.save().then(()=>{
        console.log('save success')
    });

    res.render("host/HomeAdded", { data: req.body , isLogin:req.isLogin });
}



exports.GetEditHome = (req, res, next) => {

     Home.findById(req.params.homeid).then((HomeData)=>{  
        
        if (!HomeData) {
            res.redirect('/')
        } else {
            res.render("host/edit-home", {isLogin:req.isLogin, home: HomeData, editing: req.query.editing === 'true' });
        }
    })
}

exports.PostEditHome = (req, res, next) => { 

    const { id, title, type, price, location, image } = req.body; 
    Home.findById(id).then((home) => {
        home.title = title
        home.type = type
        home.price = price
        home.location = location
        home.image = image
        home.save().then(() => {
            console.log('edit  success')
            res.redirect('/host/host-home')
        })  
    }).catch((err) => {
        console.log('error on edit home', err)
    })  

    console.log('edit  success') 
}



exports.PostDeleteHome = (req, res, next) => {
    Home.findByIdAndDelete(req.params.homeid).then(() => {
        console.log('home deleted successfully');
    }).catch((err) => {
        console.log('error deleting home:', err);
    });

     

    console.log('delete  success id = ' + req.params.homeid)
    res.redirect('/host/host-home')
}


exports.HostHomeList = (req, res, next) => {
    Home.find().then((HomeData)=>{ 
        res.render("host/host-home-list", { isLogin:req.isLogin,HomeData: HomeData });
    });
}

