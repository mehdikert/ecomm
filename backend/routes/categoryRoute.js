const express = require('express')
const categoryRouter = express.Router()
const { createCategory, updateCategory, getCategories, getCategory, deleteCategory } = require('../controllers/categoryController.js')
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware')


categoryRouter.get('/all', requireSignIn, isAdmin, getCategories)

categoryRouter.get('/:id', requireSignIn, isAdmin, getCategory)

categoryRouter.post('/create', requireSignIn, isAdmin, createCategory)

categoryRouter.patch('/update/:id', requireSignIn, isAdmin, updateCategory)

categoryRouter.delete('/delete/:id', requireSignIn, isAdmin, deleteCategory)


module.exports = categoryRouter     