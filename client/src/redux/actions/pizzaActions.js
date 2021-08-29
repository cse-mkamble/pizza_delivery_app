import axios from "axios"
import { constants } from "../constants"

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: constants.GET_PIZZAS_REQUEST })
    try {
        const res = await axios.get(`/api/pizzas/getallpizzas`)
        dispatch({ type: constants.GET_PIZZAS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.GET_PIZZAS_FAILED, payload: error })
    }
}