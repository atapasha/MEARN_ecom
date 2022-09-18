const express = require('express')
const Category = require('../models/category')
const router = express.Router()
const slugify = require('slugify')


const { addCategory, getCategoris } = require('../controller/category')
const { requireSignin, adminMiddleware } = require('../common-middleware')


router.post('/category/create', requireSignin, adminMiddleware, addCategory)
router.get('/category/getcategory', getCategoris)
module.exports = router;