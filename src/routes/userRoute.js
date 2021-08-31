const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')

// user
router.post('/user/register', userController.register)

module.exports = router