import { combineReducers } from "redux";
import { getAllPizzasReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";
import { registerUserReducer } from "./userReducer";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer
});

export default rootReducer;