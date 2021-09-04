const express = require("express")
const router = express.Router()
const orderController = require('../controllers/orderController')
    
// order
router.post('/orders/placeorder', orderController.createOrder)
router.post('/orders/getuserorders', orderController.getUserAllOrders)

module.exports = router
