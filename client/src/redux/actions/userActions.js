import axios from "axios"
import { constants } from "../constants"

export const registerUser = (user) => async dispatch => {
    dispatch({ type: constants.USER_REGISTER_REQUEST })
    try {
        const res = await axios.post(`/api/user/register`)
        dispatch({ type: constants.USER_REGISTER_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: constants.USER_REGISTER_FAILED, payload: error })
    }
}