const jwt = require('jsonwebtoken')
const users = require('../models/users')

const secretKey = 'minha-chave-secreta'

const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization

    if (authHeader === undefined | null) {
        next()
    }

    const token = authHeader.split(' ')[1]

    try {
        const verifiedToken = jwt.verify(token, secretKey)
        const user = users.find(user => user.username === verifiedToken.username)

        if (!user) {
            return res.status(401).json({message: "Invalid information!"})
        }

        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({message: "Error authenticating..."})
    }

    next()
}

module.exports = authMiddleware