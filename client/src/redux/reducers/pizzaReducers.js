import { pizzaConstants } from "../constants"

export default (state = {}, action) => {

    switch (action.type) {
        case pizzaConstants.GET_PIZZAS_REQUEST:
            return {
                ...state
            }

        case pizzaConstants.GET_PIZZAS_SUCCESS:
            return {
                pizzas: action.payload
            }

        case pizzaConstants.GET_PIZZAS_FAILED:
            return {
                error: action.payload
            }

        default:
            return state

    }
}