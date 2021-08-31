import axios from "axios"
import { constants } from "../constants"

export const registerUser = (user) => async dispatch => {
    dispatch({ type: constants.USER_REGISTER_REQUEST })
    try {
        const res = await axios.post(`/api/user/register`, { user })
        dispatch({ type: constants.USER_REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: constants.USER_REGISTER_FAILED, payload: error })
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type: constants.USER_LOGIN_REQUEST })
    try {
        const res = await axios.post(`/api/user/login`, { user })
        dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: res.data })
        localStorage.setItem('user', JSON.stringify(res.data.user))
        window.location.href = '/'
    } catch (error) {
        dispatch({ type: constants.USER_LOGIN_FAILED, payload: error })
    }
}