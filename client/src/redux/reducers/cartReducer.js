import { constants } from "../constants"

export const cartReducer = (state = {
    cartItems: []
}, action) => {

    switch (action.type) {
        case constants.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state

    }
}