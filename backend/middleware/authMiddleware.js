const JWT = require('jsonwebtoken');
const userModel = require("../models/userModel");

//Protected Routes token base
const requireSignIn = async (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'Unauthorized access - Bearer token not provided' });
        }
        // Extract the token from the Authorization header
        const token = authHeader.split(' ')[1];

        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

//admin acceess
const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middelware",
        });
    }
};

module.exports = { isAdmin, requireSignIn }