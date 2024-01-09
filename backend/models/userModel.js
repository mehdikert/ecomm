const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userModel = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    sexe: {
        type: String,
        default: "Men"
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })



module.exports = mongoose.model('userModel', userModel)