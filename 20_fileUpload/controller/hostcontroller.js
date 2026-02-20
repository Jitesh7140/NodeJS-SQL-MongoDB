
const fs = require('fs')
const Home = require('../model/home') 


exports.AddHomeGet = (req, res, next) => {
    console.log('isLogin in add home get' , req.isLogin)
    res.render("host/edit-home", { editing: false ,isLogin:req.isLogin , user:req.user});
}

exports.SetHome = (req, res, next) => {
    const { title, type, price, location } = req.body;
    if(!req.file){
        return res.status(400).send('No image uploaded')
 
    }
   console.log('req.file is ', req.file.path)
    console.log('req.body is ', req.body)
    const image = req.file.path;
    const home = new Home({title, type, price, location, image}); 


    home.save().then(()=>{
        console.log('save success')
    }); 
    
    res.render("host/HomeAdded", { data: req.body , isLogin:req.isLogin , user:req.user});
}


exports.GetEditHome = (req, res, next) => {

     Home.findById(req.params.homeid).then((HomeData)=>{  
        
        if (!HomeData) {
            res.redirect('/')
        } else {
            res.render("host/edit-home", {user:req.user, isLogin:req.isLogin, home: HomeData, editing: req.query.editing === 'true' });
        }
    })
}

exports.PostEditHome = (req, res, next) => { 

    const { id, title, type, price, location } = req.body; 
    Home.findById(id).then((home) => {
        home.title = title
        home.type = type
        home.price = price
        home.location = location
        if (req.file) {
            fs.unlink(home.image, (err) => {
                if (err) {
                    console.error('Error deleting old image:', err);
                } else {
                    console.log('Old image deleted successfully');
                }
            });
            home.image = req.file.path
        }

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
        res.render("host/host-home-list", { isLogin:req.isLogin,HomeData: HomeData , user:req.user});
    });
}

