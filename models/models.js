const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `please provide a name`],
        trim: true,
        maxlength: [20,`name should not exceed 20 characters`]
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', itemSchema)