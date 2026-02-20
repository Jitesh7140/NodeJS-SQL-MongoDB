const express = require('express')
const authController = require('../controller/authController')
const authRouter = express.Router()


authRouter.get('/login' , authController.Loginauth)

authRouter.post('/login' , authController.LoginauthPost)



authRouter.get('/signup' , authController.SignAuth)

authRouter.post('/signup' , authController.SignAuthPost)




authRouter.post('/logout' , authController.authLogout)



exports.authRouter = authRouter;