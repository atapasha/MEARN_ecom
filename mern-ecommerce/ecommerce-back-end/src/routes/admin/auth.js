const express = require('express');
const { model } = require('mongoose');

const router = express.Router();

const { signup, signin } = require('../../controller/admin/auth')



router.post('/admin/signup', signup)
router.post('/admin/signin', signin)




module.exports = router