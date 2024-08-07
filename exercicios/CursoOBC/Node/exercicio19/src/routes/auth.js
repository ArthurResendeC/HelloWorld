const express = require('express')
const authController = require('../controllers/auth-controller')
const {ensureAuth} = require('../middlewares/auth-middleware')
const usersModel = require('../models/users-model')
const auth = express.Router()

auth.post('/register', authController.register)
auth.post('/login', authController.login)
auth.get('/users', authController.getUsers)

auth.get('/teste', ensureAuth, (req, res)=> {
    return res.json({message: "Ok"})
})

module.exports = auth