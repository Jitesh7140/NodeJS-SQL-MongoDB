const express = require('express')
const authController = require('../controller/authController')
const authRouter = express.Router()


authRouter.get('/login' , authController.auth)

authRouter.post('/login' , authController.authPost)

authRouter.post('/logout' , authController.authLogout)



exports.authRouter = authRouter;