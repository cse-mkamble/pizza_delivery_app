import axios from "axios"
import { constants } from "../constants"

export const placeOrder = (subTotal, lattLngt, address) => async (dispatch, getState) => {

    const user = getState().loginUserReducer.user
    const cartItems = getState().cartReducer.cartItems

    dispatch({ type: constants.PLACE_ORDER_REQUEST })
    try {
        const res = await axios.post(`/api/orders/placeorder`, { subTotal, lattLngt, address, user, cartItems })

        dispatch({ type: constants.PLACE_ORDER_SUCCESS })
    } catch (error) {
        dispatch({ type: constants.PLACE_ORDER_FAILED, payload: error })
    }

}