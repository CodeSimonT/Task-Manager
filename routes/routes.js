const express = require('express')
const routes = express.Router()

const {
    getAllItem,
    createitem,
    getSingleItem,
    updateItem,
    deleteItem
} = require('../controllers/controllers')

routes.route('/').get(getAllItem).post(createitem)
routes.route('/:id').get(getSingleItem).patch(updateItem).delete(deleteItem)


module.exports = routes