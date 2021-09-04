import { constants } from "../constants"

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.PLACE_ORDER_REQUEST:
            return {
                loading: true
            }
        case constants.PLACE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case constants.PLACE_ORDER_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}