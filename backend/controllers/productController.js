const productModel = require('../models/productModel')
const slugify = require('slugify')

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        if (!products) {
            return res.status(200).json({ message: 'Products not found' })
        }
        res.status(200).send({
            success: true,
            message: 'All product',
            products,
            count_product: products.length,

        })
    }
    catch (error) {
        res.status(404).send({ error })
    }
}


const getProduct = async (req, res) => {
    try {
        const slug = req.params.slug
        const product = await productModel.findOne({ slug })
        if (!product) {
            return res.status(404).send({
                success: false,
                message: "Product not founded"
            })
        }
        res.status(200).send({
            success: true,
            message: "Product founded",
            product,
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "An error was occured",
            error,
        })
    }
}


const addProduct = async (req, res) => {
    try {
        const { name, slug, description, price, photoUrl, quantity, category, shipping } = req.body
        if (!name) {
            return res.status(404).send({ message: "Name required" })
        }
        if (!description) {
            return res.status(404).send({ message: "Description required" })
        }
        if (!price) {
            res.status(404).send({ message: "Price required" })
        }
        if (!category) {
            return res.status(404).send({ message: "Category required" })
        }
        if (!quantity) {
            return res.status(404).send({ message: "Quantity required" })
        }
        if (!photoUrl) {
            return res.status(404).send({ message: "Photo required" })
        }

        const id = req.params.id
        const productExist = await productModel.findById(id)
        if (productExist) {
            return res.status(200).json({ message: "Product Already exist" })
        }
        const product = new productModel({ ...req.body, slug: slugify(name) }).save()
        res.status(200).send({
            success: true,
            message: "Product added with success",
            product,
        })
    } catch (error) {
        res.status(200).send({
            success: false,
            message: 'An error was occured',
        }).json({ message: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const prod = await productModel.findById(id)
        if (!prod) {
            return res.status(404).send({
                success: false,
                message: 'product not found'
            })
        }
        const product = await productModel.findByIdAndDelete(id)
        try {

            res.status(200).send({
                success: true,
                message: 'Product Deleted'
            })
        } catch (error) {

            res.status(404).send({
                success: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "error was occured",
            error
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        const product = await productModel.findByIdAndUpdate(id, { $set: req.body, slug: slugify(name) })
        try {
            res.status(404).send({
                success: true,
                message: 'data updated',
                product,
            })
        } catch (error) {
            res.status(404).send({
                success: false,
                message: error.message,
                error,
            })
        }
    } catch (error) {
        res.status(200).send({
            success: false,
            message: 'error was occured',
            error,
        })
    }
}

module.exports = { getProducts, addProduct, getProduct, deleteProduct, updateProduct }