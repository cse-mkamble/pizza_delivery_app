const order = require('../models/order')

class orderController {

    async createOrder(request, response) {
        const {
            subTotal, lattLngt, address, user, cartItems
        } = request.body
        try {
            const neworder = new order({
                name: user.name,
                phone: user.phone,
                user_id: user._id,
                orderItems: cartItems,
                orderAmount: subTotal,
                shippingAddress: address,
                lattLngt: lattLngt
            })
            neworder.save()
            response.send('Place Order Successfully.')
        } catch (error) {
            return response.status(400).json({ message: error })
        }
    }

}

module.exports = new orderController()