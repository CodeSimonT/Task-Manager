const Item = require('../models/models')
const wrapper = require('../middleware/asyncWrap')
const {customeError} = require('../error/customeError')

const getAllItem = wrapper(async(req,res) => {
    const task = await Item.find({})
    res.status(200).json({task})
})
const createitem = wrapper(async(req,res) => {
    const task = await Item.create(req.body)
    res.status(200).json({task})
})
const getSingleItem = wrapper(async(req,res,next) => {
    const {id:itemID} = req.params
    const task = await Item.findOne({_id:itemID})
    if(!task) {
        return next(customeError(`No item with an id:${itemID}`,404))
    }
    res.status(201).json({task})
})
const updateItem = wrapper(async(req,res,next) => {
    const {id:itemID} = req.params
    const task = await Item.findOneAndUpdate({_id:itemID}, req.body, {
        runValidators: true,
        new: true
    })
    if(!task) {
        return next(customeError(`No item with an id:${itemID}`,404))
    }
    res.status(201).json({task})
})
const deleteItem = wrapper(async(req,res,next) => {
    const {id:itemID} = req.params
    const task = await Item.findOneAndDelete({_id:itemID})
    if(!task) {
        return next(customeError(`No item with an id:${itemID}`,404))
    }
    res.status(201).json({task})
})

module.exports = {
    getAllItem,
    createitem,
    getSingleItem,
    updateItem,
    deleteItem
}