const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const color = require('@colors/colors');
const morgan = require('morgan')
const authRoutes = require('./routes/authRoute')
const categoryRoutes = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


//ROUTES
app.use('/auth', authRoutes)
app.use('/category', categoryRoutes)
app.use('/product', productRoute)
// DB CONNECTION
mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => console.log(("database successful connect" + mongoose.connection.host).bgBrightGreen))
    .catch(() => console.log('error database connection'.bgRed))


// EXPRESS APP   
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`.bgBlue);
})