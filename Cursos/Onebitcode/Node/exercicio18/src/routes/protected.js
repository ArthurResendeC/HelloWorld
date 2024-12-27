const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware')
const users = require('../models/users')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard',authMiddleware, (req, res)=>{
    if (req.authenticatedUser.role === 'visitor' || !req.authenticatedUser) {
        return res.json({message: `Bem vindo visitante!`})
    }
    const username = req.authenticatedUser.username
    const foundUser = users.find(user => user.username === username)
    if (!foundUser) {
        return res.status(400).json({message: "Invalid information for request!"})
    }
    return res.json({message: `Bem vindo ${foundUser.username}, você está na dashboard! Segue a lista de usuários: ${users.map(user => `Nome: ${user.username}`).join('; ')}`})

})

protectedRouter.delete('/dashboard/user/:username', authMiddleware, (req, res) =>{
    const name = req.params.username

    const foundUser = users.find(user => user.username === name)
    if (!foundUser) {
        return res.status(400).json({message: "Invalid information for request!"})
    }

    if (req.authenticatedUser.role === 'visitor') {
        return res.status(401).json({message: "You don't have access to this route!"})
    }

    const { username } = req.params
    const index = users.findIndex(user => user.username === username)

    if (index === -1) {
        return res.status(400).json({message: "User to be removed not found!"})
    }

    users.splice(index, 1)
    res.status(200).json({message: `Usuário ${name} foi excluído com sucesso!`})
})

protectedRouter.post('/dashboard/register-admin', authMiddleware, (req, res)=>{
    if (req.authenticatedUser.role === 'visitor') {
        return res.status(401).json({message: `Access denied!`})
    }
    const {username, email, password} = req.body

    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({message: "Invalid register inputs!"})
    }

    const existingUser = users.find(user => user.email === email)
    const existingUsername = users.find(user => user.username === username)
    if (existingUser) {
        return res.status(400).json({message: "An user with this email already exists!"})
    }

    if (existingUsername) {
        return res.status(400).json({message: "An user with this username already exists!"})
    }

    const userToBeRegistered = { username, email, password, role: "admin"}
    users.push(userToBeRegistered)

    res.status(201).json(`${userToBeRegistered.username} was registered as admin with success!`)
})

module.exports = protectedRouter