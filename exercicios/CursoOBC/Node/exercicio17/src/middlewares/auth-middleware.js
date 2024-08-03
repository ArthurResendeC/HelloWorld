const jwt = require('jsonwebtoken')
const users = require('../models/users')

const secretKey = 'palavra-chave-super-secreta' // dasij21i0j321hd78dysa9120ejjd0sf973yr210

const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({message: "Authorization required!"})
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, secretKey)
        const user = users.find(user => user.username === decodedToken.username)

        if (!user) {
            return res.status(401).json({message: "Invalid info!"})
        }

        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({message: 'Invalid token!'})
    }

    console.log(token);
    next() 
}

module.exports = authMiddleware