const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productModel = new Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'categoryModel'
    },
    quantity: {
        type: Number,
        require: true,
    },
    photoUrl: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    },
    shipping: {
        type: Boolean
    }
}, { timestamps: true })


module.exports = mongoose.model('productModel', productModel)