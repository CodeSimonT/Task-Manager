const {ApiError} = require('../error/customeError')

const errorHandling = (err,req,res,next) => {
    if(err instanceof ApiError) {
        res.status(err.statCode).json({msg: err.mess})
    }
    res.status(500).json({msg:err})
}

module.exports = errorHandling