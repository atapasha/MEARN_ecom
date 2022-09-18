const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    parentId: {
        type: String
    },

    price: { type: Number, required: true },

    description: {
        type: String,
        required: true,
        trim: true
    },

    offer: {
        type: Number
    },

    productPicture: [
        { img: { type: String } }
    ],


    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
    updatedAt: Date
}, { timestams: true })


mongoose.model('Product', productSchema)