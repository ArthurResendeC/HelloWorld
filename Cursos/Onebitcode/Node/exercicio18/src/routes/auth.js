const express = require('express')
const jwt = require('jsonwebtoken')
const users = require('../models/users')

const authRouter = express.Router()

const secretKey = 'minha-chave-secreta' // dasij21i0j321hd78dysa9120ejjd0sf973yr210

authRouter.post('/register', (req, res)=>{
    const { username, email, password } = req.body

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

    const userToBeRegistered = { username, email, password, role: "visitor"}
    users.push(userToBeRegistered)

    res.status(201).json(`${userToBeRegistered.username} was registered with success!`)
})

authRouter.post('/login', (req, res)=>{
    const {email, password} = req.body

    if (typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({message: "Invalid login inputs!"})
    }

    const user = users.find(user => user.email === email)
    if (!user || user.password !== password) {
        return res.status(401).json({message: "Invalid credentials for login!"})
    }

    const username = user.username
    const userrole = user.role
    const payload = { username, userrole }

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })

    res.json({token})
})

module.exports = authRouter