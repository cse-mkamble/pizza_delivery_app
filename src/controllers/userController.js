const User = require('../models/userModel')

class userController {
  async register(request, response) {
    const { name, phone, password } = request.body
    const newUser = new User({ name, phone, password })
    try {
      newUser.save()
      response.send('User Registered Successfully')
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }
}

module.exports = new userController()