const { hashPassword, comparePassword } = require('../helpers/authHelper')
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')




const registerController = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, phone, address } = req.body
        // verification
        if (!email) {
            return res.send({ message: 'Email required' })
        }
        if (!password) {
            return res.send({ message: 'Password required' })
        }
        if (!phone) {
            return res.send({ message: 'Phone required' })
        }
        if (!address) {
            return res.send({ message: 'Adress required' })
        }
        if (!firstname) {
            return res.send({ message: 'Fistname required' })
        }
        if (!lastname) {
            return res.send({ message: 'Lastname required' })
        }
        if (!username) {
            return res.send({ message: 'Username required' })
        }
        const verifyUser = await userModel.findOne({ email })
        if (verifyUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login"
            })
        }

        // register user
        const hashedPassword = await hashPassword(password)
        //save 
        const user = new userModel({
            firstname,
            lastname,
            username,
            email,
            phone,
            address,
            password: hashedPassword
        })
        const saveUser = user.save()
        res.status(201).send({
            success: true,
            message: 'successful user registration',
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in registrattion',
            error,
        })
    }
}



const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.send({
                seccess: false,
                error: 'Invalid Email or Password',
                error
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not register , please register to login'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(404).send({
                success: false,
                message: 'Invalid password',
                error
            })
        }

        // TOKEN 
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.status(200).send({
            success: true,
            message: 'login successfuly',
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error login',
            error
        })
    }
}



const testController = async (req, res) => {
    console.log('protected Routes');
    res.json({ message: 'Protected Routes' })
}
module.exports = { registerController, loginController, testController }