const express = require('express');
const router = express.Router()
const { requireSignin, adminMiddleware } = require('../common-middleware')


router.get('/product/create', (req, res) => {
    console.log(req.body)

    return res.status(200).json({ message: "hello" })


})

module.exports = router;