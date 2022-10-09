const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

const {
    signup,
    login,
    protect
} = require('../controllers/auth')

router.post('/signup', signup)
router.post('/login', login)

router.route('/createPin').post(protect, userController.createPin)
router.route('/profile').get(protect, userController.getUser)
router.route('/deposit').post(protect, userController.deposit)
router.route('/withdraw').post(protect, userController.withdraw)
router.route('/transfer').post(protect, userController.transfer)
router.route('/delete_allUser').delete(userController.deleteUser)

router.get("/All", userController.AllUser)
module.exports = routert