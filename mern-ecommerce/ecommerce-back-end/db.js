const mongoose = require('mongoose');
env.config()
const dbConnect = () => {

    //connect Db'mongodb://localhost/my_database'

    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('Db conencted')).catch(err => console.log(err))


}


module.exports = dbConnect;