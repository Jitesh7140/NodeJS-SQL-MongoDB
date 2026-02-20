//core Modules
const express = require('express');
const { mongoose } = require('mongoose')
const { error } = require('console');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const mongo_url = 'databasse url';

//local Modules
const { StoreRoute } = require('./routes/storeRoute')
const { hostRoute } = require('./routes/hostRoute')
const { authRouter } = require('./routes/auth')
const ErrorController = require('./controller/error');

const app = express()
app.use(express.urlencoded())


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
