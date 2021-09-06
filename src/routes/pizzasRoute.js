const express = require("express")
const router = express.Router()
const pizzasController = require('../controllers/pizzasController')

// pizzas
router.get('/pizzas/getallpizzas', pizzasController.index)
router.get('/pizzas/:id', pizzasController.show)
router.post('/pizzas/addpizza', pizzasController.store)
router.put('/pizzas/:id', pizzasController.update)
router.delete('/pizzas/:id', pizzasController.delete)

module.exports = router