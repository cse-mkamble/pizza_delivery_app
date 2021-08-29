import { combineReducers } from "redux";
import { getAllPizzasReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer
});

export default rootReducer;