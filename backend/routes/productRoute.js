const express = require('express')
const { getProducts, addProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController')
const productRoute = express.Router()
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware')


// get all

productRoute.get('/all', getProducts)

// get one
productRoute.get('/get-product/:slug', getProduct)

// post product
productRoute.post('/add', requireSignIn, isAdmin, addProduct)

// delete product
productRoute.delete('/delete-product/:id', requireSignIn, isAdmin, deleteProduct)

// update product 
productRoute.patch('/update-product/:id', requireSignIn, isAdmin, updateProduct)


module.exports = productRoute