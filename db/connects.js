const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectDB