const express = require('express')
const app = express()

const connectDB = require('./db/connects')
require('dotenv').config()
const routes = require('./routes/routes')
const notFound = require('./middleware/notFound')
const errorHandling = require('./middleware/errorHandling')

// parse the json file
app.use(express.json())
app.use(express.static('./public'))

// all the routes
app.use('/api/v1/tasks/', routes)
app.use(notFound)
app.use(errorHandling)

const port = process.env.PORT || 3000

const appStart = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port:${port}`))
    } catch (error) {
        console.log(error);
    }
}

appStart()