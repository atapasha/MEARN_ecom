
const express = require('express')
const env = require('dotenv')
const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose')


//routes

const authRouts = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRouter = require('./routes/category')

const productRoutes = require('./routes/product')
//envirment variables 

env.config()


//mongoose connecttion
mongoose.connect('mongodb://localhost:27017/ecommmm', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log('Db conencted')).catch(err => console.log(err))



app.use(express.json())
app.use('/api', authRouts)
app.use('/api', adminRoutes)
app.use('/api', categoryRouter)
app.use('./api', productRoutes)
app.listen(process.env.PORT, () => {
    console.log(`server is runing on port ${process.env.PORT}`)
})