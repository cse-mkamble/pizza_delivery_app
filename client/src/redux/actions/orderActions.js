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

export const getUserOrders = () => async (dispatch, getState) => {
    const user = getState().loginUserReducer.user
    dispatch({ type: constants.GET_USER_ORDERS_REQUEST })
    try {
        const res = await axios.post(`/api/orders/getuserorders`, { user_id: user._id })
        dispatch({ type: constants.GET_USER_ORDERS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_USER_ORDERS_FAILED, payload: error })
    }
}