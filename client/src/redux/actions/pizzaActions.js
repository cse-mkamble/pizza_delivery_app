import axios from "axios"
import { pizzaConstants } from "../constants"

export const getAllPizzas = () => dispatch => {
    dispatch({ type: pizzaConstants.GET_PIZZAS_REQUEST })
    try {
        const res = axios.get(`/api/pizzas/getallpizzas`)
        console.log(res)
        dispatch({ type: pizzaConstants.GET_PIZZAS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: pizzaConstants.GET_PIZZAS_FAILED, payload: error })
    }
}