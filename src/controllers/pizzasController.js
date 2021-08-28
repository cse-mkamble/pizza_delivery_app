const Pizzas = require('../models/pizzasModel')

class pizzasController {
  async index(request, response) {
      try {
          const data = await Pizzas.find({})
          response.send(data)
      } catch (error) {
        return response.status(400).json({ message: error })
      }
  }
    
  async show(request, response) {
    return response.json({})
  }
    
  async store(request, response) {
    return response.json({})
  }
    
  async update(request, response) {
    return response.json({})
  }
    
  async delete(request, response) {
    return response.json({})
  }
}

module.exports = new pizzasController()