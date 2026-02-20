//core Modules
const express = require('express');
const { mongoose } = require('mongoose')
const { error } = require('console');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const multer = require('multer');
const mongo_url = 'data base url';

//local Modules
const { StoreRoute } = require('./routes/storeRoute')
const { hostRoute } = require('./routes/hostRoute')
const { authRouter } = require('./routes/auth')
const ErrorController = require('./controller/error');
const { randomBytes } = require('crypto');
const path = require('path');
const rootDir = require('./utils/pathJS')

const app = express()
app.use(express.urlencoded())

app.use(express.static(path.join(rootDir, 'public')))
app.use('/uploads', express.static(path.join(rootDir, 'uploads')))
app.use('/host/uploads', express.static(path.join(rootDir, 'uploads')))
app.use('/home-list/uploads', express.static(path.join(rootDir, 'uploads')))

const randomString =(length) => {
    return randomBytes(length).toString('hex').slice(0, length);
}

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
        cb(null, true)
    } else {
        cb(new Error('Only JPEG, PNG, and GIF files are allowed'), false)
    }
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    }
    ,
    filename: function (req, file, cb) {
        cb(null, randomString(16) + '-'  + file.originalname) 
    }
})

const multerOptions ={
    storage , fileFilter
}
app.use(multer(multerOptions).single('image'))



app.set('view engine', 'ejs')
// app.set('views' , path.join(rootDir , 'views'))

const store = new MongoDBStore({
    uri: mongo_url,
    collection: 'sessions'
})

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    store: store
}))

app.use((req, res, next) => {
    // console.log('Cookies: ', req.get('Cookie'));
    // console.log('session is: ', req.session);
    req.isLogin = req.session.isLogin;
    req.user = req.session.user;
    next()
})


app.use(authRouter)
app.use(StoreRoute)
app.use("/host", (req, res, next) => {
    if (!req.isLogin) {
        return res.redirect('/login')
    } else {

        next()
    }
})

app.use(hostRoute)

app.use(ErrorController.PageNotFound)




mongoose.connect(mongo_url).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log(`Server start at url: http://127.0.0.1:3000`)
    })
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
}
);
