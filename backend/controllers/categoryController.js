const categoryModel = require('../models/categoryModel')
const slugify = require('slugify')


// get all category 
const getCategories = async (req, res) => {
    try {
        const data = await categoryModel.find()
        try {
            res.status(200).send({
                success: true,
                message: 'Success request',
                data
            })
        } catch (error) {
            res.status(404).send({
                success: false,
                message: "category not found"
            })
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "An error was occured",
            error
        })
    }
}

// get category
const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await categoryModel.findById(id)
        try {
            res.status(200).json({ data })
        } catch (error) {
            res.status(404).send({
                success: false,
                message: error.message,
            })
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "An error was occured",
            error
        })
    }
}

// create category
const createCategory = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(404).send({ message: 'Name required' })
        }

        const existCat = await categoryModel.findOne({ name })
        if (existCat) {
            return res.status(200).send({
                success: true,
                message: "Category exist"
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: 'New Category added',
            category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'An error was occured',
            error,
        })
    }
}

// delete categort 
const deleteCategory = async (req, res) => {
    try {
        const { id } = params.id
        const deleteCat = await categoryModel.findByIdAndDelete(id)
        if (!deleteCat.ok) {
            res.status(200).json({ message: 'Category not found' })
        }
        res.status(200).json({ message: 'Category deleted successfuly' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "An error was occured",
            m: error.message
        })
    }
}

// update category 
const updateCategory = async (req, res) => {

    try {
        const { name } = req.body
        const { id } = req.params
        const update = await categoryModel.findByIdAndUpdate(id, { $set: req.body, slug: slugify(name) })
        update.save()
        res.status(200).send({
            success: true,
            message: 'updated category',
            update
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: 'An error was occured',
            error: error.message,
        })
    }
}



module.exports = { createCategory, updateCategory, getCategories, getCategory, deleteCategory }