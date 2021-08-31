import { combineReducers } from "redux";
import { getAllPizzasReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";
import { registerUserReducer, loginUserReducer } from "./userReducer";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
});

export default rootReducer;