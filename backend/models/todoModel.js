const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    tags:{
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todo', todoSchema)