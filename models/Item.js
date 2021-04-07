const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)