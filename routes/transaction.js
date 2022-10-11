const express = require('express')
const authController = require('../controllers/auth')
const paymentController = require('../controllers/payment')

const router = express.Router()

router.route('/account-statement').get(authController.protect, paymentController.Account_statement)

module.exports = router