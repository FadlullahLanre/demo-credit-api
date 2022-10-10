const AppError = require('../utils/appError')
const bcrypt = require('bcrypt')
const db = require('../config/connect')
const pinValidator = require('../validator/userPin')


const bankPin = async (user, value) => {
    const Pin = await pinValidator.validateAsync(value)
    const pin = await bcrypt.hash(Pin.pin, 12)
    await db("users").where({ id: user[0].id }).update({
        pin: pin
    })
}

module.exports = {
    bankPin
}