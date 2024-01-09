const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categoryModel = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    }
}, { timestamps: true })


module.exports = mongoose.model('categoryModel', categoryModel)