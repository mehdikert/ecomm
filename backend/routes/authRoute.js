const { registerController, loginController, testController } = require('../controllers/authController')

const userRouter = require('express').Router()
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware')



/* ROUTING */


// Register 
userRouter.post('/register', registerController)

// Login
userRouter.post('/login', loginController)

// protected user route 
userRouter.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ ok: true });
})

// protected admin route 
userRouter.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).json({ ok: true });
})

module.exports = userRouter 