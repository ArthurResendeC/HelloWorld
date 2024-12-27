const HttpError = require("../errors/Httperrors")

module.exports = (error, req, res, next)=>{
    if (error) {
        if (error instanceof HttpError) {
            res.status(error.status).json({message: error.message})
        } else if (error instanceof Error) {
            res.status(400).json({message: error.message})
        }
    } else {
        next()
    }
}