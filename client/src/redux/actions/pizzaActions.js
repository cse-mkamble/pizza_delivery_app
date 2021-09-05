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

export const filterPizzas = (searchKey, category) => async dispatch => {
    var filterPizzas
    dispatch({ type: constants.GET_PIZZAS_REQUEST })
    try {
        const res = await axios.get(`/api/pizzas/getallpizzas`)
        if ( searchKey && (category!='all')) {
            filterPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
            filterPizzas = filterPizzas.filter(pizza => pizza.category.toLowerCase()==category)
        } else if (category!='all') {
            filterPizzas = res.data.filter(pizza => pizza.category.toLowerCase()==category)
        } else {
            filterPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
        }
        // filterPizzas = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
        // if (category!='all') {
        //     filterPizzas = res.data.filter(pizza => pizza.category.toLowerCase()==category)
        // }
        dispatch({ type: constants.GET_PIZZAS_SUCCESS, payload: filterPizzas })
    } catch (error) {
        dispatch({ type: constants.GET_PIZZAS_FAILED, payload: error })
    }
}