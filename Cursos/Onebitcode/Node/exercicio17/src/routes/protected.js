const express = require('express')
const users = require('../models/users')
const authMiddleware = require('../middlewares/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) =>{
    const username = req.authenticatedUser.username
    res.json({message: `Bem vindo ${username}, você está na área protegida!`})
})

module.exports = protectedRouter